<?php
namespace Winkelhood\City\Repositories\Kecamatan;
use Winkelhood\Core\BaseRepositoryCached;
use Winkelhood\City\Repositories\KecamatanRepository;
use Winkelhood\Core\Services\ExtendedCacheManager;

/**
 * Kecamatan Repository Cache
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014
 * @category RepositoryCache
 * @package Winkelhood\City
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
class RepositoryCache extends BaseRepositoryCached implements KecamatanRepository
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
		$this->prefix_key = 'kecamatan';
		$this->cache 	  = new ExtendedCacheManager( \App::make( 'cache' ), $this->prefix_key );
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkelhood\City\Repositories\Kecamatan\KecamatanRepository::related()
	 * --------------------------------------------------------------------
	 */
	public function related( $kec_id )
	{
		$key = $this->makeKey( 'related.'. $kec_id );
		
		if ( $this->cache->has( $key ) )
		{
			return $this->cache->get( $key );
		}
		
		$result = $this->repository->related( $kec_id );
		$this->cache->put( $key, $result );
		
		return $result;
	} 
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkelhood\City\Repositories\Kecamatan\KecamatanRepository::byKabupaten()
	 * --------------------------------------------------------------------
	 */
	public function byKabupaten ( $kab_id )
	{
		if( $kab_id == null ) return false;
		
		$key = $this->makeKey( 'byKabupaten.'. $kab_id );
		
		if ( $this->cache->has( $key ) )
		{
			return $this->cache->get( $key );
		}
		
		$result = $this->repository->byKabupaten( $kab_id );
		$this->cache->put( $key, $result );
		
		return $result;
	}
	// --------------------------------------------------------------------
	
}