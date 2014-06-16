<?php
namespace Winkelhood\Sales\Processors;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Sales\Validators\ReturningValidator;
use Winkelhood\Sales\Repositories\ReturningRepository;

/**
 * ReturningProcessor
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Jun 4, 2014 
 * @category Processorss
 * @package  Winkelhood\Sales
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class ReturningProcessor extends BaseProcessor
{
	
	/**
	 * Class Contructor
	 * 
	 * @param ReturningRepository $repo
	 * @param ReturningValidator $validator
	 * --------------------------------------------------------------------
	 */
	public function __construct( ReturningRepository $repo, ReturningValidator $validator )
	{
		$this->repository 	= $repo;
		$this->validate 	= $validator;
	}
	// --------------------------------------------------------------------
	
}