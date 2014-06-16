<?php
namespace Winkelhood\Company\Validators;
use Winkelhood\Core\BaseValidator;

/**
 * Validation rule for Company Process
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 4, 2014
 * @category Validation
 * @package Winkel
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class CompanyValidator extends BaseValidator
{
	
	/**
	 * Validate Process on create company
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onCreate ( array $input )
	{
		$rules = array (
			'industry_id' => 'integer|exists:m_industry,id',
			'name'		  => 'string|min:3',
			'slug' 		  => 'required|alpha_num|min:4|unique:m_company,slug',
			'address'  	  => 'string|min:5',
			'kec_id'  	  => 'integer|exists:m_city_kec,id',
			'phone' 	  => 'string|min:4',
		);
		
		return $this->make( $input, $rules );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validate process on updating company
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onUpdate ( array $input )
	{
		$rules = array (
			'id' 			=> 'required|integer',
			'user_id'       => 'required|integer|exists_with:m_company,id',
			'industry_id'	=> 'integer|exists:m_industry,id',
			'name'			=> 'required|string|min:3',
			'address'		=> 'string|min:5',
			'kec_id'		=> 'integer|exists:m_city_kec,id',
			'phone'			=> 'string|min:4',
			'logo'			=> 'image',
		);
		
		return $this->make( $input, $rules );
	}
	// --------------------------------------------------------------------
	
}