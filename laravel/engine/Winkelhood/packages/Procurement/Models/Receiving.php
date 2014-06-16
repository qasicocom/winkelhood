<?php
namespace Winkelhood\Procurement\Models;
use \Eloquent;

/**
 * Retail_PoReceiving
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
 * @property string $note
 * @property boolean $status
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Retail_Po $PurchaseOrder
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoReceiving whereId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoReceiving wherePurchaseOrderId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoReceiving whereNote($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoReceiving whereStatus($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoReceiving whereCreatedAt($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PoReceiving whereUpdatedAt($value) 
 */
class Receiving extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'retail_purchase_order_receiving';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array
	 * --------------------------------------------------------------------
	 */
	protected $fillable = [
		'purchase_order_id',
		'note',
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
	
}