<?php
namespace Winkelhood\Account\Repositories\Usergroups;
use Winkelhood\Core\BaseRepositoryCached;
use Winkelhood\Core\Services\ExtendedCacheManager;
use Winkelhood\Account\Repositories\UsergroupRepository;

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
class RepositoryCache extends BaseRepositoryCached implements UsergroupRepository
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
		$this->cache 	  	= new ExtendedCacheManager( \App::make( 'cache' ), 'usergroup' );
		$this->repository 	= $repo;
		$this->prefix_key 	= 'usergroup';
	}
	// --------------------------------------------------------------------
	
}