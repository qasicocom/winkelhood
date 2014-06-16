<?php
namespace Winkelhood\Warehouse\Validators;
use Winkelhood\Core\BaseValidator;

/**
 * Validation variant product
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 4, 2014
 * @category ValidatorRules
 * @package Winkelhood\Warehouse
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class VariantValidator extends BaseValidator
{
	
	/**
	 * Validation on create variant
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onCreate ( array $input )
	{
		$rules = array(
			'product_id' 		=> 'required|integer|exists_on:retail_product,id,outlet_id',
			'outlet_id' 	    => 'required|integer|exist:retail_outlet,id',
			'code' 				=> 'required|string|unique_with:retail_product_variant,product_id',
			'name' 				=> 'string',
			'base_prices' 		=> 'numeric',
			'selling_prices' 	=> 'numeric',
			'stock' 			=> 'integer',
			'nogood' 			=> 'integer',
		);
		
		return $this->make($input, $rules);
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validation on updating variant
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onUpdate ( array $input )
	{
		$rules = array(
			'id' 				=> 'required|integer|exist_with:retail_product_variant,product_id',
			'product_id' 		=> 'required|integer|exist:retail_product,id',
			'outlet_id' 	    => 'required|integer|exist_with:retail_product,product_id',
			'code' 				=> 'required|string|unique_except:retail_product_variant,id,product_id',
			'name' 				=> 'string',
			'base_prices' 		=> 'string',
			'selling_prices' 	=> 'string',
			'stock' 			=> 'integer',
			'nogood' 			=> 'integer',
		);
		
		return $this->make($input, $rules);
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validation in deleting variant
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onDelete ( array $input )
	{
		$rules = array(
			'id' 				=> 'required|integer|exist:retail_product_variant,id',
			'outlet_id' 	    => 'required|integer|exist:retail_outlet,id'
		);
		
		return $this->make($input, $rules);
	}
	// --------------------------------------------------------------------
	
}