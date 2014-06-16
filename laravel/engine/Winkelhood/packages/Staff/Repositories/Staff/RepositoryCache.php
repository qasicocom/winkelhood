<?php
namespace Winkelhood\Staff\Repositories\Staff;
use Winkelhood\Core\BaseRepositoryCached;
use Winkelhood\Staff\Repositories\StaffRepository;
use Winkelhood\Core\Services\ExtendedCacheManager;

/**
 * Cache Staff Repository
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 8, 2014 
 * @category CacheRepository
 * @package Winkelhood\Staff
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryCache extends BaseRepositoryCached implements StaffRepository
{
	
	/**
	 * Construct
	 * 
	 * @param RepositoryEloquent $repo
	 * --------------------------------------------------------------------
	 */
	public function __construct( RepositoryEloquent $repo )
	{
		$this->repository = $repo;
		$this->prefix_key = 'staff';
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
	 * @see \Winkelhood\Staff\Repositories\StaffRepository::count()
	 * --------------------------------------------------------------------
	 */
	public function count ( $company_id )
	{
		return $this->repository->count ( $company_id );
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkelhood\Staff\Repositories\StaffRepository::outlet()
	 * --------------------------------------------------------------------
	 */
	public function outlet ( $user_id )
	{
		$key = $this->makeKey( 'outlet.'.$user_id );
		
		if ( $this->cache->has( $key ) )
		{
			return $this->cache->get( $key );
		}
		
		$result = $this->repository->outlet( $user_id );
		$this->cache->put( $key, $result );
		
		return $result;
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkelhood\Staff\Repositories\StaffRepository::company()
	 * --------------------------------------------------------------------
	 */
	public function company ( $user_id )
	{
		$key = $this->makeKey( 'company.'.$user_id );
		
		if ( $this->cache->has( $key ) )
		{
			return $this->cache->get( $key );
		}
		
		$result = $this->repository->company( $user_id );
		$this->cache->put( $key, $result );
		
		return $result;
	}
	// --------------------------------------------------------------------
	
}