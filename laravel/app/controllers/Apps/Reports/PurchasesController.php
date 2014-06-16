<?php
namespace Apps\Report;

use Winkel\Repositories\PurchasedOrder\PurchasedOrderRepository;

/**
 * Purchases Controller
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
class PurchasesController extends \AppsController
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
		dd( 'purchased report' );
	}
	
}