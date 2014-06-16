<?php
namespace Winkelhood\Account\Models;
use Eloquent;

/**
 * Master Model 'm_user_activations' tables
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Mar 24, 2014
 * @category Model Master
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 * @property integer $user_id
 * @property string $code
 * @method static \Illuminate\Database\Query\Builder|\M_UserActivations whereUserId($value)
 * @method static \Illuminate\Database\Query\Builder|\M_UserActivations whereCode($value)
 */
class UserActivation extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'm_user_activations';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array
	 * --------------------------------------------------------------------
	 */
	protected $fillable = ['user_id','code'];
	// --------------------------------------------------------------------
	
	/**
	 * This table doesnt have timestamps
	 *
	 * @var bool
	 * --------------------------------------------------------------------
	 */
	public $timestamps = false;
	// --------------------------------------------------------------------
	
	/**
 	 * Relation with user table
 	 * --------------------------------------------------------------------
	 */
	public function User()
	{
		return $this->belongsTo( 'Winkelhood\Account\Models\User', 'user_id' );
	}
	// --------------------------------------------------------------------
	
}