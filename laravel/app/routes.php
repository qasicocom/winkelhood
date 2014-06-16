<?php
/**
 * #########################################################################################
 *
 *                 ,e,          888   _             888 888                              888
 *  Y88b    e    /  "  888-~88e 888 e~ ~   e88~~8e  888 888-~88e  e88~-_   e88~-_   e88~\888
 *   Y88b  d8b  /  888 888  888 888d8b    d888  88b 888 888  888 d888   i d888   i d888  888
 *    Y888/Y88b/   888 888  888 888Y88b   8888__888 888 888  888 8888   | 8888   | 8888  888
 *     Y8/  Y8/    888 888  888 888 Y88b  Y888    , 888 888  888 Y888   ' Y888   ' Y888  888
 *      Y    Y     888 888  888 888  Y88b  "88___/  888 888  888  "88_-~   "88_-~   "88_/888
 *
 * #########################################################################################
 * #########################################################################################
 *
 * Basic Route Winkelhood
 *
 * - Auth   ( auth.winkelhood.com )
 * - Apps   ( *.winkelhood.com )
 * - System ( system.winkelhood.com )
 * - Api    ( api.winkelhood.com )
 * - Frontend
 */

/**
 * --------------------------------------------------------------------
 * Group Route yang hanya dapat dilihat oleh Guest.
 *
 * This group will do filter guest before run the function inside,
 * if user loggedin visiting this routes, will automatic redirect to
 * landing page after login, such as company page or system page
 * based on user usergroups.
 *
 * ####################################################################
 * ################## Auth ( auth.winkelhood.com ) ####################
 * ####################################################################
 * --------------------------------------------------------------------
 */
Route::group(
	array(
		'before' => 'guest'
	),
	function  ()
	{
		/**
		 * --------------------------------------------------------------------------
		 * Auth Routes (auth.appdomain)
		 * --------------------------------------------------------------------------
		 */
		Route::group(
			array(
				'domain' => 'auth.' . Config::get( 'app.costum.domain.home' )
			),
			function  ()
			{
	
				// route to show the login form
				Route::get( '/',
					array(
						'as'   => 'auth.signin',
						'uses' => 'Auth\AuthController@getSignin'
					)
				);
	
				// route to show the signup form
				Route::get( 'signup',
					array(
						'as'   => 'auth.signup',
						'uses' => 'Auth\AuthController@getSignup'
					)
				);
	
				// show remember password form
				Route::get( 'lostpwd',
					array(
						'as'     => 'auth.lostpwd',
						'uses'   => 'Auth\AuthController@getLostpwd'
					)
				);
	
				// show password reset form
				Route::get( 'pwdreset/{token}',
					array(
						'as'     => 'auth.pwdreset',
						'uses'   => 'Auth\AuthController@getPwdReset'
					)
				);
	
				// route to do email verify user after signup
				Route::get( 'verify',
					array(
						'as'     => 'auth.verify',
						'uses'   => 'Auth\AuthController@doVerify'
					)
				);
	
				// signup post
				Route::post( 'signup',
					array(
						'as' 	 => 'auth.signup.post',
						'before' => 'csrf',
						'uses' 	 => 'Auth\AuthController@postSignup'
					)
				);
	
				// route to process the form
				Route::post( '/',
					array(
						'as' 	 => 'auth.signin.post',
						'before' => 'csrf',
						'uses'   => 'Auth\AuthController@postSignin'
					)
				);
	
				// handle post on remind pwd
				Route::post( 'lostpwd',
					array(
						'as' 	 => 'auth.lostpwd.post',
						'before' => 'csrf',
						'uses'   => 'Auth\AuthController@postLostpwd'
					)
				);
	
				// handle post on remind pwd
				Route::post( 'pwdreset/{token}',
					array(
						'as' 	 => 'auth.pwdreset.post',
						'before' => 'csrf',
						'uses'   => 'Auth\AuthController@postPwdReset'
					)
				);
	
			}
		);
		// --------------------------------------------------------------------------
	}
);
// --------------------------------------------------------------------


/**
 * --------------------------------------------------------------------
 * Group Route yang hanya dapat di akses apabila user sudah loggedin
 *
 * will do auth filter before run the function, if guest visiting this
 * routes, will redirected to login page
 *
 * ####################################################################
 * #################### Apps ( *.winkelhood.com ) #####################
 * #################### Api ( api.winkelhood.com ) ####################
 * ################# System ( system.winkelhood.com ) #################
 * ####################################################################
 * --------------------------------------------------------------------
 */
Route::group(
	array(
		'before' => 'auth'
	),
	function  ()
	{

		/**
		 * ------------------------------------------------------------
		 * System Routes (system.appdomain)
		 * Routing for sysadmin controllers
		 * ------------------------------------------------------------
		 */
		Route::group(
			array(
				'domain' => 'system.' . Config::get( 'app.costum.domain.home' ),
				'before' => 'auth.system'
			),
			function  ()
			{


			}
		);
		// ------------------------------------------------------------
		
		/**
		 * ------------------------------------------------------------
		 * Company Routes ({slug}.appdomain)
		 * this the wildcard subdomain for company
		 * and handle all route under this subdomain
		 * ------------------------------------------------------------
		 */
		Route::group(
		array(
				'domain'   => '{slug}.' . Config::get( 'app.costum.domain.home' ),
				'before'   => 'company.wildcard'
			),
			function  ( $slug )
			{
				// Dashboard Retail
				Route::get( '/',
				array(
				'as'   => 'app.dashboard',
				'uses' => 'Apps\DashboardController@getIndex'
					)
				);
		
				// Point of Sales
				Route::group(
				array( 'prefix' => 'pos' ),
				function  ()
				{
		
				}
				);
		
				// Procurement Management
				Route::group(
				array( 'prefix' => 'procurement' ),
				function  ()
				{
						
				}
				);
		
				// Warehouse Management
				Route::group(
				array( 'prefix' => 'warehouse' ),
				function  ()
				{
					// product management
					Route::group(
					array( 'prefix' => 'product' ),
					function  ()
					{
						// index Costumer
						Route::get  ( '/', array( 'as' => 'app.warehouse.product', 'uses' => 'Apps\Warehouse\ProductController@getIndex' ) );
		
						// datatable
						Route::get  ( 'data', array( 'as' => 'app.warehouse.product.datatable', 'before' => 'ajax_request', 'uses' => 'Apps\Warehouse\ProductController@getData' ) );
		
						// create
						Route::get  ( 'create', array( 'as' => 'app.warehouse.product.create', 'uses' => 'Apps\Warehouse\ProductController@getCreate' ) );
						Route::post ( 'create', array( 'as' => 'app.warehouse.product.create.action', 'before' => 'csrf|ajax_request', 'uses' => 'Apps\Warehouse\ProductController@postCreate' ) );
		
						// update
						Route::get  ( 'update/{id}', array( 'as' => 'app.warehouse.product.update', 'before' => 'ajax_request', 'uses' => 'Apps\Warehouse\ProductController@getUpdate' ) );
						Route::post ( 'update/{id}', array( 'as' => 'app.warehouse.product.update.action', 'before' => 'csrf|ajax_request', 'uses' => 'Apps\Warehouse\ProductController@postUpdate' ) );
		
						// delete
						Route::get  ( 'delete/{id}', array( 'as' => 'app.warehouse.product.delete', 'before' => 'ajax_request', 'uses' => 'Apps\Warehouse\ProductController@getDelete' ) );
						Route::post ( 'delete/{id}', array( 'as' => 'app.warehouse.product.delete.action', 'before' => 'csrf|ajax_request', 'uses' => 'Apps\Warehouse\ProductController@postDelete' ) );
		
					}
					);
		
					// category management
					Route::group(
					array( 'prefix' => 'category' ),
					function  ()
					{
						// index
						Route::get  ( '/', array( 'as' => 'app.warehouse.category', 'uses' => 'Apps\Warehouse\CategoryController@getIndex' ) );
							
						// datatable
						Route::get  ( 'data', array( 'as' => 'app.warehouse.category.datatable', 'before' => 'ajax_request', 'uses' => 'Apps\Warehouse\CategoryController@getData' ) );
							
						// create
						Route::get  ( 'create', array( 'as' => 'app.warehouse.category.create', 'before' => 'ajax_request', 'uses' => 'Apps\Warehouse\CategoryController@getCreate' ) );
						Route::post ( 'create', array( 'as' => 'app.warehouse.category.create.action', 'before' => 'csrf|ajax_request', 'uses' => 'Apps\Warehouse\CategoryController@postCreate' ) );
							
						// update
						Route::get  ( 'update/{id}', array( 'as' => 'app.warehouse.category.update', 'before' => 'ajax_request', 'uses' => 'Apps\Warehouse\CategoryController@getUpdate' ) );
						Route::post ( 'update/{id}', array( 'as' => 'app.warehouse.category.update.action', 'before' => 'csrf|ajax_request', 'uses' => 'Apps\Warehouse\CategoryController@postUpdate' ) );
							
						// delete
						Route::get  ( 'delete/{id}', array( 'as' => 'app.warehouse.category.delete', 'before' => 'ajax_request', 'uses' => 'Apps\Warehouse\CategoryController@getDelete' ) );
						Route::post ( 'delete/{id}', array( 'as' => 'app.warehouse.category.delete.action', 'before' => 'csrf|ajax_request', 'uses' => 'Apps\Warehouse\CategoryController@postDelete' ) );
					}
					);
		
					// variant
					Route::group(
					array( 'prefix' => 'variant' ),
					function  ()
					{
							
					}
					);
				}
				);
		
				// Reporting
				Route::group(
				array( 'prefix' => 'report' ),
				function  ()
				{
						
				}
				);
		
				// Costumer Management
				Route::group(
				array( 'prefix' => 'costumer' ),
				function  ()
				{
					// index Costumer
					Route::get  ( '/', array( 'as' => 'app.costumer', 'uses' => 'Apps\CostumerController@getIndex' ) );
		
					// datatable
					Route::get  ( 'data', array( 'as' => 'app.costumer.datatable', 'before' => 'ajax_request', 'uses' => 'Apps\CostumerController@getData' ) );
		
					// create
					Route::get  ( 'create', array( 'as' => 'app.costumer.create', 'before' => 'ajax_request', 'uses' => 'Apps\CostumerController@getCreate' ) );
					Route::post ( 'create', array( 'as' => 'app.costumer.create.action', 'before' => 'csrf|ajax_request', 'uses' => 'Apps\CostumerController@postCreate' ) );
		
					// update
					Route::get  ( 'update/{id}', array( 'as' => 'app.costumer.update', 'before' => 'ajax_request', 'uses' => 'Apps\CostumerController@getUpdate' ) );
					Route::post ( 'update/{id}', array( 'as' => 'app.costumer.update.action', 'before' => 'csrf|ajax_request', 'uses' => 'Apps\CostumerController@postUpdate' ) );
		
					// delete
					Route::get  ( 'delete/{id}', array( 'as' => 'app.costumer.delete', 'before' => 'ajax_request', 'uses' => 'Apps\CostumerController@getDelete' ) );
					Route::post ( 'delete/{id}', array( 'as' => 'app.costumer.delete.action', 'before' => 'csrf|ajax_request', 'uses' => 'Apps\CostumerController@postDelete' ) );
		
				}
				);
		
				// Supplier Management
				Route::group(
				array( 'prefix' => 'supplier' ),
				function  ()
				{
					// index Costumer
					Route::get  ( '/', array( 'as' => 'app.supplier', 'uses' => 'Apps\SupplierController@getIndex' ) );
		
					// datatable
					Route::get  ( 'data', array( 'as' => 'app.supplier.datatable', 'before' => 'ajax_request', 'uses' => 'Apps\SupplierController@getData' ) );
		
					// create
					Route::get  ( 'create', array( 'as' => 'app.supplier.create', 'before' => 'ajax_request', 'uses' => 'Apps\SupplierController@getCreate' ) );
					Route::post ( 'create', array( 'as' => 'app.supplier.create.action', 'before' => 'csrf|ajax_request', 'uses' => 'Apps\SupplierController@postCreate' ) );
		
					// update
					Route::get  ( 'update/{id}', array( 'as' => 'app.supplier.update', 'before' => 'ajax_request', 'uses' => 'Apps\SupplierController@getUpdate' ) );
					Route::post ( 'update/{id}', array( 'as' => 'app.supplier.update.action', 'before' => 'csrf|ajax_request', 'uses' => 'Apps\SupplierController@postUpdate' ) );
		
					// delete
					Route::get  ( 'delete/{id}', array( 'as' => 'app.supplier.delete', 'before' => 'ajax_request', 'uses' => 'Apps\SupplierController@getDelete' ) );
					Route::post ( 'delete/{id}', array( 'as' => 'app.supplier.delete.action', 'before' => 'csrf|ajax_request', 'uses' => 'Apps\SupplierController@postDelete' ) );
		
				}
				);
		
				// Setting
				Route::group(
				array( 'prefix' => 'setting' ),
				function  ()
				{
						
					// profile
					Route::group(
					array( 'prefix' => 'profile' ),
					function  ()
					{
						Route::get   ( '/', array( 'as' => 'app.setting.profile', 'uses' => 'Apps\Setting\ProfileController@getIndex' ) );
						Route::post  ( '/', array( 'as' => 'app.setting.profile.update', 'uses' => 'Apps\Setting\ProfileController@postUpdate' ) );
						Route::post  ( 'avatar', array( 'as' => 'app.setting.profile.avatar', 'uses' => 'Apps\Setting\ProfileController@postAvatar' ) );
					}
					);
		
					// Staff
					Route::group(
					array( 'prefix' => 'staff' ),
					function  ()
					{
						// index
						Route::get  ( '/', array( 'as' => 'app.setting.staff', 'uses' => 'Apps\Setting\StaffController@getIndex' ) );
		
						// datatable
						Route::get  ( 'data', array( 'as' => 'app.setting.staff.datatable', 'before' => 'ajax_request', 'uses' => 'Apps\Setting\StaffController@getData' ) );
		
						// create
						Route::get  ( 'create', array( 'as' => 'app.setting.staff.create', 'before' => 'ajax_request', 'uses' => 'Apps\Setting\StaffController@getCreate' ) );
						Route::post ( 'create', array( 'as' => 'app.setting.staff.create.action', 'before' => 'csrf|ajax_request', 'uses' => 'Apps\Setting\StaffController@postCreate' ) );
		
						// update
						Route::get  ( 'update/{id}', array( 'as' => 'app.setting.staff.update', 'before' => 'ajax_request', 'uses' => 'Apps\Setting\StaffController@getUpdate' ) );
						Route::post ( 'update/{id}', array( 'as' => 'app.setting.staff.update.action', 'before' => 'csrf|ajax_request', 'uses' => 'Apps\Setting\StaffController@postUpdate' ) );
		
						// delete
						Route::get  ( 'delete/{id}', array( 'as' => 'app.setting.staff.delete', 'before' => 'ajax_request', 'uses' => 'Apps\Setting\StaffController@getDelete' ) );
						Route::post ( 'delete/{id}', array( 'as' => 'app.setting.staff.delete.action', 'before' => 'csrf|ajax_request', 'uses' => 'Apps\Setting\StaffController@postDelete' ) );
		
					}
					);
		
					// Company
					Route::group(
					array( 'prefix' => 'company' ),
					function  ()
					{
						// update
						Route::get  ( '/', array( 'as' => 'app.setting.company', 'uses' => 'Apps\Setting\CompanyController@getIndex' ) );
						Route::post ( '/', array( 'as' => 'app.setting.company.action', 'before' => 'csrf', 'uses' => 'Apps\Setting\CompanyController@postIndex' ) );
		
					}
					);
		
				}
				);
		
			}
		);
		// ------------------------------------------------------------
		
		
		
	}
);
// --------------------------------------------------------------------


/**
 * --------------------------------------------------------------------
 * Other Route
 *
 * --------------------------------------------------------------------
 */
Route::group(
	array(
		'prefix' => 'api',
		'before' => 'ajax_request'
	),
	function  ()
	{
		// chaining city on select box
		Route::post( 'city',
			array(
				'as'   => 'city',
				'uses' => 'Api\City@ChainSelect'
			)
		);

		// checking company slug
		Route::post( 'company/slug',
			array(
				'as'   => 'slugcheck',
				'uses' => 'Api\Company@checkSlug'
			)
		);
	}
);

	/**
	 * Home Qasico
	 * ----------------------------------------------------------------
	 */
	Route::get( '/',array('as' => 'home','uses' => 'Frontend\FrontendController@getHome'));
	// ----------------------------------------------------------------
	
	/**
	 * Changing language
	 * ----------------------------------------------------------------
	*/
	Route::get( 'locale/{lang}', array( 'before' => 'locale' ) );
	// ----------------------------------------------------------------
	
	/**
	 * Signout Loggedin user
	 * ----------------------------------------------------------------
	*/
	Route::get( 'signout', array( 'as' => 'signout', 'uses' => 'Auth\AuthController@doSignout' ) );
	// ----------------------------------------------------------------

// --------------------------------------------------------------------