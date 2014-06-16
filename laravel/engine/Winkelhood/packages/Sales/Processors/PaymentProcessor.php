<?php
namespace Winkelhood\Sales\Processors;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Sales\Validators\PaymentValidator;
use Winkelhood\Sales\Repositories\PaymentRepository;

/**
 * PaymentProcessor
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Jun 4, 2014 
 * @category Processors
 * @package  Winkelhood\Sales
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class PaymentProcessor extends BaseProcessor
{
	
	/**
	 * Class Constructor
	 * 
	 * @param PaymentRepository $repo
	 * @param PaymentValidator $validator
	 * --------------------------------------------------------------------
	 */
	public function __construct ( PaymentRepository $repo, PaymentValidator $validator )
	{
		$this->repository 	= $repo;
		$this->validate 	= $validator;
	}
	// --------------------------------------------------------------------
	
}