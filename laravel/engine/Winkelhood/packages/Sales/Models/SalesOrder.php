<?php
namespace Winkelhood\Sales\Models;
use \Eloquent;

/**
 * Model 'retail_sales_order' tables
 *
 * @author Alif Amri Suri
 * @since Apr 18, 2014
 * @category Model Retail
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 */
class SalesOrder extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'retail_sales_order';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array
	 * --------------------------------------------------------------------
	 */
	protected $fillable = [
		'outlet_id',
		'costumer_id',
		'shipping_prices',
		'tax',
		'note',
		'status',
		'is_payed',
		'is_shipped'
	];
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship with Retail_Outlet
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 * --------------------------------------------------------------------
	 */
	public function Outlet ()
	{
		return $this->belongsTo( 'Winkelhood\Outlet\Models\Outlet', 'outlet_id' );
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship with Retail_Costumer
	 * 
	 * Retrieve data buyers 
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 * --------------------------------------------------------------------
	 */
	public function Costumer ()
	{
		return $this->belongsTo( 'Winkelhood\Costumer\Models\Costumer', 'costumer_id' );
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship with Retail_SoDetail
	 * 
	 * Retrieve data product details that have been purchased in this transaction
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\hasMany
	 * --------------------------------------------------------------------
	 */
	public function Details ()
	{
		return $this->hasMany( 'Winkelhood\Sales\Models\Detail', 'sales_order_id' );
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship with Retail_SoPayment
	 * 
	 * Retrive payment data that has been made on this transaction
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\hasMany
	 * --------------------------------------------------------------------
	 */
	public function Payments ()
	{
		return $this->hasMany( 'Winkelhood\Sales\Models\Payment', 'sales_order_id' );
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship with Retail_SoShipping
	 * 
	 * Retrive shipping data that has been made on this transaction
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\hasMany
	 * --------------------------------------------------------------------
	 */
	public function Shipping ()
	{
		return $this->hasMany( 'Winkelhood\Sales\Models\Shipping', 'sales_order_id' );
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship with Retail_SoReturn
	 * 
	 * Retrive returning data that has been made on this transaction
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\hasMany
	 * --------------------------------------------------------------------
	 */
	public function Returning ()
	{
		return $this->hasMany( 'Winkelhood\Sales\Models\Returning', 'sales_order_id' );
		
	}
	// --------------------------------------------------------------------
	
}