<?php
namespace Winkelhood\Costumer;
use Illuminate\Support\ServiceProvider;
use Illuminate\Foundation\AliasLoader;

/**
 * Costumer Service Provider
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014
 * @category ServiceProvider
 * @package Winkelhood\Costumer
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
class CostumerServiceProvider extends ServiceProvider
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
		$loader->alias( 'Costumer', 'Winkelhood\Support\Facades\Costumer' );
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
		
		$this->app->bindShared( 'costumer',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Costumer\Costumer' );
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
		$this->app->bindShared( 'Winkelhood\Costumer\Repositories\CostumerRepository',
			function ( $app )
			{
				return $this->app->make( 'Winkelhood\Costumer\Repositories\Costumer\RepositoryCache' );
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
		return array( 'costumer' );
	}
	// --------------------------------------------------------------------
	
}
