<?php
namespace Winkelhood\Procurement\Repositories\Receiving;
use Winkelhood\Core\BaseRepositoryCached;
use Winkelhood\Procurement\Repositories\ReceivingRepository;
use Winkelhood\Core\Services\ExtendedCacheManager;

/**
 * Cache Receiving Repository
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 3, 2014 
 * @category RepositoryCache
 * @package Winkelhood\Procurement
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryCache extends BaseRepositoryCached implements ReceivingRepository
{
	
	/**
	 * Construct
	 *
	 * @param RepositoryEloquent $repo
	 * --------------------------------------------------------------------
	 */
	public function __construct ( RepositoryEloquent $repo )
	{
		$this->repository = $repo;
		$this->prefix_key = 'purchased.receiving';
		$this->cache 	  = new ExtendedCacheManager( \App::make( 'cache' ), $this->prefix_key );
	}
	// --------------------------------------------------------------------
	
}