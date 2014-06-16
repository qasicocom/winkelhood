<?php
namespace Winkelhood\City\Repositories\Propinsi;
use Winkelhood\Core\BaseRepository;
use Winkelhood\Core\Interfaces\Repoable;
use Winkelhood\City\Repositories\PropinsiRepository;
use Winkelhood\City\Models\Propinsi;

/**
 * Propinsi Repository Eloquent 
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014 
 * @category RepositoryEloquent
 * @package Winkelhood\City
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements Repoable, PropinsiRepository
{
	
	/**
	 * Class contructor
	 * Define the model classes that will be used
	 *
	 * @param Model $model
	 * --------------------------------------------------------------------
	 */
	public function __construct( Propinsi $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------
	
}