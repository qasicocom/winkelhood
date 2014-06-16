<?php
namespace Winkelhood\Account\Facades;
use Illuminate\Support\Facades\Facade;

/**
 * Account Facade Aliases
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 14, 2014 
 * @category Facade
 * @package Winkelhood\Account
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class Account extends Facade
{
	/**
	 * Get the registered name of the component.
	 *
	 * @return string
	 * --------------------------------------------------------------------
	 */
	protected static function getFacadeAccessor()
	{
		return 'account';
	}
	// --------------------------------------------------------------------
	
}