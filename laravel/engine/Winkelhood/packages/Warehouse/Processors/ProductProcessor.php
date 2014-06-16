<?php
namespace Winkelhood\Warehouse\Processors;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Warehouse\Validators\ProductValidator;
use Winkelhood\Warehouse\Repositories\ProductRepository;

/**
 * Product Processors
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 18, 2014 
 * @category Procesors
 * @package  Winkelhood\Warehouse
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class ProductProcessor extends BaseProcessor
{
	/**
	 * Class Contructor
	 *
	 * @param ProductRepository $product
	 * @param OutletRepository $outlet
	 * --------------------------------------------------------------------
	 */
	public function __construct( ProductRepository $repo, ProductValidator $validator )
	{
		$this->repository 	= $repo;
		$this->validate 	= $validator;
	}
	// --------------------------------------------------------------------
	
}