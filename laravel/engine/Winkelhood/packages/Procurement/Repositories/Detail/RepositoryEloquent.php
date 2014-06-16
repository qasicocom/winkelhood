<?php
namespace Winkelhood\Procurement\Repositories\Detail;
use Winkelhood\Core\BaseRepository;
use Winkelhood\Procurement\Repositories\DetailRepository;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Procurement\Models\Detail;

/**
 * Eloquent Detail Repository
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 3, 2014 
 * @category RepositoryEloquent
 * @package Winkelhood\Procurement
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements DetailRepository, Crudable
{

	/**
	 * Class contructor
	 * Define the model classes that will be used
	 *
	 * @param Winkelhood\Procurement\Models\Detail $model
	 * --------------------------------------------------------------------
	 */
	public function __construct( Detail $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------

}