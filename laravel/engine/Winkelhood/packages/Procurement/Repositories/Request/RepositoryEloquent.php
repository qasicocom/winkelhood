<?php
namespace Winkelhood\Procurement\Repositories\Request;
use Winkelhood\Core\BaseRepository;
use Winkelhood\Procurement\Repositories\RequestRepository;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Procurement\Models\Request;

/**
 * Eloquent Request Repository
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 3, 2014 
 * @category RepositoryEloquent
 * @package Winkelhood\Procurement
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements RequestRepository, Crudable
{

	/**
	 * Class contructor
	 * Define the model classes that will be used
	 *
	 * @param Winkelhood\Procurement\Models\Request $model
	 * --------------------------------------------------------------------
	 */
	public function __construct( Request $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------

}