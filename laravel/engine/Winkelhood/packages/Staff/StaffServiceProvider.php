<?php
namespace Winkelhood\Staff;
use Illuminate\Support\ServiceProvider;
use Illuminate\Foundation\AliasLoader;

/**
 * Staff Service Provider
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014
 * @category ServiceProvider
 * @package Winkelhood\Staff
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
class StaffServiceProvider extends ServiceProvider
{

	/**
	 * (non-PHPdoc)
	 * @see \Illuminate\Support\ServiceProvider::boot()
	 * --------------------------------------------------------------------
	 */
	public function boot ()
	{
		// Auto create app alias with boot method.
		$loader = AliasLoader::getInstance();
		$loader->alias( 'Staff', 'Winkelhood\Support\Facades\Staff' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Illuminate\Support\ServiceProvider::register()
	 * --------------------------------------------------------------------
	 */
	public function register ()
	{
		
		$this->repositories();
		
		$this->app->bindShared( 'staff',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Staff\Staff' );
			}
		);
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Initialing Aliases Repository
	 * 
	 * @return \Winkelhood\Costumer\Repositories\Costumer\RepositoryCache
	 * --------------------------------------------------------------------
	 */
	public function repositories ()
	{
		$this->app->bindShared( 'Winkelhood\Staff\Repositories\StaffRepository',
			function ( $app )
			{
				return $this->app->make( 'Winkelhood\Staff\Repositories\Staff\RepositoryCache' );
			}
		);
	}
	// --------------------------------------------------------------------
	
	/**
	 * Get the services provided by the provider.
	 *
	 * @return array
	 * --------------------------------------------------------------------
	 */
	public function provides()
	{
		return array( 'staff' );
	}
	// --------------------------------------------------------------------
	
}
