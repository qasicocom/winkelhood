<?php
namespace Winkelhood\Sales\Processors;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Sales\Validators\ShippingValidator;
use Winkelhood\Sales\Repositories\ShippingRepository;

/**
 * ShippingProcessor
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Jun 4, 2014 
 * @category Processors
 * @package  Winkelhood\Sales
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class ShippingProcessor extends BaseProcessor
{

	/**
	 * Class Constuctor
	 * 
	 * @param ShippingRepository $repo
	 * @param ShippingValidator $validator
	 * --------------------------------------------------------------------
	 */
	public function __construct( ShippingRepository $repo, ShippingValidator $validator )
	{
		$this->repository 	= $repo;
		$this->validate 	= $validator;
	}
	// --------------------------------------------------------------------

}
