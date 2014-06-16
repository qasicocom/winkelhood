<?php
namespace Winkelhood\Costumer\Repositories\Costumer;
use Winkelhood\Core\BaseRepositoryCached;
use Winkelhood\Costumer\Repositories\CostumerRepository;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Core\Services\ExtendedCacheManager;

/**
 * Cache Costumer Repository
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 27, 2014 
 * @category RepositoryCache
 * @package Winkelhood\Costumer
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryCache extends BaseRepositoryCached implements CostumerRepository, Crudable
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
		$this->prefix_key = 'costumer';
		$this->cache 	  = new ExtendedCacheManager( \App::make( 'cache' ), $this->prefix_key );
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkel\Repositories\Costumer\CostumerRepository::datatable()
	 * --------------------------------------------------------------------
	 */
	public function datatable( $company_id, $filter = false, $access = false )
	{
		return $this->repository->datatable( $company_id, $filter, $access );
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkel\Repositories\Costumer\CostumerRepository::count()
	 * --------------------------------------------------------------------
	 */
	public function count( $company_id )
	{
		return $this->repository->count( $company_id );
	}
	// --------------------------------------------------------------------
	
}