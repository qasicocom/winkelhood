<?php
namespace Apps\Warehouse;

/**
 * Product Controller
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 10, 2014 
 * @category Apps\Warehouse
 * @package Winkel
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class ProductController extends \AppsController
{
	/**
	 * Constructor
	 * 
	 * @param ProductRepository $repo
	 * @param ProductProcessor $process
	 * --------------------------------------------------------------------
	 */
	public function __construct()
	{
		parent::__construct();
	}
	// --------------------------------------------------------------------
	
	/**
	 * List All Product
	 * initialing datatable column and tools
	 * --------------------------------------------------------------------
	 */
	public function getIndex ()
	{
		$datatable [ 'cols' ] = trans_array( [ 'checkbox', '', 'table.field.name', 'table.field.category', 'table.field.supplier', 'table.field.warehouse', 'table.field.sales', 'table.field.stock', '' ] );
		$datatable [ 'data' ] = '/warehouse/product/data';
		$datatable [ 'js' ] [ 'sorting' ]     = '2';
		$datatable [ 'js' ] [ 'noSorting' ]   = array( 0,1,8 );
		
		// module action
		$action = array(
			[ 'target' => '/warehouse/product/create', null, 'class' => 'btn-success', 'icon' => 'fa-pencil-square', 'anchor' => trans( 'table.action.create' ) ],
		);
		
		// module subnav
		$nav = array(
			[ 'href' => '/warehouse/product', 'anchor' => trans( 'submenu.product.all' ), 'label' => 0, 'active' => 1 ],
			[ 'href' => '/warehouse/category', 'anchor' => trans( 'submenu.product.category' ), 'label' => 0 ],
			[ 'href' => '/warehouse/inventory', 'anchor' => trans( 'submenu.product.inventory' ), 'label' => 0 ]
		);
		
		$this->data [ 'header_icon' ]   = 'fa-list';
		$this->data [ 'header_title' ]  = trans( 'title.product.module' );
		$this->data [ 'header_search' ] = trans( 'table.search.product' );
		$this->data [ 'header_action' ] = moduleAction( $action, true );
		$this->data [ 'header_nav' ]    = moduleNav( $nav );
		
		$this->data [ 'datatable' ] = $datatable;
		$this->layout->title        = trans( 'title.product.page' );
		$this->layout->content      = $this->view( 'winkel.apps.list' );
	}
	// --------------------------------------------------------------------
	
	
	public function getData ()
	{
		// the query
		$query = \Warehouse::product()->datatable( $this->company->id, \Input::get('sSearch') );
		
		// make datatable using query engine
		$table = \Datatable::query( $query );
		
		$table->addColumn( 'id',
			function( $product )
			{
				$html   = '<label class="checkbox-inline px-single">';
				$html  .= \Form::checkbox('ids[]', $product->id, 0, array( 'id'=>'cbx_'. $product->id, 'class'=>'px selectOne' ) );
				$html  .= '<span class="lbl"></span></label>';
					
				return $html;
			}
		);
		
		$table->addColumn( 'image',
			function( $product )
			{
				return $product->image;
			}
		);
		
		$table->addColumn( 'name',
			function( $product )
			{
				return $product->name;
			}
		);
		
		$table->addColumn( 'category_name',
			function( $product )
			{
				return $product->category_name;
			}
		);
		
		$table->addColumn( 'supplier_name',
			function( $product )
			{
				return $product->supplier_name;
			}
		);
		
		$table->addColumn( 'warehouse',
			function( $product )
			{
				return $product->warehouse;
			}
		);
		
		$table->addColumn( 'sales_count',
			function( $product )
			{
				return $product->sales_count;
			}
		);
		
		$table->addColumn( 'stock',
			function( $product )
			{
				return $product->stock;
			}
		);
		
		$table->addColumn( 'action',
			function( $supplier )
			{
				$update = array( '/supplier/update/' . encrypt( $supplier->id ) );
				$delete = array( '/supplier/delete/' . encrypt( $supplier->id ) );
		
				return \HTML::tableAction( $update, $delete );
			}
		);
		
		return  $table->make();
	}
	
	public function getCreate ()
	{
		// module action
		$action = array(
			[ 'target' => '/warehouse/product/create', null, 'class' => 'btn-success', 'icon' => 'fa-pencil-square', 'anchor' => trans( 'table.action.create' ) ],
		);
		
		// module subnav
		$nav = array(
			[ 'href' => '/warehouse/product', 'anchor' => trans( 'submenu.product.all' ), 'label' => 0 ],
			[ 'href' => '/warehouse/category', 'anchor' => trans( 'submenu.product.category' ), 'label' => 0 ],
			[ 'href' => '/warehouse/inventory', 'anchor' => trans( 'submenu.product.inventory' ), 'label' => 0 ]
		);
		
		$this->data [ 'header_icon' ]   = 'fa-list';
		$this->data [ 'header_title' ]  = trans( 'title.product.module' );
		$this->data [ 'header_search' ] = trans( 'table.search.product' );
		$this->data [ 'header_action' ] = moduleAction( $action, true );
		$this->data [ 'header_nav' ]    = moduleNav( $nav );
		
		$this->layout->title        = trans( 'title.product.page' );
		$this->layout->content      = $this->module( 'winkel.apps.pages.warehouse.product.create' );
	}
	
	public function getUpdate ( $subdomain, $product_id )
	{
		
	}
	
	public function getDelete ( $subdomain, $product_id )
	{
		
	}
	
	public function postCreate ()
	{
		
	}
	
	public function postUpdate ( $subdomain, $product_id )
	{
		
	}
	
	public function postDelete ( $subdomain, $product_id )
	{
		
	}
	
	
}