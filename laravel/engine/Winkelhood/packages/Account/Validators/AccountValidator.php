<?php
namespace Winkelhood\Account\Validators;
use Winkelhood\Core\BaseValidator;
use Illuminate\Validation\Factory;

/**
 * Account Validator Rules
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014
 * @category Validator
 * @package Winkelhood\Account
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
class AccountValidator extends BaseValidator
{
	
	/**
	 * Inject the Validator instance
	 * @param Illuminate\Validation\Factory $validator
	 * --------------------------------------------------------------------
	 */
	public function __construct ( Factory $validator )
	{
		parent::__construct( $validator );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validating input on signup process
	 * @param array $input
	 * --------------------------------------------------------------------
	 */
	public function onSignup ( array $input )
	{
		$rules = array(
			'name' 		=> 'required',
			'email' 	=> 'required|email|unique:m_users,email',
			'password' 	=> 'required|alpha_num|min:6',
			'slug'		=> 'required|alpha_num|min:4|unique:m_company,slug'
		);
		
		return $this->make( $input, $rules );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validating input on signin process
	 * @param array $input
	 * --------------------------------------------------------------------
	 */
	public function onSignin ( array $input )
	{
		$rules = array(
			'email'		=> 'required|email|exists:m_users,email',
			'password'  => 'required|alpha_num|min:6'
		);
		 
		return $this->make( $input, $rules );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validating input on lost password process
	 * @param array $input
	 * --------------------------------------------------------------------
	 */
	public function onLostPwd ( array $input )
	{
		$rules = array(
			'email' => 'required|email|exists:m_users,email'
		);
		
		return $this->make( $input, $rules );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validating input on signin process
	 * @param array $input
	 * --------------------------------------------------------------------
	 */
	public function onResetPwd ( array $input )
	{
		$rules = array(
			'email' 	=> 'required|email|exists:m_user_password_reminders,email',
			'password'  => 'required|alpha_num|min:6|Confirmed',
			'password_confirmation' => 'required|alpha_num'
		);
		
		return $this->make( $input, $rules );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validating input on update profile process
	 * @param array $input
	 * --------------------------------------------------------------------
	 */
	public function onUpdateProfile ( array $input )
	{
		$rules = array (
			'id' 		=> 'required|integer',
			'name'  	=> 'required|string',
			'email' 	=> 'required|email|exists_with:m_users,id',
			'job_title' => 'string',
			'password'  => 'alpha_num|min:6',
		);
		
		return $this->make( $input, $rules );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validating input on update avatar process
	 * @param array $input
	 * --------------------------------------------------------------------
	 */
	public function onUpdateAvatar ( array $input )
	{
		$rules = array (
			'id' 	   => 'required|integer|exists:m_users,id',
			'avatar'   => 'required|image'
		);
		
		return $this->make( $input, $rules );
	}
	// --------------------------------------------------------------------
	
}