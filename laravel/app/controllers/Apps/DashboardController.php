<?php
namespace Apps;

/**
 * Dashboard Controller
 *
 *
 * @author     Alif Amri Suri (alifamri@qasico.com)
 * @since      Apr 12, 2014 
 * @category   Controller
 * @package    Laravel
 * @version    1
 * @since      File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico Technologies Inc.
 */
class DashboardController extends \AppsController
{
	
	/**
	 * Contructor
	 * 
	 * --------------------------------------------------------------------
	 */
	public function __construct()
	{
		parent::__construct();
	}
	// --------------------------------------------------------------------
	
	
	public function getIndex()
	{
		$this->layout->title   = trans( 'apps.title.pages.dashboard' );
		$this->layout->content = $this->view( 'winkel.apps.pages.dashboard.index' );
	}
	
	public function test()
	{
		$category = new \Retail_ProductCategory();
		
		$category->name = 'child 2';
		$category->outlet_id = 1;
		$category->parent_id = 1;
		
		$cat = $category->save();
		
		dd( $cat );

// 		$cat = \Retail_ProductCategory::find( 1 );
		
// 		$newcat [ 'name' ] = 'child';
// 		$newcat [ 'outlet_id' ] = 1;

// 		$i = $cat->Childs()->create( $newcat );
// 		dd( $i );
	}
	
}
