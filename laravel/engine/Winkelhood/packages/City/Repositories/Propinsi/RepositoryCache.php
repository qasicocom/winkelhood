<?php
namespace Winkelhood\City\Repositories\Propinsi;
use Winkelhood\Core\BaseRepositoryCached;
use Winkelhood\City\Repositories\PropinsiRepository;
use Winkelhood\Core\Services\ExtendedCacheManager;

/**
 * Propinsi Repository Cache
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014 
 * @category RepositoryCache
 * @package Winkelhood\City
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryCache extends BaseRepositoryCached implements PropinsiRepository
{
	
	/**
	 * Construct
	 *
	 * @param Repository $repo
	 * @param CacheInterface $interfaces
	 * --------------------------------------------------------------------
	 */
	public function __construct( RepositoryEloquent $repo )
	{
		$this->repository = $repo;
		$this->prefix_key = 'propinsi';
		$this->cache 	  = new ExtendedCacheManager( \App::make( 'cache' ), $this->prefix_key );
	}
	// --------------------------------------------------------------------
	
	
}