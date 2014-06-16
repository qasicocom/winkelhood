<?php
namespace Winkelhood\Procurement\Processors;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Procurement\Validators\DetailValidator;
use Winkelhood\Procurement\Repositories\DetailRepository;

/**
 * Detail Processor
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Jun 4, 2014 
 * @category Processor
 * @package  Winkelhood\Procurement
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class DetailProcessor extends BaseProcessor
{
	
	/**
	 * Class Constructor
	 * 
	 * @param DetailRepository $repo
	 * @param DetailValidator $validator
	 */
	public function __construct( DetailRepository $repo, DetailValidator $validator )
	{
		$this->repository = $repo;
		$this->validate   = $validator;
	}
	// --------------------------------------------------------------------
	
}