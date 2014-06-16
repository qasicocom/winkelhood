<?php
namespace Winkelhood\City\Models;

use Eloquent;

/**
 * Master Model 'm_city_kec' tables
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Mar 24, 2014
 * @category Model Master
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies.
 * @property integer $id
 * @property integer $kab_id
 * @property string $name
 * @property-read mixed $city
 * @property-read \M_CityKab $kab
 * @method static \Illuminate\Database\Query\Builder|\M_CityKec whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\M_CityKec whereKabId($value)
 * @method static \Illuminate\Database\Query\Builder|\M_CityKec whereName($value)
 * @property-read \M_CityKab $Kabupaten
 */
class Kecamatan extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'm_city_kec';
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
	 * Define relationship with 'm_city_kab'
	 * with foreignkey 'kab_id'
	 *
	 * @return void
	 * --------------------------------------------------------------------
	 */
	public function Kabupaten ()
	{
		return $this->belongsTo( 'Winkelhood\City\Models\Kabupaten', 'kab_id' );
	
	}
	// --------------------------------------------------------------------
	
}