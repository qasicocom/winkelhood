<?php
namespace Winkelhood\Core;
use Illuminate\Support\MessageBag;

/**
 * Processor Abstract
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 24, 2014
 * @category Abstract
 * @package Winkel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
abstract class BaseProcessor
{
	
	/**
	 * Stored the repository object
	 *
	 * @var Object Repository
	 * --------------------------------------------------------------------
	 */
	protected $repository;
	// --------------------------------------------------------------------
	
	/**
	 * Protected validators class injected
	 *
	 * @var array
	 * --------------------------------------------------------------------
	 */
	protected $validate;
	// --------------------------------------------------------------------
	
	/**
	 * Filtering all input and resulting valid & accepted input
	 *
	 * @param array $key_accepted
	 * @return array
	 * --------------------------------------------------------------------
	 */
	public function filterInput ( $key_accepted = array() )
	{
	
		$validInput 	= array_only  ( \Input::all(), $key_accepted );
	
		// set null if no value
		// this needed to clean '' on integer value
		foreach( $validInput as $input => $value )
		{
			if( $value != '' ){
				$validInput [ $input ] = $value;
			}
			else {
				$validInput [ $input ] = null;
			}
		}
	
		if( isset( $validInput [ 'id_e' ] ) && $validInput [ 'id_e' ] != null )
		{
			$validInput [ 'id' ] = decrypt( $validInput [ 'id_e' ] );
			unset( $validInput [ 'id_e' ] );
		}
	
		return $validInput;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Respons of the process
	 *
	 * @param string $status error | success
	 * @param string $message
	 * @param object $data
	 * @param string $code http response code
	 * --------------------------------------------------------------------
	 */
	public function response ( $status, $message = null, $data = null, $code = "200" )
	{
		$response [ 'status' ]   = $status;
		$response [ 'code' ]     = $code;
		$response [ 'message' ]  = $message;
		$response [ 'data' ]     = $data;
	
		$errorBags = $this->validate->getError();
		if( ( $status == 'error' ) && ( $errorBags != null ) ) {
			$response [ 'data' ]     = $errorBags;
		}
	
		return (object) $response;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Auto call RepositoryEloquent through RepositoryCache
	 * @return mixed
	 * --------------------------------------------------------------------
	 */
	public function __call ( $method, $arguments )
	{
		if( isset( $this->repository ) )
		{
			// try the cache repo
			if ( method_exists( $this->repository, $method ) ) {
				return call_user_func_array( array( $this->repository, $method ), $arguments );
			}
				
			// try eloquent repo
			else if ( method_exists( $this->repository->eloquent(), $method ) ) {
				return call_user_func_array( array( $this->repository->eloquent(), $method ), $arguments );
			}
				
		}
	
		return \App::abort(403, 'Methode ' . $method . ' not exist.');
	}
	// --------------------------------------------------------------------
	
}