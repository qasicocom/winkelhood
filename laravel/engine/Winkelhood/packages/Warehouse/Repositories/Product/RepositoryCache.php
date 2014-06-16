<?php
namespace Winkelhood\Warehouse\Repositories\Product;
use Winkelhood\Core\BaseRepositoryCached;
use Winkelhood\Core\Services\ExtendedCacheManager;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Warehouse\Repositories\ProductRepository;

/**
 * Cache Product Repository
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 3, 2014 
 * @category RepositoryCache
 * @package Winkelhood\Warehouse
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryCache extends BaseRepositoryCached implements ProductRepository, Crudable
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
		$this->prefix_key = 'product';
		$this->cache 	  = new ExtendedCacheManager( \App::make( 'Cache' ), $this->prefix_key );
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkel\Repositories\Product\ProductRepository::datatable()
	 * --------------------------------------------------------------------
	 */
	public function datatable( $company_id, $filter = false, $access = false )
	{
		return $this->repository->datatable( $company_id, $filter, $access );
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkel\Repositories\Product\ProductRepository::count()
	 * --------------------------------------------------------------------
	 */
	public function count(  $company_id, $cond = null )
	{
		return $this->repository->count( $company_id, $cond );
	}
	// --------------------------------------------------------------------
	
}