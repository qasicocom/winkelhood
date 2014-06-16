<?php
namespace Winkelhood\Company\Models;
use \Eloquent;

/**
 * Master Model 'm_company_subcription' tables
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Mar 24, 2014
 * @category Model Master
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 * @property integer $id
 * @property integer $company_id
 * @property boolean $type
 * @property string $object
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @method static \Illuminate\Database\Query\Builder|\M_CompanySubcription whereId($value) 
 * @method static \Illuminate\Database\Query\Builder|\M_CompanySubcription whereCompanyId($value) 
 * @method static \Illuminate\Database\Query\Builder|\M_CompanySubcription whereType($value) 
 * @method static \Illuminate\Database\Query\Builder|\M_CompanySubcription whereObject($value) 
 * @method static \Illuminate\Database\Query\Builder|\M_CompanySubcription whereCreatedAt($value) 
 * @method static \Illuminate\Database\Query\Builder|\M_CompanySubcription whereUpdatedAt($value) 
 */
class CompanySubscription extends Eloquent
{

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $table = 'm_company_subscription';
	// --------------------------------------------------------------------
	
	/**
	 * The attributes that can be fill on create
	 *
	 * @var array
	 * --------------------------------------------------------------------
	 */
	protected $fillable = [
		'type',
		'object'
	];
	// --------------------------------------------------------------------
	
}