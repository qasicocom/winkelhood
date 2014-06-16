<?php
namespace Winkelhood\App\Models;
use \Eloquent;

/**
 * Master Model 'm_packages' tables
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
 * @property float $prices
 * @property integer $num_outlets
 * @property integer $num_users
 * @property integer $num_product
 * @property string $support
 * @property-read \Illuminate\Database\Eloquent\Collection|\M_Modules[] $modules
 * @method static \Illuminate\Database\Query\Builder|\M_Packages whereId($value) 
 * @method static \Illuminate\Database\Query\Builder|\M_Packages whereName($value) 
 * @method static \Illuminate\Database\Query\Builder|\M_Packages whereDesc($value) 
 * @method static \Illuminate\Database\Query\Builder|\M_Packages wherePrices($value) 
 * @method static \Illuminate\Database\Query\Builder|\M_Packages whereNumOutlets($value) 
 * @method static \Illuminate\Database\Query\Builder|\M_Packages whereNumUsers($value) 
 * @method static \Illuminate\Database\Query\Builder|\M_Packages whereNumProduct($value) 
 * @method static \Illuminate\Database\Query\Builder|\M_Packages whereSupport($value) 
 */
class Packages extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'm_packages';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array
	 * --------------------------------------------------------------------
	 */
	protected $fillable = [
		'name',
		'desc',
		'prices',
		'num_outlets',
		'num_users',
		'num_product',
		'support'
	];
	// --------------------------------------------------------------------
	
	/**
	 * This table doesnt have timestamps
	 * set false for disable timestamps on eloquent
	 *
	 * @var bool
	 * --------------------------------------------------------------------
	 */
	public $timestamps = false;
	// --------------------------------------------------------------------
	
	/**
	 * Define many to many relation with m_modules 
	 * with m_packages_modules as pivot table
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
	 * --------------------------------------------------------------------
	 */
	public function modules()
	{
		return $this->belongsToMany( 'Winkelhood\App\Models\Modules', 'm_package_modules', 'packages_id', 'modules_id' );
	}
	// --------------------------------------------------------------------
	
}