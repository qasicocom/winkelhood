<?php
namespace Winkelhood\Sales\Models;
use \Eloquent;

/**
 * Retail_SoDetail
 *
 * @author Alif Amri Suri
 * @since Apr 18, 2014
 * @category Model
 * @package Winkelhood\Sales
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 */
class Detail extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string 
	 * --------------------------------------------------------------------
	 */
	protected $table = 'retail_sales_order_detail';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array 
	 * --------------------------------------------------------------------
	 */
	protected $fillable = [
		'sales_order_id',
		'product_id',
		'quantity',
		'unit_prices'
	];
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship with Retail_So
	 * 
	 * Retrive data sales order
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 * --------------------------------------------------------------------
	 */
	public function SalesOrder ()
	{
		return $this->belongsTo( 'Winkelhood\Sales\Models\SalesOrder', 'sales_order_id' );
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship with Retail_ProductVariant
	 * 
	 * Retrieve list data variant products that purchased in this transaction
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 * --------------------------------------------------------------------
	 */
	public function Item ()
	{
		return $this->hasMany( 'Winkelhood\Warehouse\Models\Variant', 'product_id' );
		
	}
	// --------------------------------------------------------------------
	
}