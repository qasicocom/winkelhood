<?php
namespace Winkelhood\App\Models;
use \Eloquent;

/**
 * Model 'retail_payment_type' tables
 * 
 * @author Alif Amri Suri
 * @since Apr 18, 2014
 * @category Model Retail
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 * @property integer $id
 * @property string $name
 * @method static \Illuminate\Database\Query\Builder|\Retail_PaymentType whereId($value) 
 * @method static \Illuminate\Database\Query\Builder|\Retail_PaymentType whereName($value) 
 */
class PaymentType extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'retail_payment_type';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array
	 * --------------------------------------------------------------------
	 */
	protected $fillable = [
		'name'
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