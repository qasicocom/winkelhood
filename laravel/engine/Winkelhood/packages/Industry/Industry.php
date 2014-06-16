<?php
namespace Winkelhood\Industry;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Industry\Repositories\IndustryRepository;

/**
 * Industry Package Layers
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014 
 * @category PackageLayers
 * @package  Winkelhood\Industry
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class Industry extends BaseProcessor
{
	/**
	 * Class Contructor
	 * 
	 * @param IndustryRepository $repo
	 * --------------------------------------------------------------------
	 */
	public function __construct( IndustryRepository $repo )
	{
		$this->repository = $repo;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Get all list industry
	 * 
	 * --------------------------------------------------------------------
	 */
	public function all ()
	{
		return $this->repository->all ();
	}
	// --------------------------------------------------------------------
	
}