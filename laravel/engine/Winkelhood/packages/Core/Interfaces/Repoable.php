<?php
namespace Winkelhood\Core\Interfaces;

/**
 * Repository Interface
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 23, 2014
 * @category Interface
 * @package Winkel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
interface Repoable
{

	/**
	 * Retrieve all entities
	 *
	 * @param array $with        	
	 * @return Illuminate\Database\Eloquent\Collection
	 * --------------------------------------------------------------------
	 */
	public function all ( array $with = array() );
	// --------------------------------------------------------------------
	
	/**
	 * Search by key and value
	 *
	 * @param string $key        	
	 * @param mixed $value        	
	 * @param array $with        	
	 * @return Illuminate\Database\Eloquent\Collection
	 * --------------------------------------------------------------------
	 */
	public function getBy ( $key, $value, array $with = array() );
	// --------------------------------------------------------------------
	
	/**
	 * Search single entity
	 * 
	 * @param string $key
	 * @param mixed $value
	 * @param array $with
	 * @return Illuminate\Database\Eloquent\Collection
	 */
	public function findBy ( $key, $value, array $with = array() );
	// --------------------------------------------------------------------
	
}
