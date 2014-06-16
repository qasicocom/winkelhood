<?php
namespace Winkelhood\Procurement;

/**
 * Procurement Package Layers
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Jun 4, 2014 
 * @category PackageLayers
 * @package  Winkelhood\Procurement
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class Procurement
{
	
	/**
	 * Aliases Detail Processor
	 * 
	 * @return object Winkelhood\Procurement\Processors\DetailProcessor
	 * --------------------------------------------------------------------
	 */
	public function detail ()
	{
		return \App::make( 'Winkelhood\Procurement\Processors\DetailProcessor' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Aliases Order Processor
	 *
	 * @return object Winkelhood\Procurement\Processors\OrderProcessor
	 * --------------------------------------------------------------------
	 */
	public function order ()
	{
		return \App::make( 'Winkelhood\Procurement\Processors\OrderProcessor' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Aliases Payment Processor
	 *
	 * @return object Winkelhood\Procurement\Processors\PaymentProcessor
	 * --------------------------------------------------------------------
	 */
	public function payment ()
	{
		return \App::make( 'Winkelhood\Procurement\Processors\PaymentProcessor' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Aliases Receiving Processor
	 *
	 * @return object Winkelhood\Procurement\Processors\ReceivingProcessor
	 * --------------------------------------------------------------------
	 */
	public function receiving ()
	{
		return \App::make( 'Winkelhood\Procurement\Processors\ReceivingProcessor' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Aliases Request Processor
	 *
	 * @return object Winkelhood\Procurement\Processors\RequestProcessor
	 * --------------------------------------------------------------------
	 */
	public function request ()
	{
		return \App::make( 'Winkelhood\Procurement\Processors\RequestProcessor' );
	}
	// --------------------------------------------------------------------
	
	
}