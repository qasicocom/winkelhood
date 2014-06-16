<?php
namespace Winkelhood\Procurement\Models;
use \Eloquent;

/**
 * Retail_Po
 *
 * @author Alif Amri Suri
 * @since Apr 18, 2014
 * @category Model Retail
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 * @property integer $id
 * @property integer $company_id
 * @property integer $outlet_id
 * @property integer $supplier_id
 * @property float $shipping_prices
 * @property integer $tax
 * @property string $note
 * @property boolean $status
 * @property boolean $is_payed
 * @property boolean $is_shipped
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Retail_Outlet $Outlet
 * @property-read \Retail_Supplier $Supplier
 * @property-read \Illuminate\Database\Eloquent\Collection|\Retail_PoDetail[] $Details
 * @property-read \Illuminate\Database\Eloquent\Collection|\Retail_PoPayment[] $Payments
 * @property-read \Illuminate\Database\Eloquent\Collection|\Retail_PoReceiving[] $Receiving
 * @method static \Illuminate\Database\Query\Builder|\Retail_Po whereId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_Po whereCompanyId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_Po whereOutletId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_Po whereSupplierId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_Po whereShippingPrices($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_Po whereTax($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_Po whereNote($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_Po whereStatus($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_Po whereIsPayed($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_Po whereIsShipped($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_Po whereCreatedAt($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_Po whereUpdatedAt($value) 
 */
class PurchaseOrder extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'retail_purchase_order';

	/**
	 * The attributes that can be fill on create
	 *
	 * @var array
	 */
	protected $fillable = [
		'company_id',
		'outlet_id',
		'supplier_id',
		'shipping_prices',
		'tax',
		'note',
		'status',
		'is_payed',
		'is_shipped'
	];

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
	 * Define relationship with Retail_Supplier
	 *
	 * Retrieve data buyers
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 * --------------------------------------------------------------------
	 */
	public function Supplier ()
	{
		return $this->belongsTo( 'Winkelhood\Supplier\Models\Supplier', 'supplier_id' );
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship with Retail_PoDetail
	 *
	 * Retrieve data product details that have been purchased in this transaction
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\hasMany
	 * --------------------------------------------------------------------
	 */
	public function Details ()
	{
		return $this->hasMany( 'Winkelhood\Procurement\Models\Detail', 'purchase_order_id' );
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship with Retail_PoPayment
	 *
	 * Retrive payment data that has been made on this transaction
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\hasMany
	 * --------------------------------------------------------------------
	 */
	public function Payments ()
	{
		return $this->hasMany( 'Winkelhood\Procurement\Models\Payment', 'purchase_order_id' );
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship with Retail_PoReceiving
	 *
	 * Retrive Received data that has been made on this transaction
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\hasMany
	 * --------------------------------------------------------------------
	 */
	public function Receiving ()
	{
		return $this->hasMany( 'Winkelhood\Procurement\Models\PurchaseOrder\Receiving', 'purchase_order_id' );
	
	}
	// --------------------------------------------------------------------
	
}