<?php
namespace Winkelhood\Warehouse\Processors;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Warehouse\Validators\VariantValidator;
use Winkelhood\Warehouse\Repositories\VariantRepository;

/**
 * Product Variant Processors
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 18, 2014
 * @category Procesors
 * @package  Winkelhood\Warehouse
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class VariantProcessor extends BaseProcessor
{
	
	/**
	 * Class Contructor
	 *
	 * @param VariantRepository $variant
	 * @param ProductRepository $product
	 * --------------------------------------------------------------------
	 */
	public function __construct( VariantRepository $repo, VariantValidator $validator )
	{
		$this->repository 	= $repo;
		$this->validate 	= $validator;
	}
	// --------------------------------------------------------------------
	
}