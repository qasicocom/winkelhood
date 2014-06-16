<?php
namespace Winkelhood\Core;

/**
 * Base Abstract Cache decorator for Repos
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 25, 2014
 * @category class_container
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
abstract class BaseRepositoryCached
{
	
	/**
	 * Stored the repository eloquent object
	 * 
	 * @var Object Repository
	 * --------------------------------------------------------------------
	 */
	protected $repository;
	// --------------------------------------------------------------------
	
	/**
	 * Stored the cache manager object
	 * 
	 * @var Object Winkelhood\Core\Services\ExtendedCacheManager
	 * --------------------------------------------------------------------
	 */
	protected $cache;
	// --------------------------------------------------------------------
	
	/**
	 * Prefix used on key cache
	 * 
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $prefix_key = null;
	// --------------------------------------------------------------------
	
	/**
	 * Generate unique key for array cache
	 *
	 * @param str $string
	 * @return string
	 * --------------------------------------------------------------------
	 */
	public function makeKey ( $string )
	{
		return md5( $this->prefix_key. '.' .$string );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Set the call without caching
	 *
	 * @return Winkelhood\Core\BaseRepositoryCached
	 * --------------------------------------------------------------------
	 */
	public function noCache ()
	{
		$this->cache->bypass();
		return $this;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Get all data repository
	 * and cache the result with unique keys.
	 *
	 * @param array $with
	 * @return Illuminate\Database\Eloquent\Model
	 * --------------------------------------------------------------------
	 */
	public function all ( array $with = array() )
	{
		$key = $this->makeKey( 'all' );
		
		if ( $this->cache->has( $key ) )
		{
			return $this->cache->get( $key );
		}
		
		$result = $this->repository->all( $with );
		
		$this->cache->put( $key, $result );
		
		return $result;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Search by key and value
	 *
	 * @param string $key
	 * @param mixed $value
	 * @param array $with
	 * @return Illuminate\Database\Eloquent\Model
	 * --------------------------------------------------------------------
	 */
	public function getBy ( $key, $value, array $with = array() )
	{
		return $this->repository->getBy( $key, $value, $with );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Find a single entity
	 *
	 * @param int $id
	 * @param array $with
	 * @return Illuminate\Database\Eloquent\Model
	 * --------------------------------------------------------------------
	 */
	public function find ( $id, array $with = array() )
	{
		$key = $this->makeKey( 'id.'.$id );
	
		if ( $this->cache->has( $key ) )
		{
			return $this->cache->get( $key );
		}
	
		$result = $this->repository->find( $id, $with );
		$this->cache->put( $key, $result );
	
		return $result;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Find a single entity with condition
	 *
	 * @param int $id
	 * @param array $with
	 * @return Illuminate\Database\Eloquent\Model
	 * --------------------------------------------------------------------
	 */
	public function findBy ( $key, $value, array $with = array() )
	{
		return $this->repository->findBy( $key, $value, $with );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Create new entity
	 *
	 * @param array $data
	 * @return Illuminate\Database\Eloquent\Model
	 * --------------------------------------------------------------------
	 */
	public function create ( array $data )
	{
		return $this->repository->create( $data );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Update existing entity
	 *
	 * @param array $data
	 * @return Illuminate\Database\Eloquent\Model
	 * --------------------------------------------------------------------
	 */
	public function update ( $id, array $data )
	{
		return $this->repository->update( $id, $data );
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Delete an existing entity
	 *
	 * @param int $id
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function delete ( $id )
	{
		return $this->repository->delete( $id );
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Accessing repo eloquent class
	 *
	 * @return Repository
	 * --------------------------------------------------------------------
	 */
	public function eloquent()
	{
		return $this->repository;
	}
	// --------------------------------------------------------------------
}