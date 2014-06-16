<?php
namespace Winkelhood\Services;
use Illuminate\Support\ServiceProvider;

/**
 * Services ServiceProvider
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since March 3, 2014 
 * @category ServiceProvider
 * @package  Winkelhood\Services
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class ServicesServiceProvider extends ServiceProvider
{

	/**
	 * (non-PHPdoc)
	 * @see \Illuminate\Support\ServiceProvider::boot()
	 * --------------------------------------------------------------------
	 */
	public function boot()
	{
		\View::composer( 'winkel.apps.sidebar', 'Winkelhood\Services\ViewComposer\Sidebar' );
		\View::composer( 'plugins.city.form',   'Winkelhood\Services\ViewComposer\CityComposer' );
		\View::composer( 'winkel.apps.module',  'Winkelhood\Services\ViewComposer\Module' );
	}
	// --------------------------------------------------------------------

	/**
	 * (non-PHPdoc)
	 * @see \Illuminate\Support\ServiceProvider::register()
	 * --------------------------------------------------------------------
	 */
	public function register ()
	{
		//
	}
	// --------------------------------------------------------------------

}
