<?php
namespace Winkelhood\Procurement\Models;
use \Eloquent;

/**
 * Retail_PoPayment
 *
 * @author Alif Amri Suri
 * @since Apr 18, 2014
 * @category Model Retail
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 * @property integer $id
 * @property integer $purchase_order_id
 * @property float $amount
 * @property boolean $is_cash
 * @property string $code
 * @property integer $payment_type_id
 * @property string $duedate_payment
 * @property string $settled_payment
 * @property boolean $status
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Retail_Po $PurchaseOrder
 * @property-read \Retail_PaymentType $PaymentType
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoPayment whereId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoPayment wherePurchaseOrderId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoPayment whereAmount($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoPayment whereIsCash($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoPayment whereCode($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoPayment wherePaymentTypeId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoPayment whereDuedatePayment($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoPayment whereSettledPayment($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoPayment whereStatus($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoPayment whereCreatedAt($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoPayment whereUpdatedAt($value) 
 */
class Payment extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'retail_purchase_order_payment';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array
	 * --------------------------------------------------------------------
	 */
	protected $fillable = [
		'purchase_order_id',
		'amount',
		'is_cash',
		'code',
		'payment_type_id',
		'duedate_payment',
		'settled_payment',
		'status'
	];
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship with Retail_Po
	 *
	 * Retrive data purchase order
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 * --------------------------------------------------------------------
	 */
	public function PurchaseOrder ()
	{
		return $this->belongsTo( 'Winkelhood\Procurement\Models\PurchaseOrder', 'purchase_order_id' );
	
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