<?php
namespace Winkelhood\Warehouse\Repositories\Variant;
use Winkelhood\Core\BaseRepositoryCached;
use Winkelhood\Core\Services\ExtendedCacheManager;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Warehouse\Repositories\VariantRepository;

/**
 * Cache Product Variant
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 3, 2014 
 * @category RepositoryCache
 * @package Winkelhood\Warehouse
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryCache extends BaseRepositoryCached implements VariantRepository, Crudable
{
	
	/**
	 * Construct
	 *
	 * @param CostumerRepository $repo
	 * @param CacheInterface $cache
	 * --------------------------------------------------------------------
	 */
	public function __construct ( RepositoryEloquent $repo )
	{
		$this->repository = $repo;
		$this->prefix_key = 'product.variant';
		$this->cache 	  = new ExtendedCacheManager( \App::make( 'Cache' ), $this->prefix_key );
	}
	// --------------------------------------------------------------------
	
}