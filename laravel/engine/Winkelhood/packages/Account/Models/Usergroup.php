<?php
namespace Winkelhood\Account\Models;
use Eloquent;

/**
 * Master Model 'm_usergroups' tables
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Mar 24, 2014
 * @category Model Master
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc. (http://www.qasico.com)
 * @property integer $id
 * @property string $name
 * @property-read \M_Modules $Privileges
 * @method static \Illuminate\Database\Query\Builder|\M_Usergroups whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\M_Usergroups whereName($value)
 */
class Usergroup extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'm_usergroups';
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
	 * Query with scope 
	 * 
	 * @param object $query
	 * --------------------------------------------------------------------
	 */
	public function scopeStaff ( $query )
	{
		return $query->where( 'id', '>', 2 );
	}
	// --------------------------------------------------------------------
	
}