<?php
namespace Winkelhood\Outlet\Models;
use \Eloquent;

/**
 * Model 'retail_outlet' tables
 *
 * @author Alif Amri Suri
 * @since Apr 18, 2014
 * @category Model Retail
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 */
class Outlet extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string 
	 * --------------------------------------------------------------------
	 */
	protected $table = 'retail_outlet';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array 
	 * --------------------------------------------------------------------
	 */
	protected $fillable = [
		'company_id',
		'name',
		'code',
		'address',
		'kec_id',
		'phone',
		'descriptions'
	];
	// --------------------------------------------------------------------
	
    /**
     * Define relationship table with m_city_kec
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * --------------------------------------------------------------------
     */
    public function Kecamatan ()
    {
    	return $this->belongsTo( 'Winkelhood\City\Models\Kecamatan', 'kec_id' );
    }
    // --------------------------------------------------------------------
    
    public function Company ()
    {
    	return $this->belongsTo( 'Winkelhood\Company\Models\Company', 'company_id' );
    }
    
    /**
     * Define databases relationship with m_users
     *
     * with pivot table retail_outlet_staff,
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     * --------------------------------------------------------------------
     */
    public function Staff()
    {
    	return $this->belongsToMany( 'Winkelhood\Account\Models\User', 'retail_outlet_staff', 'outlet_id', 'user_id' )->withTimestamps();
    }
    // --------------------------------------------------------------------
    
    /**
     * Define relationship table with Retail_Product
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     * --------------------------------------------------------------------
     */
    public function Products ()
    {
    	return $this->hasMany( 'Winkelhood\Product\Models\Product', 'outlet_id' );
    	 
    }
    // --------------------------------------------------------------------
    
    /**
     * Define relationship table with Retail_ProductCategory
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     * --------------------------------------------------------------------
     */
    public function Categories ()
    {
    	return $this->hasMany( 'Winkelhood\Product\Models\Category', 'outlet_id' );
    	 
    }
    // --------------------------------------------------------------------
    
    /**
     * Define relationship table with Retail_So
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     * --------------------------------------------------------------------
     */
    public function SalesOrder ()
    {
    	return $this->hasMany( 'Winkelhood\Selling\Models\SalesOrder', 'outlet_id' );
    }
    // --------------------------------------------------------------------
    
    /**
     * Define relationship table with Retail_Po
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     * --------------------------------------------------------------------
     */
    public function PurchaseOrder ()
    {
    	return $this->hasMany( 'Winkelhood\Procurement\Models\PurchaseOrder', 'outlet_id' );
    }
    // --------------------------------------------------------------------
    
}