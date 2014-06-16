<?php
namespace Winkelhood\Core;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;

/**
 * CoreServiceProvider
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014 
 * @category ServiceProvider
 * @package Winkelhood\Core
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class CoreServiceProvider extends ServiceProvider
{

	/**
	 * (non-PHPdoc)
	 * @see \Illuminate\Support\ServiceProvider::boot()
	 * --------------------------------------------------------------------
	 */
	public function boot ()
	{
		require 'helpers/GlobalHelpers.php';
		require 'macros/form.php';
		require 'macros/html.php';
		
		Validator::extend( 'string', 		'Winkelhood\Core\Services\ExtendedValidator@validateString');
		Validator::extend( 'exists_with', 	'Winkelhood\Core\Services\ExtendedValidator@validateExistsWith');
		Validator::extend( 'exists_on', 	'Winkelhood\Core\Services\ExtendedValidator@validateExistsOn');
		Validator::extend( 'unique_with', 	'Winkelhood\Core\Services\ExtendedValidator@validateUniqueWith');
		Validator::extend( 'unique_except', 'Winkelhood\Core\Services\ExtendedValidator@validateUniqueExcept');
		Validator::extend( 'unique_join',   'Winkelhood\Core\Services\ExtendedValidator@validateUniqueJoin');
	
		Validator::resolver(
			function($translator, $data, $rules, $messages)
			{
				
				return new Services\ExtendedValidator( $translator, $data, $rules );
				
			}
		);
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Illuminate\Support\ServiceProvider::register()
	 */
	public function register()
	{
		
	}
	// --------------------------------------------------------------------
	
}