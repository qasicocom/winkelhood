<?php
namespace Winkelhood\Warehouse\Repositories\Category;
use Winkelhood\Core\BaseRepository;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Warehouse\Models\Category;
use Winkelhood\Warehouse\Repositories\CategoryRepository;

/**
 * Product Category Eloquent Repository
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 3, 2014 
 * @category RepositoryEloquent
 * @package Winkelhood\Warehouse
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements CategoryRepository, Crudable
{

	protected  $tmp;
	
	/**
	 * Class contructor
	 * Define the model classes that will be used
	 *
	 * @param Model $m_Blank
	 * --------------------------------------------------------------------
	 */
	public function __construct( Category $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Mengambil data Semua turunan dari Categories ini
	 *
	 * @param int $category_id
	 * @param boolean $show_taxonomy value true akan menampilkan multi dimension array| false 1 dimensi
	 * @param boolean $show_detail
	 * @return boolean|string|Ambigous <boolean, string, unknown>
	 * --------------------------------------------------------------------------------
	 */
	public function taxonomy ( $company_id, $category_id = null, $show_detail = false, $except = null )
	{
		$query = \DB::table    ( 'retail_product_category as cat' )
					->join     ( 'retail_outlet as outlet', 'outlet.id', '=', 'cat.outlet_id' )
					->where    ( 'outlet.company_id', '=', $company_id )
					->where    ( 'cat.parent_id', '=', $category_id )
					->select   ( 'cat.id', 'cat.parent_id', 'cat.name' )
					->addSelect ( \DB::raw( '( select count(*) from retail_product where category_id = cat.id  ) as num_product' ) );
		
		if( $except != null )
		{
			$query->where( 'cat.id', '!=', $except );
		}
		
		$categories = $query->get();

		if( $categories )
		{
			$result = array();
			foreach ( $categories as $category )
			{
				if( $show_detail ){
					$result [ $category->id ] = $category;
					$result [ $category->id ]->child = $this->taxonomy( $company_id, $category->id, $show_detail, $except );
				}
				else {
					$result [ $category->id ]->child = $this->taxonomy( $company_id, $category->id, $show_detail, $except );
				}
			}
			
			return $result;
		}
		
		return false;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Making tree from taxonomi 
	 * 
	 * @param array $category
	 * @param int $count
	 * --------------------------------------------------------------------
	 */
	public function makingTree( $category, $count = 0 )
	{
		$count = $count + 1;
		if( $category )
		{
			
			foreach ( $category as $cat )
			{
				$indent_flag = '';
				
				if (  $cat->parent_id != 0 ) {
					
					for($x = 1; $x < $count; $x ++) {
						$indent_flag .= '&mdash;';
					}
					
					$indent_flag = $indent_flag . '&nbsp;';
				}
				
				$cat->present = $indent_flag . $cat->name;
				$child        = $cat->child ;
				unset( $cat->child );
				$this->tmp [] = $cat;
				
				if( is_array ( $child ) )
				{
					$this->makingTree( $child,  $count );
				}
			}
		}
		
		
		
		return $this->tmp;
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkelhood\Product\Repositories\Category\CategoryRepository::datatable()
	 * --------------------------------------------------------------------
	 */
	public function datatable( $company_id )
	{
		$cat  = $this->taxonomy( $company_id, null, true );
		$tree = $this->makingTree( $cat );
		
		if( count( $tree ) > 0 ) {

			$newData = array();
			$i = 0;
			foreach( $tree as $category )
			{
				$i ++;
				$checkbox   = '<label class="checkbox-inline px-single">';
				$checkbox  .= \Form::checkbox('ids[]', $category->id, 0, array( 'id'=>'cbx_'. $category->id, 'class'=>'px selectOne' ) );
				$checkbox  .= '<span class="lbl"></span></label>';
					
				$data [ 0 ] = $checkbox;
				$data [ 1 ] = '<span class="hide">'.$i.'</span>';
				$data [ 2 ] = $category->present;
				$data [ 3 ] = $category->num_product;
				
				$update = array( '/warehouse/category/update/' . encrypt( $category->id ) );
				$delete = array( '/warehouse/category/delete/' . encrypt( $category->id ) );
				
				$data [ 4 ] = \HTML::tableAction( $update, $delete );
				
				$newData[] = $data;
			}
			
			return $newData;
		}
		
		return false;
	}
	// --------------------------------------------------------------------
	
	public function select ( $company_id, $selected = 0, $except = null )
	{
		
		$taxonomy = $this->taxonomy( $company_id, null, true, $except );
		$tree     = $this->makingTree( $taxonomy );
		
		$select   = array();
		
		$select[ 0 ] = trans( 'form.label.category.parent' );
		
		if( ( is_array( $tree) ) && ( count( $tree ) > 0 ) )
		{
			foreach( $tree as $category )
			{
				$select[$category->id] = $category->present;
			}
		}

		return \Form::select( 'parent_id', $select,  $selected,  array( 'class'=>'form-control' ) );
	}
	
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkelhood\Product\Repositories\Category\CategoryRepository::count()
	 * --------------------------------------------------------------------
	 */
	public function count( $company_id )
	{
		
	}
	// --------------------------------------------------------------------
	
}
