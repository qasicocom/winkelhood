<?php
namespace Winkelhood\Warehouse;
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
class WarehouseServiceProvider extends ServiceProvider
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
		$loader->alias( 'Warehouse', 'Winkelhood\Support\Facades\Warehouse' );
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
		
		$this->app->bindShared( 'warehouse',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Warehouse\Warehouse' );
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
		$this->app->bindShared( 'Winkelhood\Warehouse\Repositories\CategoryRepository',
			function ( $app )
			{
				return $this->app->make( 'Winkelhood\Warehouse\Repositories\Category\RepositoryCache' );
			}
		);
		
		
		$this->app->bindShared( 'Winkelhood\Warehouse\Repositories\ProductRepository',
			function ( $app )
			{
				return $this->app->make( 'Winkelhood\Warehouse\Repositories\Product\RepositoryCache' );
			}
		);
		
		
		$this->app->bindShared( 'Winkelhood\Warehouse\Repositories\VariantRepository',
			function ( $app )
			{
				return $this->app->make( 'Winkelhood\Warehouse\Repositories\Variant\RepositoryCache' );
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
		return array( 'warehosue' );
	}
	// --------------------------------------------------------------------
	
}
