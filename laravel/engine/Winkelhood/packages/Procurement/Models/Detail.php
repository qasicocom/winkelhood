<?php
namespace Winkelhood\Procurement\Models;
use \Eloquent;

/**
 * Retail_PoDetail
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
 * @property integer $product_id
 * @property integer $quantity
 * @property integer $nogood
 * @property float $unit_prices
 * @property boolean $status
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Retail_Po $PurchaseOrder
 * @property-read \Illuminate\Database\Eloquent\Collection|\Retail_ProductVariant[] $Item
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoDetail whereId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoDetail wherePurchaseOrderId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoDetail whereProductId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoDetail whereQuantity($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoDetail whereNogood($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoDetail whereUnitPrices($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoDetail whereStatus($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoDetail whereCreatedAt($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoDetail whereUpdatedAt($value) 
 */
class Detail extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'retail_purchase_order_detail';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array
	 * --------------------------------------------------------------------
	 */
	protected $fillable = [
		'purchase_order_id',
		'product_id',
		'quantity',
		'nogood',
		'unit_prices',
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