<?php
namespace Apps\Setting;

use Illuminate\Support\Facades\Input;

/**
 * Staff Controller
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 6, 2014 
 * @category Controller
 * @package Winkel
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class StaffController extends \AppsController
{
	
	protected $repo;
	
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
	 * Staff List
	 * 
	 * --------------------------------------------------------------------
	 */
	public function getIndex ()
	{
		// datatable 
		$datatable [ 'cols' ] = trans_array( [ 'checkbox', 'table.field.name', 'table.field.email', 'table.field.role', 'table.field.last_login', '' ] );
		$datatable [ 'data' ] = '/setting/staff/data';
		$datatable [ 'js' ] [ 'sorting' ]     = '1';
		$datatable [ 'js' ] [ 'noSorting' ]   = array( 0, 5 );
		
		// module action
		$action = array(
			[ 'target' => '/setting/staff/create', 'popup' => 'md', 'class' => 'btn-success', 'icon' => 'fa-pencil-square', 'anchor' => trans( 'table.action.create' ) ],
		);
		
		// module subnav
		$nav = array(
			[ 'href' => '', 'anchor' => trans( 'submenu.staff.all' ), 'label' => \Staff::count( $this->company->id ), 'active' => 1 ]
		);
		
		
		$this->data [ 'header_icon' ]   = 'fa-user';
		$this->data [ 'header_title' ]  = trans( 'title.settings.staff.module' );
		$this->data [ 'header_search' ] = trans( 'table.search.staff' );
		$this->data [ 'header_action' ] = moduleAction( $action, true );
		$this->data [ 'header_nav' ]    = moduleNav( $nav );
		
		$this->data [ 'datatable' ] 	= $datatable;
		
		// layout
		$this->layout->title        = trans( 'title.settings.staff.page' );
		$this->layout->content      = $this->view( 'winkel.apps.list' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Datatable 
	 * 
	 * @return string|\Illuminate\Http\JsonResponse
	 * --------------------------------------------------------------------
	 */
	public function getData ()
	{
		// the query
		$query = \Staff::datatable( $this->company->id, \Input::get('sSearch') );
		
		// make datatable using query engine
		$table = \Datatable::query( $query );
		
		$table->addColumn( 'id',
			function( $staff )
			{
				$html   = '<label class="checkbox-inline px-single">';
				$html  .= \Form::checkbox('ids[]', $staff->id, 0, array( 'id'=>'cbx_'. $staff->id, 'class'=>'px selectOne' ) );
				$html  .= '<span class="lbl"></span></label>';
					
				return $html;
			}
		);
		
		$table->addColumn( 'name',
			function( $staff )
			{
				return $staff->name;
			}
		);
		
		$table->addColumn( 'email',
			function( $staff )
			{
				return $staff->email;
			}
		);
		
		$table->addColumn( 'usergroup',
			function( $staff )
			{
				return $staff->role;
			}
		);
		
		$table->addColumn( 'last_login',
			function( $staff )
			{
				return $staff->last_login;
			}
		);
		
		$table->addColumn( 'action',
			function( $staff )
			{
				$update = array( '/setting/staff/update/' . encrypt( $staff->id ) );
				$delete = array( '/setting/staff/delete/' . encrypt( $staff->id ), 'sm' );
				
				return \HTML::tableAction( $update, $delete );
			}
		);
		
		return  $table->make();
	}
	// --------------------------------------------------------------------
	
	/**
	 * Show create form new staff
	 * 
	 * --------------------------------------------------------------------
	 */
	public function getCreate ()
	{
		$this->changeLayout( 'plugins.popup.layout-form' );
		
		$ug = \Account::usergroup()->all()->toArray();
		$ug = array_except($ug, [0,1]);
		
		$this->data [ 'usergroup' ] = \Form::select( 'usergroup', array_pluck($ug, 'name','id' ) , null, array( 'class'=>'form-control select2' ) );
		
		$this->layout->title        = trans( 'title.settings.staff.create' );
		$this->layout->content      = $this->view( 'winkel.apps.pages.setting.staff.create' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Show update form existing staff
	 * 
	 * @param string $domain
	 * @param string $staff_id
	 * --------------------------------------------------------------------
	 */
	public function getUpdate ( $subdomain, $staff_id )
	{
		$staff_id = decrypt( $staff_id );
		
		if( $staff = \Staff::noCache()->find( $staff_id ) )
		{
			$this->changeLayout( 'plugins.popup.layout-form' );
			
			$ug = \Account::usergroup()->all()->toArray();
			$ug = array_except($ug, [0,1]);
			
			$this->data [ 'usergroup' ] = \Form::select( 'usergroup', array_pluck($ug, 'name','id' ) , $staff->usergroup, array( 'class'=>'form-control select2' ) );
			
			
			$this->data [ 'staff' ]     = $staff;
			$this->layout->title        = trans( 'title.settings.staff.update' );
			$this->layout->content      = $this->view( 'winkel.apps.pages.setting.staff.update' );
		}
		else {
			$this->popupNotfound( trans( 'title.settings.staff.notfound' ) );
		}
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Show delete form entity staff
	 * 
	 * @param string $domain
	 * @param string $staff_id
	 * --------------------------------------------------------------------
	 */
	public function getDelete ( $subdomain, $staff_id )
	{
		$this->changeLayout( 'plugins.popup.layout-warning' );
		
		$this->layout->title        = trans( 'title.settings.staff.delete' );
		$this->layout->content      = $this->view( 'winkel.apps.pages.setting.staff.delete' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Process the create form
	 * 
	 * --------------------------------------------------------------------
	 */
	public function postCreate ()
	{
		$staticInput = array(
			'company_id' => $this->company->id,
			'outlet_id'  => $this->company->outlets->first()->id	
		);
		
		Input::merge( $staticInput );
		
		$response = \Staff::create();
		
		if( $response->status == 'success' )
		{
			$response->reload = 'datatable';
			$response->modal  = true;
		}
		
		return $this->responseJson( $response );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Process update form
	 * 
	 * @param string $subdomain
	 * @param string $staff_id
	 * --------------------------------------------------------------------
	 */
	public function postUpdate ( $subdomain, $staff_id )
	{
		$staticInput = array(
			'id_e' 		 => $staff_id,
			'company_id' => $this->company->id,
			'outlet_id'  => $this->company->outlets->first()->id
		);
		
		Input::merge( $staticInput );
		
		$response = \Staff::update();
		
		if( $response->status == 'success' )
		{
			$response->reload = 'datatable';
			$response->modal  = true;
		}
		
		return $this->responseJson( $response );
	}
	
	/**
	 * Process deleting form
	 * 
	 * @param string $subdomain
	 * @param string $staff_id
	 * --------------------------------------------------------------------
	 */
	public function postDelete ( $subdomain, $staff_id )
	{
		$staticInput = array(
			'id_e' 		 => $staff_id,
			'company_id' => $this->company->id,
			'outlet_id'  => $this->company->outlets->first()->id
		);
		
		Input::merge( $staticInput );
		
		$response = \Staff::delete();
		
		if( $response->status == 'success' )
		{
			$response->reload = 'datatable';
			$response->modal  = true;
		}
		
		return $this->responseJson( $response );
	}
	// --------------------------------------------------------------------
	
	
}