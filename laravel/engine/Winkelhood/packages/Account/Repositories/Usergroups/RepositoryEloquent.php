<?php
namespace Winkelhood\Account\Repositories\Usergroups;
use Winkelhood\Core\BaseRepository;
use Winkelhood\Account\Repositories\UsergroupRepository;
use Winkelhood\Account\Models\Usergroup;

/**
 * Usergroups Repository Eloquent
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014
 * @category RepositoryEloquent
 * @package  Winkelhood\Account
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements UsergroupRepository
{
	
	/**
	 * Stored The Model
	 *
	 * @var Illuminate\Database\Eloquent\Model
	 * --------------------------------------------------------------------
	 */
	protected $model;
	// --------------------------------------------------------------------
	
	/**
	 * Class contructor
	 * Define the model classes that will be used
	 *
	 * @param Model $model
	 * --------------------------------------------------------------------
	 */
	public function __construct( Usergroup $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------
	
}