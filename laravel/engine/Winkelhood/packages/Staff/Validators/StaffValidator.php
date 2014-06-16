<?php
namespace Winkelhood\Staff\Validators;
use Winkelhood\Core\BaseValidator;

/**
 * Validation rule for staff
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 28, 2014
 * @category Validators
 * @package Winkelhood\Staff
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class StaffValidator extends BaseValidator
{
	
	/**
	 * Validation Creating Staff 
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onCreate ( array $input )
	{
		$rules = array (
			'company_id' => 'required|integer|exists:m_company,id',
			'outlet_id'  => 'required|integer|exists_on:retail_outlet,id,company_id',
			'usergroup'  => 'required|integer|exists:m_usergroups,id|not_in:0,1,2',
			'email'  	 => 'required|email|unique:m_users,email',
			'name'  	 => 'required|string',
			'password'   => 'required|alpha_num|min:6',
			'job_title'  => 'string'
		);
		
		return $this->make($input, $rules);
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validation Updating Staff
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onUpdate ( array $input )
	{
		$rules = array (
			'id'   		 => 'required|integer|exists:retail_outlet_staff,id',
			'user_id'    => 'required|integer|exists:m_users,id',
			'company_id' => 'required|integer|exists:m_company,id',
			'outlet_id'  => 'required|integer|exists_on:retail_outlet,id,company_id',
			'usergroup'  => 'required|integer|exists:m_usergroups,id|not_in:0,1,2',
			'email'  	 => 'required|email|unique_except:m_users,user_id,alias,id',
			'name'  	 => 'required|string',
			'password'   => 'alpha_num|min:6',
			'job_title'  => 'string',
		);
		
		return $this->make($input, $rules);
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validation Deleting Staff
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onDelete ( array $input )
	{
		$rules = array (
			'id' 		     => 'required|integer',
			'outlet_id'      => 'required|integer|exists_with:retail_outlet_staff,id',
		);
		
		return $this->make($input, $rules);
	}
	// --------------------------------------------------------------------
	
}