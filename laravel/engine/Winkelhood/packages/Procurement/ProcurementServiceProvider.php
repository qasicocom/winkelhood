<?php 
namespace Winkelhood\Procurement;
use Illuminate\Support\ServiceProvider;
use Illuminate\Foundation\AliasLoader;

/**
 * Procurement Service Provider
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014
 * @category ServiceProvider
 * @package  Winkelhood\Procurement
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class ProcurementServiceProvider extends ServiceProvider 
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
		$loader->alias( 'Procurement', 'Winkelhood\Support\Facades\Procurement' );
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
	
		$this->app->bindShared( 'procurement',
			function( $app )
			{
				return new Procurement;
			}
		);
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Procurement Repository Aliases
	 *
	 * --------------------------------------------------------------------
	 */
	public function repositories ()
	{
		
		$this->app->bindShared( 'Winkelhood\Procurement\Repositories\DetailRepository',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Procurement\Repositories\Detail\RepositoryCache' );
			}
		);
		
		$this->app->bindShared( 'Winkelhood\Procurement\Repositories\OrderRepository',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Procurement\Repositories\Order\RepositoryCache' );
			}
		);
		
		$this->app->bindShared( 'Winkelhood\Procurement\Repositories\PaymentRepository',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Procurement\Repositories\Payment\RepositoryCache' );
			}
		);
		
		$this->app->bindShared( 'Winkelhood\Procurement\Repositories\ReceivingRepository',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Procurement\Repositories\Receiving\RepositoryCache' );
			}
		);
		
		$this->app->bindShared( 'Winkelhood\Procurement\Repositories\RequestRepository',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Procurement\Repositories\Request\RepositoryCache' );
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
			'procurement'
		);
	
	}
	// --------------------------------------------------------------------
}
