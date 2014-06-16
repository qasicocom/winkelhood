<?php
namespace Winkelhood\Supplier\Validators;
use Winkelhood\Core\BaseValidator;

/**
 * Validator rule for Supplier process
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 28, 2014
 * @category Validator
 * @package Winkelhood\Supplier
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class SupplierValidator extends BaseValidator
{

	/**
	 * Validation on Creating new Supplier
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
			'email' 		 => 'email|unique_with:retail_supplier,company_id',
			'kec_id' 		 => 'integer|exists:m_city_kec,id',
			'phone' 		 => 'string|min:4',
			'address' 		 => 'string|min:5',
			'desc' 		     => 'string|min:5',
		);
		
		return $this->make($input, $rules);
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validation on updating supplier
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onUpdate( array $input )
	{
		$rules = array(
			'id' 		     => 'required|integer',
			'company_id'     => 'required|integer|exists_with:retail_supplier,id',
			'name' 		     => 'required|string',
			'email' 		 => 'email|unique_except:retail_supplier,id',
			'kec_id' 		 => 'integer|exists:m_city_kec,id',
			'phone' 		 => 'string',
			'address' 		 => 'string|min:5',
			'desc' 		     => 'string|min:5',
		);
		
		return $this->make($input, $rules);
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validation on delete supplier
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onDelete( array $input )
	{
		$rules = array(
			'id' 		     => 'required|integer',
			'company_id'     => 'required|integer|exists_with:retail_supplier,id',
		);
		
		return $this->make($input, $rules);
	}
	// --------------------------------------------------------------------
	
}