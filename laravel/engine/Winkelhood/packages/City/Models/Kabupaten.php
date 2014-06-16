<?php
namespace Winkelhood\City\Models;

use Eloquent;

/**
 * Master Model 'm_city_kab' tables
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Mar 24, 2014
 * @category Model Master
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 * @property integer $id
 * @property integer $prop_id
 * @property string $name
 * @property-read \Winkelhood\Models\Propinsi $Propinsi
 * @property-read \Illuminate\Database\Eloquent\Collection|\M_CityKec[] $Kecamatan
 * @method static \Illuminate\Database\Query\Builder|\Winkelhood\Models\Kabupaten whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\Winkelhood\Models\Kabupaten wherePropId($value)
 * @method static \Illuminate\Database\Query\Builder|\Winkelhood\Models\Kabupaten whereName($value)
 */
class Kabupaten extends Eloquent
{
	
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'm_city_kab';
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
	 * Define relationship with 'm_city_prop'
	 * with foreignkey 'prop_id'
	 *
	 * @return void
	 * --------------------------------------------------------------------
	 */
	public function Propinsi ()
	{
		return $this->belongsTo( 'Winkelhood\City\Models\Propinsi', 'prop_id' );
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship 'Has Many' m_city_kec
	 * with foreignkey 'kab_id'
	 *
	 * @return void
	 * --------------------------------------------------------------------
	 */
	public function Kecamatan ()
	{
		return $this->hasMany( 'Winkelhood\City\Models\Kecamatan', 'kab_id' );
	
	}
	// --------------------------------------------------------------------
}