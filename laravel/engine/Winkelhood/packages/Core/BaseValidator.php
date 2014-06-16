<?php
namespace Winkelhood\Core;
use Illuminate\Validation\Factory;

/**
 * Abstract class for validator
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 23, 2014
 * @category Abstract
 * @package Winkelhood\Core
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
abstract class BaseValidator
{
	/**
	 * Stored validator instance
	 * @var object Illuminate\Validation\Factory
	 * --------------------------------------------------------------------
	 */
	protected $validator;
	// --------------------------------------------------------------------
	
	/**
	 * Stored error messages
	 * @var object
	 */
	protected $errors;
	// --------------------------------------------------------------------
	
	/**
	 * Inject the Validator instance
	 * @param Illuminate\Validation\Factory $validator
	 * --------------------------------------------------------------------
	 */
	public function __construct ( Factory $validator )
	{
		$this->validator = $validator;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validate input with rules
	 * 
	 * @param array $input
	 * @param array $rules
	 */
	public function make( array $input, array $rules )
	{
		$validation = $this->validator->make( $input, $rules );
		
		$this->errors = $validation->errors();
		return ( $validation->fails() ) ? FALSE : TRUE;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Get all input that not passed validation
	 *
	 * @return Illuminate\Support\MessageBag
	 * --------------------------------------------------------------------
	 */
	public function getError()
	{
		return $this->errors;
	}
	// --------------------------------------------------------------------
}