<?php
namespace Winkelhood\Account\Repositories\Users;
use Winkelhood\Core\BaseRepository;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Account\Repositories\UserRepository;
use Winkelhood\Account\Models\User;

/**
 * User Repository Eloquent
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
class RepositoryEloquent extends BaseRepository implements UserRepository, Crudable
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
	public function __construct( User $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------
	
}