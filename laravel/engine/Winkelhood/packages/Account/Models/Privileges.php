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
 * @property integer $id
 * @property integer $usergroup
 * @property integer $modules_id
 * @method static \Illuminate\Database\Query\Builder|\M_UsergroupPrivileges whereId($value) 
 * @method static \Illuminate\Database\Query\Builder|\M_UsergroupPrivileges whereUsergroup($value) 
 * @method static \Illuminate\Database\Query\Builder|\M_UsergroupPrivileges whereModulesId($value) 
 */
class Privileges extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'm_usergroup_privileges';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array
	 * --------------------------------------------------------------------
	 */
	protected $fillable = [
		'modules_id',
		'usergroup'
	];
	// --------------------------------------------------------------------

	/**
	 * This table doesnt have timestamps
	 *
	 * @var bool
	 * --------------------------------------------------------------------
	 */
	public $timestamps = false;
	// --------------------------------------------------------------------
	
}