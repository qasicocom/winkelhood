<?php 
namespace Winkelhood\Outlet;
use Illuminate\Support\ServiceProvider;
use Illuminate\Foundation\AliasLoader;

/**
 * Outlet Service Provider
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014
 * @category ServiceProvider
 * @package  Winkelhood\Outlet
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class OutletServiceProvider extends ServiceProvider 
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
		$loader->alias( 'Outlet', 'Winkelhood\Support\Facades\Outlet' );
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
	
		$this->app->bindShared( 'outlet',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Outlet\Outlet' );
			}
		);
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Industry Repository Aliases
	 *
	 * @return \Winkelhood\Outlet\Repositories\Outlet\RepositoryCache
	 * --------------------------------------------------------------------
	 */
	public function repositories ()
	{
		$this->app->bindShared( 'Winkelhood\Outlet\Repositories\OutletRepository',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Outlet\Repositories\Outlet\RepositoryCache' );
			}
		);
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Illuminate\Support\ServiceProvider::provides()
	 * --------------------------------------------------------------------
	 */
	public function provides ()
	{
		return array(
			'outlet'
		);
	
	}
	// --------------------------------------------------------------------
}
