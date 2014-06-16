<?php 
namespace Winkelhood\Sales;
use Illuminate\Support\ServiceProvider;
use Illuminate\Foundation\AliasLoader;

/**
 * Sales Service Provider
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014
 * @category ServiceProvider
 * @package  Winkelhood\Sales
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class SalesServiceProvider extends ServiceProvider 
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
		$loader->alias( 'Sales', 'Winkelhood\Support\Facades\Sales' );
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
	
		$this->app->bindShared( 'sales',
			function( $app )
			{
				return new Sales;
			}
		);
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Sales Repository Aliases
	 *
	 * --------------------------------------------------------------------
	 */
	public function repositories ()
	{
		
		$this->app->bindShared( 'Winkelhood\Sales\Repositories\DetailRepository',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Sales\Repositories\Detail\RepositoryCache' );
			}
		);
		
		$this->app->bindShared( 'Winkelhood\Sales\Repositories\OrderRepository',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Sales\Repositories\Order\RepositoryCache' );
			}
		);
		
		$this->app->bindShared( 'Winkelhood\Sales\Repositories\PaymentRepository',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Sales\Repositories\Payment\RepositoryCache' );
			}
		);
		
		$this->app->bindShared( 'Winkelhood\Sales\Repositories\ReturningRepository',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Sales\Repositories\Returning\RepositoryCache' );
			}
		);
		
		$this->app->bindShared( 'Winkelhood\Sales\Repositories\ShippingRepository',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Sales\Repositories\Shipping\RepositoryCache' );
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
			'sales'
		);
	
	}
	// --------------------------------------------------------------------
}
