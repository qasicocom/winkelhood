<?php
namespace Winkelhood\Sales\Models;
use \Eloquent;

/**
 * Retail_SoShipping
 *
 * @category Model Retail
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 */
class Shipping extends Eloquent {

	/**
     * The database table used by the model.
     *
     * @var string
     * --------------------------------------------------------------------
     */
    protected $table = 'retail_sales_order_shipping';
    // --------------------------------------------------------------------
    
    /**
     * The attributes that can be fill on create
     * 
     * @var array
     * --------------------------------------------------------------------
     */
    protected $fillable = [
    	'sales_order_id',
    	'logistic',
    	'code',
    	'delivery_date',
    	'status',
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
}