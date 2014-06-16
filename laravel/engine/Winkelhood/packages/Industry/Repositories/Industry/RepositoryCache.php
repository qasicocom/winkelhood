<?php
namespace Winkelhood\Industry\Repositories\Industry;
use Winkelhood\Core\BaseRepositoryCached;
use Winkelhood\Industry\Repositories\IndustryRepository;
use Winkelhood\Core\Services\ExtendedCacheManager;

/**
 * Industry Repository Cache
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014 
 * @category RepositoryCache
 * @package  Winkelhood\Industry
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryCache extends BaseRepositoryCached implements IndustryRepository
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
		$this->prefix_key = 'industry';
		$this->cache 	  = new ExtendedCacheManager( \App::make( 'cache' ), $this->prefix_key );
	}
	// --------------------------------------------------------------------
	
	
}