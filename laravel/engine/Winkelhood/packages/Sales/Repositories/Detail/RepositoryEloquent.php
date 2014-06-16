<?php
namespace Winkelhood\Sales\Repositories\Detail;
use Winkelhood\Core\BaseRepository;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Sales\Repositories\DetailRepository;
use Winkelhood\Sales\Models\Detail;

/**
 * Repository Eloquent
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Jun 4, 2014 
 * @category RepositoryEloquent
 * @package  Winkelhood\Sales
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements DetailRepository, Crudable
{
	
	/**
	 * Class Contructor
	 * 
	 * @param Detail $model
	 * --------------------------------------------------------------------
	 */
	public function __construct( Detail $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------
	
}