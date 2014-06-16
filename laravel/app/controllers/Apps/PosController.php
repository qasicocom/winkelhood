<?php
namespace Apps;

use Winkel\Processors\SalesOrder\SalesOrderProcessor;
use Winkel\Repositories\SalesOrder\SalesOrderRepository;

/**
 * POS Controller
 *
 *
 * @author     Alif Amri Suri (alifamri@qasico.com)
 * @since      Apr 12, 2014 
 * @category   Controller
 * @package    Laravel
 * @version    1
 * @since      File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico Technologies Inc.
 */
class PosController extends \AppsController
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
	 * Process object
	 * 
	 * @var object
	 * --------------------------------------------------------------------
	 */
	protected $process;
	// --------------------------------------------------------------------
	
	/**
	 * Constructor
	 * 
	 * @param SalesOrderRepository $repo
	 * @param SalesOrderProcessor $process
	 * --------------------------------------------------------------------
	 */
	public function __construct( SalesOrderRepository $repo, SalesOrderProcessor $process )
	{
		parent::__construct();
		$this->repo 	= $repo;
		$this->process 	= $process;	
	}
	// --------------------------------------------------------------------
	
	
	public function getIndex ()
	{
		dd( 'pos' );
	}
}
