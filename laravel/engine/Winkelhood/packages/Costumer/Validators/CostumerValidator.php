<?php
namespace Winkelhood\Costumer\Validators;
use Winkelhood\Core\BaseValidator;

/**
 * Validator for costumer process
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 28, 2014
 * @category ValidatorRules
 * @package Winkelhood\Costumer
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class CostumerValidator extends BaseValidator
{
	
	/**
	 * Validating on create new costumer
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onCreate( array $input )
	{
		$rules = array(
			'company_id'     => 'required|exists:m_company,id',
			'name' 		     => 'required|string|min:3',
			'email' 		 => 'email|unique_with:retail_costumer,company_id',
			'kec_id' 		 => 'integer|exists:m_city_kec,id',
			'phone' 		 => 'string|min:4',
			'address' 		 => 'string|min:5',
		);
		
		return $this->make( $input, $rules );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validating on update process
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onUpdate ( array $input )
	{
		$rules = array(
			'id' 		     => 'required|integer',
			'company_id'     => 'required|integer|exists_with:retail_costumer,id',
			'name' 		     => 'required|string',
			'email' 		 => 'email|unique_except:retail_costumer,id,company_id',
			'kec_id' 		 => 'integer|exists:m_city_kec,id',
			'phone' 		 => 'string'
		);
		
		return $this->make( $input, $rules );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validating on delete process
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onDelete ( array $input )
	{
		$rules = array(
			'id' 		     => 'required|integer',
			'company_id'     => 'required|integer|exists_with:retail_costumer,id',
		);
		
		return $this->make( $input, $rules );
	}
	// --------------------------------------------------------------------
	
}