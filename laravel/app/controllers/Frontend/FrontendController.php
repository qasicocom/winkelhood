<?php
namespace Frontend;

use \BaseController;

/**
 * Frontend Controller
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 1, 2014 
 * @category Controller
 * @package Winkel
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class FrontendController extends BaseController
{
	/**
	 * Layout for frontend
	 * @var str
	 * --------------------------------------------------------------------
	 */
	protected $layout = 'winkel.frontend.layout';
	// --------------------------------------------------------------------
	
	/**
	 * Page Home
	 * --------------------------------------------------------------------
	 */
	public function getHome ()
	{
		$this->layout->title   = trans( 'pages.home.title' );
		$this->layout->content = $this->view ( 'winkel.frontend.pages.home.index' );
	}
	// --------------------------------------------------------------------
	
	
	
}