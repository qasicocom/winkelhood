<?php
namespace Winkelhood\Core\Interfaces;

/**
 * Crudable Interface
 *
 * Define Standard methode on class Repositories
 * for doing CRUD
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 23, 2014
 * @category Interface
 * @package Winkel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
interface Crudable
{

	/**
	 * Create new entity on repos
	 *
	 * @param array $input        	
	 * @return Illuminate\Database\Eloquent\Model 
	 * --------------------------------------------------------------------
	 */
	public function create ( array $input );
	// --------------------------------------------------------------------
	
	/**
	 * Find a single entity
	 *
	 * @param integer $id        	
	 * @param array $with        	
	 * @return Illuminate\Database\Eloquent\Model 
	 * --------------------------------------------------------------------
	 */
	public function find ( $id, array $with = array() );
	// --------------------------------------------------------------------
	
	/**
	 * Update an existing entity
	 *
	 * @param array $input        	
	 * @return Illuminate\Database\Eloquent\Model 
	 * --------------------------------------------------------------------
	 */
	public function update ( $id, array $input );
	// --------------------------------------------------------------------
	
	/**
	 * Delete an existing entity
	 *
	 * @param integer $id        	
	 * @return Illuminate\Database\Eloquent\Model 
	 * --------------------------------------------------------------------
	 */
	public function delete ( $id );
	// --------------------------------------------------------------------
}
