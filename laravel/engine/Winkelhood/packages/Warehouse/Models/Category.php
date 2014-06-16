<?php
namespace Winkelhood\Warehouse\Models;
use \Eloquent;

/**
 * Master Model 'retail_product_category' tables
 *
 * @author Alif Amri Suri
 * @since Apr 18, 2014
 * @category Model Retail
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 */
class Category extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'retail_product_category';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array
	 * --------------------------------------------------------------------
	 */
	protected $fillable = ['parent_id','outlet_id','name'];
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
	 * Define relationship to self,
	 * to getting parent category with fk parent_id
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 * --------------------------------------------------------------------
	 */
	public function Parent ()
	{
		return $this->belongsTo( 'Winkelhood\Warehouse\Models\Category', 'parent_id' );
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Define relationship to self model,
	 * to getting child of category
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 * --------------------------------------------------------------------
	 */
	public function Childs ()
	{
		return $this->hasMany( 'Winkelhood\Warehouse\Models\Category', 'parent_id' );
	
	}
	// --------------------------------------------------------------------
	
}