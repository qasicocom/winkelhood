<?php
namespace Winkelhood\Outlet\Repositories\Outlet;
use Winkelhood\Core\BaseRepositoryCached;
use Winkelhood\Outlet\Repositories\OutletRepository;
use Winkelhood\Core\Services\ExtendedCacheManager;

/**
 * Cache Outlet Repository
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 3, 2014 
 * @category RepositoryCache
 * @package Winkelhood\Outlet
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryCache extends BaseRepositoryCached implements OutletRepository
{
	
	/**
	 * Construct
	 *
	 * @param CostumerRepository $repo
	 * @param CacheInterface $cache
	 * --------------------------------------------------------------------
	 */
	public function __construct ( RepositoryEloquent $repo  )
	{
		$this->repository = $repo;
		$this->prefix_key = 'outlet';
		$this->cache 	  = new ExtendedCacheManager( \App::make('cache'), $this->prefix_key );
	}
	// --------------------------------------------------------------------
	
}