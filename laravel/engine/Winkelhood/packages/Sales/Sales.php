<?php
namespace Winkelhood\Sales;

/**
 * Sales Package Layers
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Jun 4, 2014 
 * @category PackageLayers
 * @package  Winkelhood\Sales
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class Sales
{
	
	/**
	 * Alises Detail Processors
	 * 
	 * @return Winkelhood\Sales\Processors\DetailProcessor
	 * --------------------------------------------------------------------
	 */
	public function detail ()
	{
		return \App::make( 'Winkelhood\Sales\Processors\DetailProcessor' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Alises Order Processors
	 *
	 * @return Winkelhood\Sales\Processors\OrderProcessor
	 * --------------------------------------------------------------------
	 */
	public function order ()
	{
		return \App::make( 'Winkelhood\Sales\Processors\OrderProcessor' );
	}
	// --------------------------------------------------------------------

	/**
	 * Alises Payment Processors
	 *
	 * @return Winkelhood\Sales\Processors\PaymentProcessor
	 * --------------------------------------------------------------------
	 */
	public function payment ()
	{
		return \App::make( 'Winkelhood\Sales\Processors\PaymentProcessor' );
	}
	// --------------------------------------------------------------------

	/**
	 * Alises Returning Processors
	 *
	 * @return Winkelhood\Sales\Processors\ReturningProcessor
	 * --------------------------------------------------------------------
	 */
	public function returning ()
	{
		return \App::make( 'Winkelhood\Sales\Processors\ReturningProcessor' );
	}
	// --------------------------------------------------------------------

	/**
	 * Alises Shipping Processors
	 *
	 * @return Winkelhood\Sales\Processors\ShippingProcessor
	 * --------------------------------------------------------------------
	 */
	public function shipping ()
	{
		return \App::make( 'Winkelhood\Sales\Processors\ShippingProcessor' );
	}
	// --------------------------------------------------------------------
	
}