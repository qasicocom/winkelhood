<?php
namespace Winkelhood\City\Repositories\Kabupaten;
use Winkelhood\Core\BaseRepositoryCached;
use Winkelhood\City\Repositories\KabupatenRepository;
use Winkelhood\Core\Services\ExtendedCacheManager;

/**
 * Kabupaten Repository Cache
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014
 * @category RepositoryCache
 * @package Winkelhood\City
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
class RepositoryCache extends BaseRepositoryCached implements KabupatenRepository
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
		$this->prefix_key = 'kabupaten';
		$this->cache 	  = new ExtendedCacheManager( \App::make( 'cache' ), $this->prefix_key );
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkelhood\City\Repositories\Kabupaten\KabupatenRepository::byPropinsi()
	 * --------------------------------------------------------------------
	 */
	public function byPropinsi ( $propinsi_id = null )
	{
		if( $propinsi_id == null ) return false;
		
		$key = $this->makeKey( 'byPropinsi.'.$propinsi_id );
		
		if ( $this->cache->has( $key ) )
		{
			return $this->cache->get( $key );
		}
		
		$result = $this->repository->byPropinsi( $propinsi_id );
		$this->cache->put( $key, $result );
		return $result;
	}
	// --------------------------------------------------------------------
	
}