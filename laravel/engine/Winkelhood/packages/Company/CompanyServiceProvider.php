<?php
namespace Winkelhood\Company;
use Illuminate\Support\ServiceProvider;
use Illuminate\Foundation\AliasLoader;

/**
 * Company Service Provider
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014
 * @category ServiceProvider
 * @package Winkelhood\Company
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
class CompanyServiceProvider extends ServiceProvider
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
		$loader->alias('Company', 'Winkelhood\Support\Facades\Company');
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
		
		$this->app->bindShared( 'company',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Company\Company' );
			}
		);
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Initialing Repositories aliases
	 * --------------------------------------------------------------------
	 */
	public function repositories ()
	{
		$this->app->bindShared( 'Winkelhood\Company\Repositories\CompanyRepository',
			function ( $app )
			{
				return $this->app->make( 'Winkelhood\Company\Repositories\Company\RepositoryCache' );
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
		return array( 'company' );
	}
	// --------------------------------------------------------------------
	
}
