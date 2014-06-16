<?php
namespace Winkelhood\Warehouse;
use App;

/**
 * Warehouse PackageLayers
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Jun 4, 2014 
 * @category PackageLayers
 * @package  Winkelhood\Warehouse
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class Warehouse
{
	
	/**
	 * Aliases Product Processors
	 * 
	 * @return Winkelhood\Warehosue\Processors\ProductProcessor
	 * --------------------------------------------------------------------
	 */
	public function product ()
	{
		return App::make( 'Winkelhood\Warehouse\Processors\ProductProcessor' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Aliases Product Category Processors
	 *
	 * @return Winkelhood\Warehosue\Processors\CategoryProcessor
	 * --------------------------------------------------------------------
	 */
	public function category ()
	{
		return App::make( 'Winkelhood\Warehouse\Processors\CategoryProcessor' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Aliases Product Variant Processors
	 *
	 * @return Winkelhood\Warehosue\Processors\VariantProcessor
	 * --------------------------------------------------------------------
	 */
	public function variant ()
	{
		return App::make( 'Winkelhood\Warehouse\Processors\VariantProcessor' );
	}
	// --------------------------------------------------------------------
	
	
}