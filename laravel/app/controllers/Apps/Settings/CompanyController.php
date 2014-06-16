<?php
namespace Apps\Setting;

/**
 * Company Controller
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
class CompanyController extends \AppsController
{
	
	/**
	 * Show setting company
	 * --------------------------------------------------------------------
	 */
	public function getIndex ()
	{
		$industry = \Industry::all()->toArray();

		// module subnav
		$nav = array(
			[ 'href' => '', 'anchor' => trans( 'submenu.company.update' ), null, 'active' => 1 ]
		);
		
		$this->data [ 'industry' ]      = industry( \Industry::all()->toArray(), \Config::get( 'app.locale' ), $this->company->industry_id  );
		
		$this->data [ 'header_icon' ]   = 'fa-user';
		$this->data [ 'header_title' ]  = trans( 'title.company.module' );
		$this->data [ 'header_nav' ]    = moduleNav( $nav );
		
		$this->layout->title       = 'title.company.page';
		$this->layout->content     = $this->view ( 'winkel.apps.pages.setting.company' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Handle post update setting company
	 * @return string
	 * --------------------------------------------------------------------
	 */
	public function postIndex ()
	{
		// inject company id to the input
		$input [ 'id_e' ]    = encrypt( $this->company->id );
		$input [ 'user_id' ] = $this->me->id;
		\Input::merge( $input );
		
		// process the update
		$response = \Company::update();
		
		if( $response->data != null ){
			$response->data = $response->data->toJson();
		}
		
		return json_encode( $response );
	}
	// --------------------------------------------------------------------
	
}