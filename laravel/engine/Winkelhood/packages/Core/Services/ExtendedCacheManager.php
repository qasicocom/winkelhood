<?php
namespace Winkelhood\Core\Services;
use Illuminate\Cache\CacheManager;

/**
 * Laravel Caching base class
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 23, 2014
 * @category Cache
 * @package Winkelhood
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
class ExtendedCacheManager
{
	/**
	 * Stored Illuminate\Cache\CacheManager object
	 * @var object
	 * --------------------------------------------------------------------
	 */
	protected $cache;
	// --------------------------------------------------------------------

	/**
	 * Initialing the cache tag
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $tag;
	// --------------------------------------------------------------------
	
	/**
	 * Initialing how long will be cached
	 * @var float
	 * --------------------------------------------------------------------
	 */
	protected $minutes;
	// --------------------------------------------------------------------
	
	/**
	 * Trigger will mengabaikan prosess caching
	 * @var unknown_type
	 * --------------------------------------------------------------------
	 */
	protected $noCache;
	// --------------------------------------------------------------------
	
	/**
	 * Construct
	 *
	 * @param Illuminate\Cache\CacheManager $cache
	 * @param string $tag
	 * @param integer $minutes
	 * --------------------------------------------------------------------
	 */
	public function __construct ( CacheManager $cache, $tag, $minutes = 60 )
	{
		$this->cache   = $cache;
		$this->tag     = $tag;
		$this->minutes = $minutes;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Get the item cached
	 *
	 * @param string $key
	 * @return mixed
	 * --------------------------------------------------------------------
	 */
	public function get ( $key )
	{
		return $this->cache
					->tags ( $this->tag )
					->get  ( $key );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Stored the data to cache
	 *
	 * @param string $key
	 * @param mixed $value
	 * @param integer $minutes
	 * @return mixed
	 * --------------------------------------------------------------------
	 */
	public function put ( $key, $value, $minutes = null )
	{
		if ( is_null( $minutes ) ) {
			$minutes = $this->minutes;
		}
		
		return $this->cache
					->tags ( $this->tag )
					->put  ( $key, $value, $minutes );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Checking status if on our tag have the cache item
	 * 
	 * @param string $key
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function has ( $key )
	{
		if( $this->noCache == true ) return false;
		
		return $this->cache
					->tags ( $this->tag )
					->has  ( $key );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Set the call without caching
	 * --------------------------------------------------------------------
	 */
	public function bypass ()
	{
		$this->noCache = true;
	}
	// --------------------------------------------------------------------
	
}