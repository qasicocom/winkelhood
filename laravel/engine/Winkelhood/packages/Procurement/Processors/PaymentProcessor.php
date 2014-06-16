<?php
namespace Winkelhood\Procurement\Processors;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Procurement\Validators\PaymentValidator;
use Winkelhood\Procurement\Repositories\PaymentRepository;

/**
 * PaymentProcessor
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Jun 4, 2014 
 * @category Processor
 * @package  Winkelhood\Procurement
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class PaymentProcessor extends BaseProcessor
{
	
	/**
	 * Class Contructor
	 * 
	 * @param PaymentRepository $repo
	 * @param PaymentValidator $validator
	 * --------------------------------------------------------------------
	 */
	public function __construct( PaymentRepository $repo, PaymentValidator $validator )
	{
		$this->repository = $repo;
		$this->validate   = $validator;
	}
	// --------------------------------------------------------------------
	
}