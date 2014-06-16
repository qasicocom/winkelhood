<?php
namespace Apps;

use Winkel\Repositories\PurchasedOrder\PurchasedOrderRepository;

/**
 * Procurement Controller
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 10, 2014 
 * @category Controller
 * @package Winkel
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class ProcurementController extends \AppsController
{
	/**
	 * Repository object
	 * 
	 * @var object
	 * --------------------------------------------------------------------
	 */
	protected $repo;
	// --------------------------------------------------------------------
	
	/**
	 * Processor object
	 * 
	 * @var object
	 * --------------------------------------------------------------------
	 */
	protected $process;
	// --------------------------------------------------------------------
	
	/**
	 * Constructor
	 * 
	 * @param PurchasedOrderRepository $repo
	 * --------------------------------------------------------------------
	 */
	public function __construct( PurchasedOrderRepository $repo )
	{
		parent::__construct();
		$this->repo 	= $repo;
	}
	// --------------------------------------------------------------------
	
	public function getIndex ()
	{
		dd( 'procurement' );
	}
	
}