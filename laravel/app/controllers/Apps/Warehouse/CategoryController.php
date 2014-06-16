<?php
namespace Apps\Warehouse;

/**
 * Category CategoryControllerController
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 10, 2014 
 * @category Controller
 * @package Winkel
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class CategoryController extends \AppsController
{
	
	/**
	 * Constructor
	 * 
	 * --------------------------------------------------------------------
	 */
	public function __construct()
	{
		parent::__construct();
	}
	// --------------------------------------------------------------------
	
	/**
	 * List Category
	 * --------------------------------------------------------------------
	 */
	public function getIndex ()
	{
		$data = \Warehouse::Category()->datatable( $this->company->id );
		
		$datatable [ 'cols' ]  = trans_array( [ 'checkbox', '', 'table.field.category', 'table.field.numProduct', '' ] );
		
		$datatable [ 'table' ] = $data;
		
		$datatable [ 'js' ] [ 'sorting' ]    = 1;
		$datatable [ 'js' ] [ 'noSorting' ]   = array( 0,1,4,2,3 );

		// module action
		$action = array(
			[ 'target' => '/warehouse/category/create', 'popup' => 'sm', 'class' => 'btn-success', 'icon' => 'fa-pencil-square', 'anchor' => trans( 'table.action.create' ) ],
		);
		
		// module subnav
		$nav = array(
			[ 'href' => '/warehouse/product', 'anchor' => trans( 'submenu.product.all' ), 'label' => 0],
			[ 'href' => '/warehouse/category', 'anchor' => trans( 'submenu.product.category' ), 'label' => 0, 'active' => 1  ],
			[ 'href' => '/warehouse/inventory', 'anchor' => trans( 'submenu.product.inventory' ), 'label' => 0 ]
		);
		
		$this->data [ 'header_icon' ]   = 'fa-list';
		$this->data [ 'header_title' ]  = trans( 'title.product.module' );
		$this->data [ 'header_search' ] = trans( 'table.search.category' );
		$this->data [ 'header_action' ] = moduleAction( $action, false );
		$this->data [ 'header_nav' ]    = moduleNav( $nav );
		
		$this->data [ 'datatable' ] = $datatable;
		$this->layout->title        = trans( 'title.product.page' );
		$this->layout->content      = $this->view( 'winkel.apps.list' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Show New Category Form
	 * --------------------------------------------------------------------
	 */
	public function getCreate ()
	{
		$this->changeLayout( 'plugins.popup.layout-form' );
		
		$this->data [ 'category_select' ] = \Warehouse::Category()->select( $this->company->id );
		
		$this->layout->title        = trans( 'title.category.create' );
		$this->layout->content      = $this->view( 'winkel.apps.pages.warehouse.category.create' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Show update category
	 * 
	 * @param unknown_type $subdomain
	 * @param unknown_type $category_id
	 * --------------------------------------------------------------------
	 */
	public function getUpdate ( $subdomain, $category_id )
	{
		$this->changeLayout( 'plugins.popup.layout-form' );
		
		if( $cat = \Warehouse::Category()->find( decrypt( $category_id ) ) )
		{
			$this->data [ 'category' ]        = $cat;
			$this->data [ 'category_select' ] = \Warehouse::Category()->select( $this->company->id, $cat->parent_id, $cat->id );
			$this->layout->title        = trans( 'title.category.update' );
			$this->layout->content      = $this->view( 'winkel.apps.pages.warehouse.category.update' );
		}
		else {
			$this->popupNotfound( trans( 'title.settings.staff.notfound' ) );
		}
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Show delete form
	 * 
	 * @param unknown_type $subdomain
	 * @param unknown_type $category_id
	 * --------------------------------------------------------------------
	 */
	public function getDelete ( $subdomain, $category_id )
	{
		$this->changeLayout( 'plugins.popup.layout-warning' );
		
		$this->layout->title        = trans( 'title.category.delete' );
		$this->layout->content      = $this->view( 'winkel.apps.pages.warehouse.category.delete' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * 
	 * @return string
	 * --------------------------------------------------------------------
	 */
	public function postCreate ()
	{
		\Input::merge( [ 'outlet_id' => $this->company->outlets()->first()->id ] );
		
		$response = \Warehouse::Category()->create();
		
		if( $response->status == 'success' )
		{
			$response->modal  = true;
			$response->reload = 'page';
		}
		
		return $this->responseJson($response);
		
	}
	// --------------------------------------------------------------------
	
	/**
	 *
	 * @return string
	 * --------------------------------------------------------------------
	 */
	public function postUpdate (  $subdomain, $category_id  )
	{
		\Input::merge( [ 'id_e' => $category_id, 'outlet_id' => $this->company->outlets()->first()->id ] );
		
		$response = \Warehouse::Category()->update();
		
		if( $response->status == 'success' )
		{
			$response->modal  = true;
			$response->reload = 'page';
		}
		
		return $this->responseJson($response);
	}
	// --------------------------------------------------------------------
	
	/**
	 *
	 * @return string
	 * --------------------------------------------------------------------
	 */
	public function postDelete ( $subdomain, $category_id )
	{
		\Input::merge( [ 'id_e' => $category_id, 'outlet_id' => $this->company->outlets()->first()->id ] );
		
		$response = \Warehouse::Category()->delete();
		
		if( $response->status == 'success' )
		{
			$response->modal  = true;
			$response->reload = 'page';
		}
		
		return $this->responseJson($response);
	}
	// --------------------------------------------------------------------
}