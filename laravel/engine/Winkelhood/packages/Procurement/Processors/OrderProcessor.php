<?php
namespace Winkelhood\Procurement\Processors;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Procurement\Validators\OrderValidator;
use Winkelhood\Procurement\Repositories\OrderRepository;

/**
 * OrderProcessor
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Jun 4, 2014 
 * @category Processors
 * @package  Winkelhood\Procurement
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class OrderProcessor extends BaseProcessor
{
	
	/**
	 * Class Contructor
	 * 
	 * @param OrderRepository $repo
	 * @param OrderValidator $validator
	 * --------------------------------------------------------------------
	 */
	public function __construct( OrderRepository $repo, OrderValidator $validator )
	{
		$this->repository 	= $repo;
		$this->validate 	= $validator;
	}
	// --------------------------------------------------------------------
	
}