<?php
namespace Winkelhood\Supplier\Models;
use \Eloquent;

/**
 * Model 'retail_supplier' tables
 *
 * @author Alif Amri Suri
 * @since Apr 18, 2014
 * @category Model Retail
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 */
class Supplier extends Eloquent 
{

	/**
     * The database table used by the model.
     *
     * @var string
     * --------------------------------------------------------------------
     */
    protected $table = 'retail_supplier';
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
		'email',
		'address',
		'kec_id',
		'phone',
		'desc'
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
	
}