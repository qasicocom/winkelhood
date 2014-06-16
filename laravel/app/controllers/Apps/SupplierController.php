<?php
namespace Apps;


/**
 * Supplier Controller
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 2, 2014 
 * @category Controller
 * @package Winkel
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class SupplierController extends \AppsController
{
	/**
	 * Class Contructor
	 * 
	 * --------------------------------------------------------------------
	 */
	public function __construct ()
	{
		parent::__construct();
	}
	// --------------------------------------------------------------------
	
	/**
	 * List Supplier
	 * initialing datatable column and tools
	 * --------------------------------------------------------------------
	 */
	public function getIndex ()
	{
		$datatable [ 'cols' ] = trans_array( [ 'checkbox', '', 'table.field.name', 'table.field.email', 'table.field.address', 'table.field.phone', '' ] );
		$datatable [ 'data' ] = '/supplier/data';
		$datatable [ 'js' ] [ 'sorting' ]     = '2';
		$datatable [ 'js' ] [ 'noSorting' ]   = array( 0,1,6 );
		
		// module action
		$action = array(
			[ 'target' => '/supplier/create', 'popup' => 'md', 'class' => 'btn-success', 'icon' => 'fa-pencil-square', 'anchor' => trans( 'table.action.create' ) ],
		);
		
		// module subnav
		$nav = array(
			[ 'href' => '', 'anchor' => trans( 'submenu.supplier.all' ), 'label' => \Supplier::count( $this->company->id ), 'active' => 1 ]
		);
		
		$this->data [ 'header_icon' ]   = 'fa-user';
		$this->data [ 'header_title' ]  = trans( 'title.supplier.module' );
		$this->data [ 'header_search' ] = trans( 'table.search.supplier' );
		$this->data [ 'header_action' ] = moduleAction( $action, true );
		$this->data [ 'header_nav' ]    = moduleNav( $nav );
		
		$this->data [ 'datatable' ] = $datatable;
		$this->layout->title        = trans( 'title.supplier.page' );
		$this->layout->content      = $this->view( 'winkel.apps.list' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Handle Datatable Request data
	 * 
	 * @return string|\Illuminate\Http\JsonResponse
	 * --------------------------------------------------------------------
	 */
	public function getData ()
	{
		// the query
		$query = \Supplier::datatable( $this->company->id, \Input::get('sSearch') );
		
		// make datatable using query engine
		$table = \Datatable::query( $query );
		
		$table->addColumn( 'id',
			function( $supplier )
			{
				$html   = '<label class="checkbox-inline px-single">';
				$html  .= \Form::checkbox('ids[]', $supplier->id, 0, array( 'id'=>'cbx_'. $supplier->id, 'class'=>'px selectOne' ) );
				$html  .= '<span class="lbl"></span></label>';
					
				return $html;
			}
		);
		
		$table->addColumn( 'desc',
			function( $supplier )
			{
				if( $supplier->desc != "" )
				{
					return '<span class="text-center pointer btn-popover" '. \HTML::popover( 'Notes', $supplier->desc ) .'><i class="fa fa-file-text"></i></span>';
				}
			}
		);
		
		$table->addColumn( 'name',
			function( $supplier )
			{
				return $supplier->name;
			}
		);
		
		$table->addColumn( 'email',
			function( $supplier )
			{
				return $supplier->email;
			}
		);
		
		$table->addColumn( 'address',
			function( $supplier )
			{
				return $supplier->address;
			}
		);
		
		$table->addColumn( 'phone',
			function( $supplier )
			{
				return $supplier->phone;
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
	// --------------------------------------------------------------------
	
	/**
	 * Show New Supplier Form
	 * 
	 * --------------------------------------------------------------------
	 */
	public function getCreate ()
	{
		$this->changeLayout( 'plugins.popup.layout-form' );
		
		$this->layout->title        = trans( 'title.supplier.create' );
		$this->layout->content      = $this->view( 'winkel.apps.pages.supplier.create' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Show Update Existing Supplier Form
	 * 
	 * @param string $domain
	 * @param string $supplier_id
	 * --------------------------------------------------------------------
	 */
	public function getUpdate ( $domain, $supplier_id )
	{
		$supplier_id = decrypt( $supplier_id );
		
		if( $supplier = \Supplier::noCache()->find( $supplier_id ) )
		{
			$this->changeLayout( 'plugins.popup.layout-form' );
				
			$this->data [ 'supplier' ]  = (object) $supplier->toArray();
			$this->layout->title        = trans( 'title.supplier.update' );
			$this->layout->content      = $this->view( 'winkel.apps.pages.supplier.update' );
		}
		else {
			$this->changeLayout( 'plugins.popup.notfound' );
			$this->layout->title        = trans( 'title.supplier.notfound' );
			$this->layout->content      = $this->view( 'plugins.popup.blank' );
		}
	}
	// --------------------------------------------------------------------
	
	/**
	 * Show Delete form
	 * 
	 * @param string $domain
	 * @param string $supplier_id
	 * --------------------------------------------------------------------
	 */
	public function getDelete ( $domain, $supplier_id )
	{
		$this->changeLayout( 'plugins.popup.layout-warning' );
		
		$this->layout->title        = trans( 'title.supplier.delete' );
		$this->layout->content      = $this->view( 'winkel.apps.pages.supplier.delete' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Handle Input Process Creating new Supplier
	 * this methode is build for ajax request
	 *
	 * @return json_encode
	 * --------------------------------------------------------------------
	 */
	public function postCreate ()
	{
		\Input::merge( [ 'company_id' => $this->company->id ] );
		
		$response = \Supplier::create ();
		
		if( $response->status == 'success' ) 
		{
			$response->reload = 'datatable';
			$response->modal  = true;
		}

		return $this->responseJson($response);
	}
	// --------------------------------------------------------------------
	
	/**
	 * Handle Input Process Updating data Supplier
	 *
	 * @param string $supplier_id encrypted
	 * --------------------------------------------------------------------
	 */
	public function postUpdate ( $domain, $supplier_id )
	{
		
		\Input::merge( [ 'company_id' => $this->company->id, 'id_e' => $supplier_id ] );
		
		$response = \Supplier::update ();
		
		if( $response->status == 'success' )
		{
			$response->reload = 'datatable';
			$response->modal  = true;
		}
		
		return $this->responseJson($response);
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Process deleting supplier
	 * 
	 * @param string $subdomain
	 * @param string $supplier_id
	 * @return json_encode
	 * --------------------------------------------------------------------
	 */
	public function postDelete ( $subdomain, $supplier_id )
	{
		\Input::merge( [ 'company_id' => $this->company->id, 'id_e' => $supplier_id ] );
		
		$response = \Supplier::delete ();
		
		if( $response->status == 'success' )
		{
			$response->reload = 'datatable';
			$response->modal  = true;
		}
		
		return $this->responseJson($response);
	}
	// --------------------------------------------------------------------
	
}