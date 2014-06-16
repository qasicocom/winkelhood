<?php
namespace Winkelhood\Account\Repositories\Users;
use Winkelhood\Core\BaseRepositoryCached;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Core\Services\ExtendedCacheManager;
use Winkelhood\Account\Repositories\UserRepository;

/**
 * User Repository cached
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 25, 2014
 * @category RepositoryCache
 * @package Winkelhood\Account
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
class RepositoryCache extends BaseRepositoryCached implements UserRepository, Crudable
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
		$this->repository 	  = $repo;
		$this->prefix_key 	  = 'user';
		$this->cache 	  	  = new ExtendedCacheManager( \App::make( 'cache' ), $this->prefix_key );
	}
	// --------------------------------------------------------------------
	
}