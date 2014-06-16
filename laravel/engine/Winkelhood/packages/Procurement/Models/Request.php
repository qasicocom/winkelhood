<?php
namespace Winkelhood\Procurement\Models;
use \Eloquent;

/**
 * Retail_PoRequest
 *
 * @author Alif Amri Suri
 * @since Apr 18, 2014
 * @category Model Retail
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 * @property integer $id
 * @property integer $outlet_id
 * @property integer $product_id
 * @property integer $quantity
 * @property boolean $status
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Retail_Po $PurchaseOrder
 * @property-read \Illuminate\Database\Eloquent\Collection|\Retail_ProductVariant[] $Item
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoRequest whereId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoRequest whereOutletId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoRequest whereProductId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoRequest whereQuantity($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoRequest whereStatus($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoRequest whereCreatedAt($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoRequest whereUpdatedAt($value) 
 */
class Request extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'retail_purchase_order_request';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array
	 * --------------------------------------------------------------------
	 */
	protected $fillable = [
		'outlet_id',
		'product_id',
		'quantity',
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
	 * Define relationship with Retail_ProductVariant
	 * 
	 * Retrieve list data variant products that purchased in this transaction
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 * --------------------------------------------------------------------
	 */
	public function Item ()
	{
		return $this->hasMany( 'Winkelhood\Product\Models\Variant', 'product_id' );
	
	}
	// --------------------------------------------------------------------

}