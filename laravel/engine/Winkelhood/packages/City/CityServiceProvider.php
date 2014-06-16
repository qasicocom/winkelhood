<?php
namespace Winkelhood\City;
use Illuminate\Support\ServiceProvider;
use Illuminate\Foundation\AliasLoader;

/**
 * Packages City Service Provider
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014 
 * @category ServiceProvider
 * @package  Winkelhood\City
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class CityServiceProvider extends ServiceProvider
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
		$loader->alias( 'City', 'Winkelhood\Support\Facades\City' );
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
		
		$this->app->bindShared( 'city',
			function( $app )
			{
				return new City();
			}
		);
		
	}
	// --------------------------------------------------------------------
		
	/**
	 * Initialing bind repository aliases,
	 * Using Automatic Resolution IoC container class
	 * --------------------------------------------------------------------
	 */
	public function repositories ()
	{
		
		$this->app->bindShared( 'Winkelhood\City\Repositories\PropinsiRepository',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\City\Repositories\Propinsi\RepositoryCache' );
			}
		);
		
		$this->app->bindShared( 'Winkelhood\City\Repositories\KabupatenRepository',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\City\Repositories\Kabupaten\RepositoryCache' );
			}
		);
		
		$this->app->bindShared( 'Winkelhood\City\Repositories\KecamatanRepository',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\City\Repositories\Kecamatan\RepositoryCache' );
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
	public function provides ()
	{
		return array( 'city' );
	}
	// --------------------------------------------------------------------

}
