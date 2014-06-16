<?php
namespace Winkelhood\Procurement\Repositories\Receiving;
use Winkelhood\Core\BaseRepository;
use Winkelhood\Procurement\Repositories\ReceivingRepository;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Procurement\Models\Receiving;

/**
 * Eloquent Receiving Repository
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 3, 2014 
 * @category RepositoryEloquent
 * @package Winkelhood\Procurement
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements ReceivingRepository, Crudable
{

	/**
	 * Class contructor
	 * Define the model classes that will be used
	 *
	 * @param Winkelhood\Procurement\Models\Receiving $model
	 * --------------------------------------------------------------------
	 */
	public function __construct( Receiving $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------

}