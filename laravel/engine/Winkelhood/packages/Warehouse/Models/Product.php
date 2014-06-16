<?php
namespace Winkelhood\Warehouse\Models;
use \Eloquent;

/**
 * Model 'retail_product' tables
 *
 * @author Alif Amri Suri
 * @since Apr 18, 2014
 * @category Model Retail
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 */
class Product extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'retail_product';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array
	 * --------------------------------------------------------------------
	 */
	protected $fillable = [
		'outlet_id',
		'category_id',
		'supplier_id',
		'name',
		'descriptions',
		'warehouse',
		'image',
		'status',
		'have_variant',
		'sales_count'
	];
	// --------------------------------------------------------------------
	
	/**
	 * Define Relationship with Retail_ProductCategory
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 * --------------------------------------------------------------------
	 */
	public function Category ()
	{
		return $this->belongsTo( 'Winkelhood\Warehouse\Models\Category', 'category_id' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define Relationship with Retail_ProductVariant
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\hasMany
	 * --------------------------------------------------------------------
	 */
	public function Variant ()
	{
		return $this->hasMany( 'Winkelhood\Warehouse\Models\Variant', 'product_id' );
	}
	// --------------------------------------------------------------------
	
	
}