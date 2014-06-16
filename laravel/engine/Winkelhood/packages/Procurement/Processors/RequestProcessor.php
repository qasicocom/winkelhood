<?php
namespace Winkelhood\Procurement\Processors;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Procurement\Validators\RequestValidator;
use Winkelhood\Procurement\Repositories\RequestRepository;

/**
 * RequestProcessor
 * 
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Jun 4, 2014 
 * @category Processors
 * @package  Winkelhood\Procurement
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RequestProcessor extends BaseProcessor
{
	
	/**
	 * Class Constructor
	 * 
	 * @param RequestRepository $repo
	 * @param RequestValidator $validator
	 * --------------------------------------------------------------------
	 */
	public function __construct ( RequestRepository $repo, RequestValidator $validator )
	{
		$this->repository 	= $repo;
		$this->validate 	= $validator;
	}
	// --------------------------------------------------------------------
	
}