<?php
namespace Winkelhood\Core;

/**
 * Repository Abstract Classes
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 23, 2014
 * @category Abstract
 * @package Winkel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
abstract class BaseRepository
{
	
	/**
	 * Stored model object
	 *
	 * @var Illuminate\Database\Eloquent\Model
	 * --------------------------------------------------------------------
	 */
	protected $model;
	// --------------------------------------------------------------------
	
	/**
	 * Make a new instance of the entity to query on
	 *
	 * @param array $with model relationship
	 * @return Illuminate\Database\Eloquent\Model
	 * --------------------------------------------------------------------
	 */
	public function make ( array $with = array() )
	{
		if ( count( $with ) > 0 ) {
			return $this->model->with( $with );
		}
	
		return $this->model;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Retrieve all entities
	 *
	 * @param array $with
	 * @return Illuminate\Database\Eloquent\Collection
	 * --------------------------------------------------------------------
	 */
	public function all ( array $with = array() )
	{
		$entity = $this->make( $with );
		
		return $entity->get();
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
		$entity = $this->make( $with );
	
		return $entity->find( $id );
	
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
		$entity = $this->make( $with );
	
		return $entity->where(  $key, '=', $value )->first();
	}
	// --------------------------------------------------------------------
	
	/**
	 * Search for many results by key and value
	 *
	 * @param string $key
	 * @param mixed $value
	 * @param array $with
	 * @return Illuminate\Database\Query\Builders
	 * --------------------------------------------------------------------
	 */
	public function getBy ( $key, $value, array $with = array() )
	{
		return $this->make( $with )
		->where( $key, '=', $value )
		->get();
	}
	// --------------------------------------------------------------------
	
	/**
	 * Create new entity repository
	 *
	 * @param array $data
	 * @return Illuminate\Database\Eloquent\Model
	 * --------------------------------------------------------------------
	 */
	public function create ( array $data )
	{
		return $this->model->create( $data );
	
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
		if( (integer) $id < 1 ) return false;
	
		$entity = $this->find( $id );
	
		if ( $entity ) {
				
			$updating = $entity->update( $data );
			return $entity;
		}
	
		return false;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Delete existing entity
	 *
	 * @param int $id
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function delete ( $id )
	{
		$entity = $this->find( $id );
	
		if ( $entity ) {
			return $entity->delete();
		}
	
		return false;
	}
	// --------------------------------------------------------------------
	
}