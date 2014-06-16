<?php
namespace Winkelhood\Sales\Repositories\Detail;
use Winkelhood\Core\BaseRepositoryCached;
use Winkelhood\Sales\Repositories\DetailRepository;
use Winkelhood\Core\Services\ExtendedCacheManager;

/**
 * Repository Cache
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Jun 4, 2014 
 * @category RepositoryCache
 * @package  Winkelhood\Sales
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryCache extends BaseRepositoryCached implements DetailRepository
{

	/**
	 * Class Constructor
	 * 
	 * @param RepositoryEloquent $repo
	 * --------------------------------------------------------------------
	 */
	public function __construct ( RepositoryEloquent $repo )
	{
		$this->repository 	= $repo;
		$this->prefix_key 	= 'sales.detail';
		$this->cache 		= new ExtendedCacheManager( \App::make( "cache" ), $this->prefix_key );
	}
	// --------------------------------------------------------------------
	
}