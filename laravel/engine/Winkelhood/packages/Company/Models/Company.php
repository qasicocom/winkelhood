<?php
namespace Winkelhood\Company\Models;
use \Eloquent;

/**
 * Master Model 'm_company' tables
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Mar 24, 2014
 * @category Model Master
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 */
class Company extends Eloquent 
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'm_company';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array
	 * --------------------------------------------------------------------
	 */
	protected $fillable  = ['name','slug','industry_id','packages_id','address','kec_id','phone','logo','status'];
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
	
	/**
	 * Define relation 'Belongs To' M_Industry model
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 * --------------------------------------------------------------------
	 */
	public function Industry ()
	{
		return $this->belongsTo( 'Winkelhood\Industry\Models\Industry', 'industry_id' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship table with m_company_subscription
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 * --------------------------------------------------------------------
	 */
	public function Subscriptions ()
	{
		return $this->hasMany( 'Winkelhood\Company\Models\CompanySubscription', 'company_id' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship table with Retail_Supplier
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 * --------------------------------------------------------------------
	 */
	public function Suppliers ()
	{
		return $this->hasMany( 'Winkelhood\Supplier\Models\Supplier', 'company_id' );
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship table with Retail_Costumer
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 * --------------------------------------------------------------------
	 */
	public function Costumers ()
	{
		return $this->hasMany( 'Winkelhood\Costumer\Models\Costumer', 'company_id' );
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define relation with retail_outlet,
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 * --------------------------------------------------------------------
	 */
	public function Outlets ()
	{
		return $this->hasMany( 'Winkelhood\Outlet\Models\Outlet', 'company_id' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Get staff thourgh outlet
	 * 
     * @return \Illuminate\Database\Eloquent\Relations\hasManyThrough
     * --------------------------------------------------------------------
	 */
	public function Staffs ()
	{
		return $this->hasManyThrough( 'Winkelhood\Staff\Models\Staff', 'Winkelhood\Outlet\Models\Outlet', 'company_id', 'outlet_id' );
	}
	// --------------------------------------------------------------------
	
}