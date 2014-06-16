<?php 
namespace Winkelhood\Outlet;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Outlet\Repositories\OutletRepository;

/**
 * Outlet Processors
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 3, 2014
 * @category PackageLayers
 * @package Winkelhood\Outlet
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class Outlet extends BaseProcessor
{
	
	public function __construct( OutletRepository $repo )
	{
		$this->repository = $repo;
	}
	
}

