<?php
namespace Winkelhood\Account\Models;
use Eloquent;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableInterface;

/**
 * Master Model 'm_users' tables
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014 
 * @category Models
 * @package  Winkelhood\Account
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class User extends Eloquent implements UserInterface, RemindableInterface
{

	/**
	 * The database table used by the model.
	 *
	 * @var string 
	 * --------------------------------------------------------------------
	 */
	protected $table = 'm_users';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array 
	 * --------------------------------------------------------------------
	 */
	protected $fillable = array(
		'usergroup',
		'email',
		'password',
		'name',
		'status',
		'job_title',
		'avatar',
		'is_verify'
	);
	// --------------------------------------------------------------------
	
	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array 
	 * --------------------------------------------------------------------
	 */
	protected $hidden = array(
		'password'
	);
	// --------------------------------------------------------------------
	
	/**
	 * Costume Attributes that will included on object
	 *
	 * @var array 
	 * --------------------------------------------------------------------
	 */
	protected $appends = [];
	// --------------------------------------------------------------------
	
	/**
	 * Class Preseter for view
	 * 
	 * @var string
	 * --------------------------------------------------------------------
	 */
	public $presenter = 'Winkelhood\Account\Presenters\UserPresenter';
	// --------------------------------------------------------------------
	
	/**
	 * Get the unique identifier for the user.
	 *
	 * @return mixed 
	 * --------------------------------------------------------------------
	 */
	public function getAuthIdentifier ()
	{
		return $this->getKey();
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Get the password for the user.
	 *
	 * @return string 
	 * --------------------------------------------------------------------
	 */
	public function getAuthPassword ()
	{
		return $this->password;
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Get the e-mail address where password reminders are sent.
	 *
	 * @return string
	 * --------------------------------------------------------------------
	 */
	public function getReminderEmail ()
	{
		return $this->email;
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Get token
	 *
	 * @return string
	 * --------------------------------------------------------------------
	 */
	public function getRememberToken()
	{
		return $this->remember_token;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Set token
	 *
	 * @return string
	 * --------------------------------------------------------------------
	 */
	public function setRememberToken($value)
	{
		$this->remember_token = $value;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Get the token name
	 *
	 * @return string
	 * --------------------------------------------------------------------
	 */
	public function getRememberTokenName()
	{
		return 'remember_token';
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship with usergroup.
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 * --------------------------------------------------------------------
	 */
	public function Usergroup ()
	{
		return $this->belongsTo( 'Winkelhood\Account\Models\Usergroup', 'usergroup' );
	
	}
	// --------------------------------------------------------------------
	
	/**
 	 * Define relationship with usergroup.
 	 * 
 	 * @return \Illuminate\Database\Eloquent\Relations\hasOne
 	 * --------------------------------------------------------------------
	 */
	public function Activation ()
	{
		return $this->hasOne( 'Winkelhood\Account\Models\UserActivation', 'user_id' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Declare relationship with Retail_Outlet
	 * 
	 * if the user is staff ( usergroup > 2 ) this will return
	 * object of outlet and can be chaining to company
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany 
	 * --------------------------------------------------------------------
	 */
	public function Outlet ()
	{
		return $this->belongsToMany( 'Winkelhood\Outlet\Models\Outlet', 'retail_outlet_staff', 'user_id', 'outlet_id' )->withTimestamps();
	
	}
	// --------------------------------------------------------------------
	
}