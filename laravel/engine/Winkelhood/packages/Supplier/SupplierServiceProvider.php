<?php
namespace Winkelhood\Supplier;
use Illuminate\Support\ServiceProvider;
use Illuminate\Foundation\AliasLoader;

/**
 * Supplier Service Provider
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014
 * @category ServiceProvider
 * @package Winkelhood\Supplier
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
class SupplierServiceProvider extends ServiceProvider
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
		$loader->alias( 'Supplier', 'Winkelhood\Support\Facades\Supplier' );
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
		
		$this->app->bindShared( 'supplier',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Supplier\Supplier' );
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
		$this->app->bindShared( 'Winkelhood\Supplier\Repositories\SupplierRepository',
			function ( $app )
			{
				return $this->app->make( 'Winkelhood\Supplier\Repositories\Supplier\RepositoryCache' );
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
		return array( 'supplier' );
	}
	// --------------------------------------------------------------------
	
}
