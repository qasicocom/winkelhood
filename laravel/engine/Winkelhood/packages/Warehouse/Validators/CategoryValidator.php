<?php
namespace Winkelhood\Warehouse\Validators;
use Winkelhood\Core\BaseValidator;

/**
 * Validation category product
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 4, 2014
 * @category Validator
 * @package Winkelhood\Warehouse
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class CategoryValidator extends BaseValidator
{

	/**
	 * Validation on creating Category
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onCreate ( array $input )
	{
		$rules = array (
			'outlet_id' => 'required|integer|exists:retail_outlet,id',
			'parent_id' => 'integer|exists:retail_product_category,id',
			'name' 		=> 'required|string|unique_with:retail_product_category,outlet_id'
		);
		
		return $this->make($input, $rules);
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validation on updating category
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onUpdate ( array $input )
	{
		$rules = array (
			'id' 		=> 'required|integer',
			'outlet_id' => 'required|integer|exists_with:retail_product_category,id',
			'parent_id' => 'integer|exists:retail_product_category,id',
			'name' 		=> 'required|string|unique_except:retail_product_category,id,outlet_id'
		);
		
		return $this->make($input, $rules);
	}
	// --------------------------------------------------------------------
	
	/**
	 * Validation on deleting category
	 * 
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function onDelete ( array $input )
	{
		$rules = array (
			'id' 		=> 'required|integer',
			'outlet_id' => 'required|integer|exists_with:retail_product_category,id'
		);
		
		return $this->make($input, $rules);
	}
	// --------------------------------------------------------------------
	
}