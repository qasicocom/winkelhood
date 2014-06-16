<?php
namespace Apps;

use Illuminate\Support\Facades\Input;
use Chumper\Datatable\Datatable;
use Illuminate\Support\Facades\Redirect;
use \HTML;

/**
 * Costumer Controller
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 1, 2014
 * @category Controller
 * @package Winkel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
class CostumerController extends \AppsController
{

	/**
	 * Class Constructor
	 *
	 * @param CostumerRepository $costumerRepo        	
	 * @param CostumerProcessor $costumerProcessor
	 * --------------------------------------------------------------------
	 */
	public function __construct ()
	{
		parent::__construct();
	}
	// --------------------------------------------------------------------
	
	/**
	 * List Costumer
	 * --------------------------------------------------------------------
	 */
	public function getIndex ()
	{
		$datatable [ 'cols' ] = trans_array( [ 'checkbox', 'table.field.name', 'table.field.email', 'table.field.address', 'table.field.phone', 'table.field.transaction', '' ] );
		$datatable [ 'data' ] = '/costumer/data';
		$datatable [ 'js' ] [ 'sorting' ]     = '1';
		$datatable [ 'js' ] [ 'noSorting' ]   = array( 0,6 );
		
		// module action
		$action = array(
			[ 'target' => '/costumer/create', 'popup' => 'md', 'class' => 'btn-success', 'icon' => 'fa-pencil-square', 'anchor' => trans( 'table.action.create' ) ],
		);
		
		// module subnav
		$nav = array(
			[ 'href' => '', 'anchor' => trans( 'submenu.costumer.all' ), 'label' => \Costumer::count( $this->company->id ), 'active' => 1 ]
		);
		
		$this->data [ 'header_icon' ]   = 'fa-users';
		$this->data [ 'header_title' ]  = trans( 'title.costumer.module' );
		$this->data [ 'header_search' ] = trans( 'table.search.costumer' );
		$this->data [ 'header_action' ] = moduleAction( $action, true );
		$this->data [ 'header_nav' ]    = moduleNav( $nav );
		
		$this->data [ 'datatable' ] = $datatable;
		$this->layout->title        = trans( 'title.costumer.page' );
		$this->layout->content      = $this->view( 'winkel.apps.list' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Handle Datatable Request data
	 * --------------------------------------------------------------------
	 */
	public function getData ()
	{
		// the query
		$query = \Costumer::datatable( $this->company->id, \Input::get('sSearch') );
		
		// make datatable using query engine
		$table = \Datatable::query( $query );
		
		$table->addColumn( 'name',
			function( $costumer )
			{
				$html   = '<label class="checkbox-inline px-single">';
				$html  .= \Form::checkbox('ids[]', $costumer->id, 0, array( 'id'=>'cbx_'. $costumer->id, 'class'=>'px selectOne' ) );
				$html  .= '<span class="lbl"></span></label>';
					
				return $html;
			}
		);
		
		$table->addColumn( 'id',
			function( $costumer )
			{
				return $costumer->name;
			}
		);
		
		$table->addColumn( 'email',
			function( $costumer )
			{
				return $costumer->email;
			}
		);
		
		$table->addColumn( 'address',
			function( $costumer )
			{
				return $costumer->address;
			}
		);
		
		$table->addColumn( 'phone',
			function( $costumer )
			{
				return $costumer->phone;
			}
		);
		
		$table->addColumn( 'num_transaction',
			function( $costumer )
			{
				return '<span class="text-center">'.$costumer->num_transaction.'</span>';
			}
		);
		
		$table->addColumn( 'action',
			function( $costumer )
			{
				$update = array( '/costumer/update/' . encrypt( $costumer->id ) );
				$delete = array( '/costumer/delete/' . encrypt( $costumer->id ) );
				
				return \HTML::tableAction( $update, $delete );
			}
		);
		
		
		return  $table->make();
	}
	// --------------------------------------------------------------------
	
	/**
	 * Show New Costumer Form
	 * --------------------------------------------------------------------
	 */
	public function getCreate ()
	{
		$this->changeLayout( 'plugins.popup.layout-form' );
		
		$this->layout->title        = trans( 'title.costumer.create' );
		$this->layout->content      = $this->view( 'winkel.apps.pages.costumer.create' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Show Update Existing Costumer Form
	 *
	 * @param string $costumer_id encrypted
	 * --------------------------------------------------------------------
	 */
	public function getUpdate ( $subdomain, $costumer_id )
	{
		$costumer_id = decrypt( $costumer_id );
		
		if( $costumer = \Costumer::noCache()->find( $costumer_id ) )
		{
			$this->changeLayout( 'plugins.popup.layout-form' );
			
			$this->data [ 'costumer' ]  = $costumer;
			$this->layout->title        = trans( 'title.costumer.update' );
			$this->layout->content      = $this->view( 'winkel.apps.pages.costumer.update' );
		}
		else {
			
			$this->changeLayout( 'plugins.popup.notfound' );
			$this->layout->title        = trans( 'page.notfound' );
			$this->layout->content      = $this->view( 'plugins.popup.blank' );
			
		}
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Show Delete Existing Costumer 
	 *
	 * @param string $costumer_id encrypted
	 * --------------------------------------------------------------------
	 */
	public function getDelete ( $subdomain, $costumer_id )
	{
		$this->changeLayout( 'plugins.popup.layout-warning' );
		
		$this->layout->title        = trans( 'title.costumer.delete' );
		$this->layout->content      = $this->view( 'winkel.apps.pages.costumer.delete' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Handle Input Process Creating new Costumer
	 * this methode is build for ajax request
	 * 
	 * @return json_encode
	 * --------------------------------------------------------------------
	 */
	public function postCreate ()
	{
		// send company id to input
		Input::merge( [ 'company_id' => $this->company->id ] );
		
		$response = \Costumer::create ();
		
		if( $response->status == 'success' )
		{
			$response->reload = 'datatable';
			$response->modal  = true;
		}
		
		return $this->responseJson( $response );
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Handle Input Process Updating data Costumer
	 *
	 * @param string $costumer_id encrypted
	 * --------------------------------------------------------------------
	 */
	public function postUpdate ( $subdomain, $costumer_id )
	{
		// send company id to input
		Input::merge( [ 'company_id' => $this->company->id, 'id_e' => $costumer_id  ] );
		
		$response = \Costumer::update ();
		
		if( $response->status == 'success' )
		{
			$response->reload = 'datatable';
			$response->modal  = true;
		}
		
		return $this->responseJson( $response );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Deleting Costumer
	 * 
	 * @param string $costumer_id encrypted
	 * --------------------------------------------------------------------
	 */
	public function postDelete ( $subdomain, $costumer_id )
	{
		// send company id to input
		Input::merge( [ 'company_id' => $this->company->id, 'id_e' => $costumer_id  ] );
		
		$response = \Costumer::delete ();
		
		if( $response->status == 'success' )
		{
			$response->reload = 'datatable';
			$response->modal  = true;
		}
		
		return $this->responseJson( $response );
	}
	// --------------------------------------------------------------------
	
	
}