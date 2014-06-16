<?php

class Master_tableSeeder extends Seeder
{

	public function run ()
	{

		DB::table( 'm_pricing' )->delete();
		M_Pricing::create( array( 'type' => 'product', 'number'=> '1', 'prices' => 20000 ) );
		M_Pricing::create( array( 'type' => 'outlet', 'number'=> '1', 'prices' => 10000 ) );
		M_Pricing::create( array( 'type' => 'user', 'number'=> '1', 'prices' => 49000 ) );
		
		DB::table( 'm_packages' )->delete();
		M_Packages::create( array( 'id' => 1, 'name' => 'Free', 'prices' => 0, 'num_outlets' => 1, 'num_users' => 1, 'num_product' => 100, 'support' => 'Up to 100 MB' ) );
		M_Packages::create( array( 'id' => 2,'name' => 'Standard', 'prices' => 99000, 'num_outlets' => 1, 'num_users' => 2, 'num_product' => 500, 'support' => 'up to 500 MB' ) );
		M_Packages::create( array( 'id' => 3,'name' => 'Premium', 'prices' => 299000, 'num_outlets' => 1, 'num_users' => 5, 'num_product' => 1000, 'support' => 'Up to 1GB' ) );
		
		DB::table( 'm_modules' )->delete();	
		M_Modules::create( array( 'id' => 1, 'name' => 'pos' ) );
		M_Modules::create( array( 'id' => 2, 'name' => 'pos.returning' ) );
		M_Modules::create( array( 'id' => 3, 'name' => 'warehouse.poRequest' ) );
		M_Modules::create( array( 'id' => 4, 'name' => 'warehouse.shipping' ) );
		M_Modules::create( array( 'id' => 5, 'name' => 'warehouse.receiving' ) );
		M_Modules::create( array( 'id' => 6, 'name' => 'warehouse.return.po' ) );
		M_Modules::create( array( 'id' => 7, 'name' => 'warehouse.return.so' ) );
		M_Modules::create( array( 'id' => 8, 'name' => 'procurement' ) );
		M_Modules::create( array( 'id' => 9, 'name' => 'report.purchased' ) );
		M_Modules::create( array( 'id' => 10, 'name' => 'report.sales' ) );
		M_Modules::create( array( 'id' => 11, 'name' => 'report.purchased.payable' ) );
		M_Modules::create( array( 'id' => 12, 'name' => 'report.sales.receivable' ) );
		M_Modules::create( array( 'id' => 13, 'name' => 'costumer' ) );
		M_Modules::create( array( 'id' => 14, 'name' => 'supplier' ) );
		M_Modules::create( array( 'id' => 15, 'name' => 'accounting' ) );
		M_Modules::create( array( 'id' => 16, 'name' => 'setting.staff' ) );
		M_Modules::create( array( 'id' => 17, 'name' => 'payment_system' ) );
		M_Modules::create( array( 'id' => 18, 'name' => 'setting.company' ) );
		M_Modules::create( array( 'id' => 19, 'name' => 'outlet_management' ) );
		M_Modules::create( array( 'id' => 20, 'name' => 'outlet_setting' ) );
		
		DB::table('m_usergroups')->delete();
		M_Usergroups::create( array( 'id' => 1, 'name' => 'System Administrator' ));
		M_Usergroups::create( array( 'id' => 2, 'name'=>'Owner' ) );
		M_Usergroups::create( array( 'id' => 3, 'name'=>'Manager' ) );
		M_Usergroups::create( array( 'id' => 4, 'name'=>'Sales Staff' ) );
		M_Usergroups::create( array( 'id' => 5, 'name'=>'Warehouse Staff' ) );
		M_Usergroups::create( array( 'id' => 6, 'name'=>'Procurement Staff' ) );
		M_Usergroups::create( array( 'id' => 7, 'name'=>'Finance Staff' ) );
		
		
		DB::table('m_usergroup_privileges')->delete();
		M_UsergroupPrivileges::create( array( 'modules_id' => 1, 'usergroup' => 2 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 2, 'usergroup' => 2 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 3, 'usergroup' => 2 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 4, 'usergroup' => 2 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 5, 'usergroup' => 2 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 6, 'usergroup' => 2 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 7, 'usergroup' => 2 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 8, 'usergroup' => 2 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 9, 'usergroup' => 2 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 10, 'usergroup' => 2 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 11, 'usergroup' => 2 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 12, 'usergroup' => 2 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 13, 'usergroup' => 2 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 14, 'usergroup' => 2 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 15, 'usergroup' => 2 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 16, 'usergroup' => 2 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 17, 'usergroup' => 2 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 18, 'usergroup' => 2 ) );
		
		M_UsergroupPrivileges::create( array( 'modules_id' => 1, 'usergroup' => 3 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 2, 'usergroup' => 3 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 3, 'usergroup' => 3 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 4, 'usergroup' => 3 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 5, 'usergroup' => 3 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 6, 'usergroup' => 3 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 7, 'usergroup' => 3 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 8, 'usergroup' => 3 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 9, 'usergroup' => 3 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 10, 'usergroup' => 3 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 11, 'usergroup' => 3 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 12, 'usergroup' => 3 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 13, 'usergroup' => 3 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 14, 'usergroup' => 3 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 15, 'usergroup' => 3 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 16, 'usergroup' => 3 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 17, 'usergroup' => 3 ) );

		M_UsergroupPrivileges::create( array( 'modules_id' => 1, 'usergroup' => 4 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 2, 'usergroup' => 4 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 13, 'usergroup' => 4 ) );
		
		M_UsergroupPrivileges::create( array( 'modules_id' => 3, 'usergroup' => 5 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 4, 'usergroup' => 5 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 5, 'usergroup' => 5 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 6, 'usergroup' => 5 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 7, 'usergroup' => 5 ) );
		
		M_UsergroupPrivileges::create( array( 'modules_id' => 3, 'usergroup' => 6 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 8, 'usergroup' => 6 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 14, 'usergroup' => 6 ) );
		
		M_UsergroupPrivileges::create( array( 'modules_id' => 9, 'usergroup' => 7 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 10, 'usergroup' => 7 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 11, 'usergroup' => 7 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 12, 'usergroup' => 7 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 13, 'usergroup' => 7 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 14, 'usergroup' => 7 ) );
		M_UsergroupPrivileges::create( array( 'modules_id' => 15, 'usergroup' => 7 ) );
		
		
	}
}