<?php
namespace Winkelhood\Support\Facades;
use Illuminate\Support\Facades\Facade;

/**
 * Warehouse Facade Aliases
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 14, 2014 
 * @category Facade
 * @package Winkelhood\Support
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class Warehouse extends Facade
{
	/**
	 * Get the registered name of the component.
	 *
	 * @return string
	 * --------------------------------------------------------------------
	 */
	protected static function getFacadeAccessor()
	{
		return 'warehouse';
	}
	// --------------------------------------------------------------------
	
}