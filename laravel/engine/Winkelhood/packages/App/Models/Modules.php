<?php
namespace Winkelhood\App\Models;
use \Eloquent;

/**
 * Master Model 'm_modules' tables
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Mar 24, 2014
 * @category Model Master
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 * @property integer $id
 * @property string $name
 * @property string $desc
 * @method static \Illuminate\Database\Query\Builder|\M_Modules whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\M_Modules whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\M_Modules whereDesc($value)
 */
class Modules extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'm_modules';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array
	 * --------------------------------------------------------------------
	 */
	protected $fillable = [
		'name',
		'desc'
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