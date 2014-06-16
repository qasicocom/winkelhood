<?php
namespace Winkelhood\Core\Services;

use Illuminate\Validation\Validator;

/**
 * Extended Validator
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 28, 2014 
 * @category ExtendedClass
 * @package Winkel
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class ExtendedValidator extends Validator
{
	
	/**
	 * Validate that an attribute is an string.
	 *
	 * @param  string  $attribute
	 * @param  mixed   $value
	 * @return bool
	 * --------------------------------------------------------------------
	 */
	public function validateString ( $attribute, $value, $parameters )
	{
		return preg_match( '!^[\w @.-]*$!', $value );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validate that attribute is exist with extra condition
	 * ( where id = 1 and other = 2 )
	 * 
	 * usage: exists_with:retail_costumer,id 
	 * the query will be count(*) from retail_costumer where attribute = value and id = inputId
	 * @param string $attribute
	 * @param mixed $value
	 * @param mixed $parameters
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function validateExistsWith ( $attribute, $value, $parameters )
	{
		$this->requireParameterCount( 1, $parameters, 'exist_with' );
		
		// @see Illuminate\Validation\PresenceVerifierInterface
		$verifier   = $this->getPresenceVerifier();
		
		$table      = $parameters [ 0 ];
		
		$extra_cond = array();
		
		if( isset( $parameters [ 2 ] ) )
		{
			$extra_cond [ $parameters [ 1 ] ] = $this->getValue( $parameters [ 2 ] );
		}
		else {
			$extra_cond [ $parameters [ 1 ] ] = $this->getValue( $parameters [ 1 ] );
		}
		
		// @see Illuminate\Validation\PresenceVerifierInterface
		$exist = $verifier->getCount( $table, $attribute, $value, null, null, $extra_cond );
		
		return ( $exist < 1 ) ? false : true;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validate exist on
	 * 
	 * @param string $attribute
	 * @param mixed $value
	 * @param mixed $parameters 0 = table, 1 = aliases attribute, 2 = extra field
	 * --------------------------------------------------------------------
	 */
	public function validateExistsOn ( $attribute, $value, $parameters )
	{
		$this->requireParameterCount( 1, $parameters, 'exist_on' );
		
		// @see Illuminate\Validation\PresenceVerifierInterface
		$verifier   = $this->getPresenceVerifier();
		
		$table      = $parameters [ 0 ];
		
		$extra_cond = array();
		
		if( isset( $parameters [ 2 ] ) )
		{
			$attribute  = $parameters [ 1 ];
			$extra_cond [ $parameters [ 2 ] ] = $this->getValue( $parameters [ 2 ] );
		} 
		else {
			$extra_cond [ $parameters [ 1 ] ] = $this->getValue( $parameters [ 1 ] );
		}
		
		// @see Illuminate\Validation\PresenceVerifierInterface
		$exist = $verifier->getCount( $table, $attribute, $value, null, null, $extra_cond );
		
		return ( $exist < 1 ) ? false : true;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validate that attribue is not exist with extra condition
	 * 
	 * @param string $attribute
	 * @param mixed $value
	 * @param mixed $parameters
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function validateUniqueWith ( $attribute, $value, $parameters )
	{
		$this->requireParameterCount( 2, $parameters, 'unique_with' );
		
		// @see Illuminate\Validation\PresenceVerifierInterface
		$verifier   = $this->getPresenceVerifier();
		
		$table      = $parameters[ 0 ];
		
		$extraField = $parameters [ 1 ];
		$extraValue = $this->getValue( $parameters [ 1 ] );
		
		if( ! $extraValue ) return false;
		
		$exist = $verifier->getCount( $table, $attribute, $value, null, null, array( $extraField => $extraValue ) );
		
		return ( $exist < 1 ) ? true : false;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validate that attribute is not exist with exception condition
	 * 
	 * @param string $attribute
	 * @param mixed  $value
	 * @param mixed  $parameters
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function validateUniqueExcept( $attribute, $value, $parameters )
	{
		$this->requireParameterCount( 1, $parameters, 'unique_except' );
		
		// @see Illuminate\Validation\PresenceVerifierInterface
		$verifier   = $this->getPresenceVerifier();
		
		$table      = $parameters[ 0 ];
		
		$id_field   = $parameters [ 1 ];
		$id_value   = $this->getValue( $parameters [ 1 ] );
		
		if( ! $id_value ) return false;
		
		$extra_cond = array();
		
		if( isset( $parameters [ 2 ] ) )
		{
			if( $parameters [ 2 ] == 'alias' && isset(  $parameters [ 3 ] ) )
			{
				$id_field   = $parameters [ 3 ];
			}
			else {
				$extra_cond [ $parameters [ 2 ] ] = $this->getValue( $parameters [ 2 ] );
			}
		}
		
		$exist = $verifier->getCount( $table, $attribute, $value, $id_value, $id_field, $extra_cond );
		
		return ( $exist < 1 ) ? true : false;
	}
	// --------------------------------------------------------------------
	
	public function validateUniqueJoin ( $attribute, $value, $parameters )
	{
		dd( $parameters );
	}
	
	
}