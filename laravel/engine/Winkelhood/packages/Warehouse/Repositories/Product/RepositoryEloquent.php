<?php
namespace Winkelhood\Warehouse\Repositories\Product;
use Winkelhood\Core\BaseRepository;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Warehouse\Models\Product;
use Winkelhood\Warehouse\Repositories\ProductRepository;

/**
 * Eloquent Product Repository
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 3, 2014 
 * @category RepositoryEloquent
 * @package Winkelhood\Product
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements ProductRepository, Crudable
{

	/**
	 * Class contructor
	 * Define the model classes that will be used
	 *
	 * @param Winkelhood\Warehouse\Models\Product $model
	 * --------------------------------------------------------------------
	 */
	public function __construct( Product $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------

	/**
	 * (non-PHPdoc)
	 * @see \Winkel\Repositories\Product\ProductRepository::datatable()
	 * --------------------------------------------------------------------
	 */
	public function datatable( $company_id, $filter = false, $access = false )
	{
		if( is_null( $company_id ) && ! $access )
		{
			return false;
		}
		
		$query = \DB::table    ( 'retail_product as product' )
					->join     ( 'retail_outlet as outlet', 'outlet.id', '=', 'product.outlet_id' )
					->join     ( 'retail_product_category as cat', 'cat.id', '=', 'product.category_id', 'left' )
					->join     ( 'retail_supplier as supplier', 'supplier.id', '=', 'product.supplier_id', 'left' )
					->where    ( 'outlet.company_id', '=', $company_id )
					->select   ( 'product.id', 'product.name', 'product.warehouse', 'product.image', 'product.have_variant', 'product.sales_count' )
					->addSelect( 'cat.name as category_name' )
					->addSelect( 'supplier.name as supplier_name' )
					->addSelect ( \DB::raw( '( select sum(stock) from retail_product_variant where product_id = product.id  ) as stock' ) );
		
		if( $filter )
		{
			$query->where   ( 'product.name', 'like', '%'.$filter.'%' )
				  ->orWhere ( 'product.warehouse', 'like', '%'.$filter.'%' )
				  ->orWhere ( 'cat.name', 'like', '%'.$filter.'%' )
				  ->orWhere ( 'supplier.name', 'like', '%'.$filter.'%' );
		}
		
		return $query;
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkel\Repositories\Product\ProductRepository::count()
	 * --------------------------------------------------------------------
	 */
	public function count(  $company_id, $cond = null )
	{
		
	}
	// --------------------------------------------------------------------
}