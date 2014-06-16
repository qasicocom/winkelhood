<?php
namespace Winkelhood\Staff\Models;
use \Eloquent;

/**
 * Model 'retail_outlet_staff' tables
 *
 * @author Alif Amri Suri
 * @since Apr 18, 2014
 * @category Model Retail
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 * @property integer $id
 * @property integer $user_id
 * @property integer $outlet_id
 * @property \Carbon\Carbon $deleted_at
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Retail_Outlet $Outlet
 * @method static \Illuminate\Database\Query\Builder|\Retail_OutletStaff whereId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_OutletStaff whereUserId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_OutletStaff whereOutletId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_OutletStaff whereDeletedAt($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_OutletStaff whereCreatedAt($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_OutletStaff whereUpdatedAt($value) 
 */
class Staff extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'retail_outlet_staff';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array
	 * --------------------------------------------------------------------
	 */
	protected $fillable = [
		'user_id',
		'outlet_id'
	];
	// -------------------------------------------------------------------- 
	
	/**
	 * Define relationship with user
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 * --------------------------------------------------------------------
	 */
	public function User ()
	{
		return $this->belongsTo( 'Winkelhood\Account\Models\User', 'user_id' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship with retail_outlet
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 * --------------------------------------------------------------------
	 */
	public function Outlet ()
	{
		return $this->hasOne( 'Winkelhood\Outlet\Models\Outlet', 'id', 'outlet_id' );
	}
	// --------------------------------------------------------------------
	
}