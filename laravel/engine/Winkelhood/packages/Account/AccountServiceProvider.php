<?php
namespace Winkelhood\Account;
use Illuminate\Support\ServiceProvider;
use Illuminate\Foundation\AliasLoader;

/**
 * Account Service Provider
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014
 * @category ServiceProvider
 * @package Winkelhood\Account
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
class AccountServiceProvider extends ServiceProvider
{
	
	/**
	 * (non-PHPdoc)
	 * @see \Illuminate\Support\ServiceProvider::boot()
	 * --------------------------------------------------------------------
	 */
	public function boot ()
	{
		// Registring event
		\Event::subscribe( new Events\AccountEventHandler );
		
		// Auto create app alias with boot method.
		$loader = AliasLoader::getInstance();
		$loader->alias('Account', 'Winkelhood\Support\Facades\Account');
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
		
		$this->app->bindShared( 'account',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Account\Account' );
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
		// user repository
		$this->app->bindShared( 'Winkelhood\Account\Repositories\UserRepository',
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Account\Repositories\Users\RepositoryCache' );
			}
		);
		
		// usergroups repository
		$this->app->bindShared( 'Winkelhood\Account\Repositories\UsergroupRepository', 
			function( $app )
			{
				return $this->app->make( 'Winkelhood\Account\Repositories\Usergroups\RepositoryCache' );
			}	
		);
	}
	// --------------------------------------------------------------------
	
	/**
	 * Get the services provided by the provider.
	 * --------------------------------------------------------------------
	 */
	public function provides ()
	{
		return array(
			'account'
		);
	}
	// --------------------------------------------------------------------
	
}