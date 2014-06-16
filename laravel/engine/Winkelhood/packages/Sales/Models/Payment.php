<?php
namespace Winkelhood\Sales\Models;
use \Eloquent;

/**
 * Retail_SoPayment
 *
 * @author Alif Amri Suri
 * @since Apr 18, 2014
 * @category Model
 * @package Winkelhood\Sales
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 */
class Payment extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'retail_sales_order_payment';

	/**
	 * The attributes that can be fill on create
	 *
	 * @var array
	 */
	protected $fillable = [
		'sales_order_id',
		'amount',
		'is_cash',
		'code',
		'payment_type_id',
		'duedate_payment',
		'settled_payment',
		'status'
	];

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
	 * Define relationship with Retail_PaymentType
	 *
	 * Retrive data type of payment
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 * --------------------------------------------------------------------
	 */
	public function PaymentType ()
	{
		return $this->belongsTo( 'Retail_PaymentType', 'payment_type_id' );
		
	}
	// --------------------------------------------------------------------
	
}