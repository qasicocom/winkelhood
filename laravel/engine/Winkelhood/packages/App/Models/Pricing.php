<?php
namespace Winkelhood\App\Models;
use \Eloquent;

/**
 * Master Model 'm_price_module' tables
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Mar 24, 2014
 * @category Model Master
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies.
 * @property integer $id
 * @property string $module_packages
 * @property float $prices
 * @method static \Illuminate\Database\Query\Builder|\M_PriceModule whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\M_PriceModule whereModulePackages($value)
 * @method static \Illuminate\Database\Query\Builder|\M_PriceModule wherePrices($value)
 */
class Pricing extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string 
	 * --------------------------------------------------------------------
	 */
	protected $table = 'm_pricing';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array 
	 * --------------------------------------------------------------------
	 */
	protected $fillable = [
		'type',
		'number',
		'prices'
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