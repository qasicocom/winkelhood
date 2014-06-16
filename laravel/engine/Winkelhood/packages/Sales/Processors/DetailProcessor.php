<?php
namespace Winkelhood\Sales\Processors;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Sales\Validators\DetailValidator;
use Winkelhood\Sales\Repositories\DetailRepository;

/**
 * Detail Processor
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Jun 4, 2014 
 * @category Processors
 * @package  Winkelhood\Sales
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class DetailProcessor extends BaseProcessor
{
	
	/**
	 * Class Contructor
	 * 
	 * @param DetailRepository $repo
	 * @param DetailValidator $validator
	 * --------------------------------------------------------------------
	 */
	public function __construct( DetailRepository $repo, DetailValidator $validator )
	{
		$this->repository 	= $repo;
		$this->validate 	= $validator;
	} 
	// --------------------------------------------------------------------
	
}