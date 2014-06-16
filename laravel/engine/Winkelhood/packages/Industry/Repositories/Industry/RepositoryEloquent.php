<?php
namespace Winkelhood\Industry\Repositories\Industry;
use Winkelhood\Core\BaseRepository;
use Winkelhood\Industry\Repositories\IndustryRepository;
use Winkelhood\Industry\Models\Industry;

/**
 * Industry Repository Eloquent
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014 
 * @category RepositoryEloquent
 * @package  Winkelhood\Industry
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements IndustryRepository
{
	
	/**
	 * Class contructor
	 * Define the model classes that will be used
	 *
	 * @param Model $model
	 * --------------------------------------------------------------------
	 */
	public function __construct( Industry $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------
	
}