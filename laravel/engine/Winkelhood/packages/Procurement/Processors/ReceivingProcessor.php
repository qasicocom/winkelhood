<?php
namespace Winkelhood\Procurement\Processors;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Procurement\Validators\ReceivingValidator;
use Winkelhood\Procurement\Repositories\ReceivingRepository;

/**
 * ReceivingProcessor
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Jun 4, 2014 
 * @category Processor
 * @package  Winkelhood\Procurement
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class ReceivingProcessor extends BaseProcessor
{
	
	/**
	 * Class Contructor
	 * 
	 * @param ReceivingRepository $repo
	 * @param ReceivingValidator $validator
	 * --------------------------------------------------------------------
	 */
	public function __construct( ReceivingRepository $repo, ReceivingValidator $validator )
	{
		$this->repository 	= $repo;
		$this->validate 	= $validator;
	}
	// --------------------------------------------------------------------
	
}