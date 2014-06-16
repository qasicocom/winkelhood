<?php
namespace Winkelhood\Industry;
use Illuminate\Support\ServiceProvider;
use Illuminate\Foundation\AliasLoader;

/**
 * Industry Service Provider
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014 
 * @category ServiceProvider
 * @package  Winkelhood\Industry
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class IndustryServiceProvider extends ServiceProvider
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
		$loader->alias( 'Industry', 'Winkelhood\Support\Facades\Industry' );
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
	
		$this->app->bindShared( 'industry',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Industry\Industry' );
			}
		);
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Industry Repository Aliases
	 * 
	 * @return \Winkelhood\Industry\Repositories\Industry\RepositoryCache
	 * --------------------------------------------------------------------
	 */
	public function repositories ()
	{
		$this->app->bindShared( 'Winkelhood\Industry\Repositories\IndustryRepository',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Industry\Repositories\Industry\RepositoryCache' );
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
		return array(
			'industry'
		);
	
	}
	// --------------------------------------------------------------------
	
}
