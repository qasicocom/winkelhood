<?php
namespace Winkelhood\Warehouse\Validators;
use Winkelhood\Core\BaseValidator;

/**
 * Product Validator
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 6, 2014
 * @category Validator
 * @package Winkelhood\Warehouse
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class ProductValidator extends BaseValidator
{
	
	/**
	 * Validation on creating product
	 * 
	 * @param array $input
	 * @return boolean
	 * cl
	 */
	public function onCreate ( array $input )
	{
		$rules = array (
			'outlet_id' 	=> 'required|integer|exists:retail_outlet,id',
			'category_id'	=> 'required|integer|exists_with:retail_product_category,id,outlet_id',
			'supplier_id' 	=> 'required|integer|exists:retail_supplier,id',
			'name' 			=> 'required|string',
			'descriptions'	=> 'string',
			'warehouse'		=> 'in:0,1',
			'image'			=> 'image',
			'status'		=> 'in:0,1',
			'have_variant'	=> 'in:0,1'
		);
		
		return $this->make($input, $rules);
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validation on updating product
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onUpdate ( array $input )
	{
		$rules = array (
			'id'		 	=> 'required|integer|exists_with:retail_product,id,outlet_id',
			'outlet_id' 	=> 'required|integer|exists:retail_outlet,id',
			'category_id'	=> 'required|integer|exists_with:retail_product_category,id,outlet_id',
			'supplier_id' 	=> 'required|integer|exists:retail_supplier,id',
			'name' 			=> 'required|string',
			'descriptions'	=> 'string',
			'warehouse'		=> 'in:0,1',
			'image'			=> 'image',
			'status'		=> 'in:0,1',
			'have_variant'	=> 'in:0,1'
		);
		
		return $this->make($input, $rules);
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validation on deleting product
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onDelete ( array $input )
	{
		$rules = array (
			'id'		 	=> 'required|integer|exists_with:retail_product,id,outlet_id',
			'outlet_id' 	=> 'required|integer|exists:retail_outlet,id'
		);
		
		return $this->make($input, $rules);
	}
	// --------------------------------------------------------------------
	
}