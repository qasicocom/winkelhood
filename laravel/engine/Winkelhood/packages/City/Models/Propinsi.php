<?php
namespace Winkelhood\City\Models;

use Eloquent;

/**
 * Master Model 'm_city_prop' tables
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
 * @property-read \Illuminate\Database\Eloquent\Collection|\M_CityKab[] $Kabupaten
 * @method static \Illuminate\Database\Query\Builder|\M_CityProp whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\M_CityProp whereName($value)
 */
class Propinsi extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'm_city_prop';
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
	 * Define relationship Has Many 'm_city_kab' table
	 * with foreignkey prop_id.
	 *
	 * @return void
	 * --------------------------------------------------------------------
	 */
	public function Kabupaten ()
	{
		return $this->hasMany( 'Winkelhood\City\Models\Kabupaten', 'prop_id' );
	
	}
	// --------------------------------------------------------------------
	
}