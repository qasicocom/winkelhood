<?php
namespace Winkelhood\Services\ViewComposer;

use Illuminate\Support\Facades\Auth;

class Sidebar
{
	
	private function menuCollection ()
	{
		$menu = array
		(
			'dashboard' => array(
				'present' => trans( 'menu.dashboard' ),
				'link'    => '/',
				'route'   => 'app.dashboard',
				'icon' 	  => 'fa fa-dashboard'
			),
			'pos' => array(
				'present' => trans( 'menu.pos' ),
				'link' 	  => '/pos',
				'route'   => 'app.pos',
				'icon' 	  => 'fa fa-th'
			),
			'salesorder' => array(
				'present' => trans( 'menu.salesorder' ),
				'link' 	  => '',
				'icon' 	  => 'fa fa-th'
			),
			'salesorder.pos' => array(
				'present' => trans( 'menu.pos' ),
				'link' 	  => '/salesorder',
				'route'   => 'app.salesorder',
				'icon' 	  => ''
			),
			'salesorder.shipping'   => array(
				'present' => trans( 'menu.shipping' ),
				'link'	  => '/salesorder/shipping',
				'route'   => 'app.salesorder.shipping',
				'icon' 	  => ''
			),
			'salesorder.report'   => array(
				'present' => trans( 'menu.sales' ),
				'link'	  => '/salesorder/report',
				'route'   => 'app.salesorder.report',
				'icon' 	  => ''
			),
			'procurement' => array(
				'present' => trans( 'menu.procurement' ),
				'link'	  => '',
				'icon' 	  => 'fa fa-th'
			),
			'procurement.po' => array(
				'present' => trans( 'menu.po' ),
				'link'	  => '/procurement',
				'route'   => 'app.procurement',
				'icon' 	  => ''
			),
			'procurement.request'   => array(
				'present' => trans( 'menu.poRequest' ),
				'link'	  => '/procurement/request',
				'route'   => 'app.warehouse.poRequest',
				'icon' 	  => ''
			),
			'procurement.receiving'   => array(
				'present' => trans( 'menu.receiving' ),
				'link'	  => '/procurement/receiving',
				'route'   => 'app.procurement.receiving',
				'icon' 	  => ''
			),
			'procurement.report'   => array(
				'present' => trans( 'menu.purchased' ),
				'link'	  => '/procurement/report',
				'route'   => 'app.procurement.report',
				'icon' 	  => ''
			),
			'warehouse'   => array(
				'present' => trans( 'menu.warehouse' ),
				'link'	  => '',
				'icon' 	  => 'fa fa-list'
			),
			'warehouse.product'   => array(
				'present' => trans( 'menu.product' ),
				'link'	  => '/warehouse/product',
				'route'   => 'app.warehouse.product',
				'icon' 	  => ''
			),
			'warehouse.category'   => array(
				'present' => trans( 'menu.category' ),
				'link'	  => '/warehouse/category',
				'route'   => 'app.warehouse.category',
				'icon' 	  => ''
			),
			'warehouse.inventory'   => array(
				'present' => trans( 'menu.inventory' ),
				'link'	  => '/warehouse/inventory',
				'route'   => 'app.warehouse.inventory',
				'icon' 	  => ''
			),
				
			'warehouse.poRequest'   => array(
				'present' => trans( 'menu.poRequest' ),
				'link'	  => '/warehouse/request',
				'route'   => 'app.warehouse.poRequest',
				'icon' 	  => ''
			),
			'warehouse.receiving'   => array(
				'present' => trans( 'menu.receiving' ),
				'link'	  => '/warehouse/receiving',
				'route'   => 'app.warehouse.receiving',
				'icon' 	  => ''
			),
			'report'   => array(
				'present' => trans( 'menu.report' ),
				'link'	  => '/',
				'icon' 	  => 'fa fa-bar-chart-o'
			),
			'report.sales'   => array(
				'present' => trans( 'menu.sales' ),
				'link'	  => '/report/sales',
				'route'   => 'app.report.sales',
				'icon' 	  => ''
			),
			'report.purchased'   => array(
				'present' => trans( 'menu.purchased' ),
				'link'	  => '/report/purchased',
				'route'   => 'app.report.purchased',
				'icon' 	  => ''
			),
			'costumer'   => array(
				'present' => trans( 'menu.costumer' ),
				'link'	  => '/costumer',
				'route'   => 'app.costumer',
				'icon' 	  => 'fa fa-users'
			),
			'supplier'   => array(
				'present' => trans( 'menu.supplier' ),
				'link'	  => '/supplier',
				'route'   => 'app.supplier',
				'icon' 	  => 'fa fa-user'
			),
			'setting'   => array(
				'present' => trans( 'menu.setting' ),
				'link'	  => '/',
				'icon' 	  => 'fa fa-cog'
			),
			'setting.company'   => array(
				'present' => trans( 'menu.company' ),
				'link'	  => '/setting/company',
				'route'   => 'app.setting.company',
				'icon' 	  => ''
			),
			'setting.staff'   => array(
				'present' => trans( 'menu.staff' ),
				'link'	  => '/setting/staff',
				'route'   => 'app.setting.staff',
				'icon' 	  => ''
			),
			'billing'   => array(
				'present' => trans( 'menu.billing' ),
				'link'	  => '',
				'icon' 	  => 'fa fa-rocket'
			),
			'billing.invoices'   => array(
				'present' => trans( 'menu.invoices' ),
				'link'	  => '/billing',
				'route'   => 'app.billing.invoices',
				'icon' 	  => ''
			),
				
		);
	
		return $menu;
	}

	private function ownerMenu()
	{
		$menuCollection = $this->menuCollection();
	
		$parent = array( 'dashboard', 'salesorder', 'procurement', 'warehouse', 'costumer', 'supplier', 'setting', 'billing' );
		$menuParent = array_intersect_key( $menuCollection, array_flip( $parent ) );
	
		$salesorder = 	array( 'salesorder.pos', 'salesorder.shipping', 'salesorder.report' );
		$menuParent [ 'salesorder' ] [ 'submenu' ] = array_intersect_key( $menuCollection, array_flip( $salesorder ) );
	
		$po    		= 	array( 'procurement.po', 'procurement.request', 'procurement.receiving', 'procurement.report' );
		$menuParent [ 'procurement' ] [ 'submenu' ] = array_intersect_key( $menuCollection, array_flip( $po ) );
	
	
		$warehouse = array( 'warehouse.product', 'warehouse.category', 'warehouse.inventory' );
		$menuParent [ 'warehouse' ] [ 'submenu' ] = array_intersect_key( $menuCollection, array_flip( $warehouse ) );
	
		$setting = 	array( 'setting.company', 'setting.staff' );
		$menuParent [ 'setting' ] [ 'submenu' ] = array_intersect_key( $menuCollection, array_flip( $setting ) );
	
		$billing = 	array( 'billing.invoices' );
		$menuParent [ 'billing' ] [ 'submenu' ] = array_intersect_key( $menuCollection, array_flip( $billing ) );
	
	
		return $menuParent;
	}
	
	public function getMenu()
	{
		$usergroup =  Auth::user()->usergroup;
	
		switch ( $usergroup ) :
	
		case  2 :
			$menu = $this->ownerMenu();
		break;
	
		endswitch;
	
		return $menu;
	
	}
	
	public function compose( $view ) 
	{
		$user = Auth::user();
		
		$view->with( 'menu_active', \Route::getCurrentRoute()->getName() );
		$view->with( 'menus', $this->getMenu() );
	}
	
}




