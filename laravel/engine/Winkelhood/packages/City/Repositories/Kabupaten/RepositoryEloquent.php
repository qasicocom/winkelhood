<?php
namespace Winkelhood\City\Repositories\Kabupaten;
use Winkelhood\City\Repositories\KabupatenRepository;
use Winkelhood\Core\BaseRepository;
use Winkelhood\City\Models\Kabupaten;

/**
 * Kabupaten Repository Eloquent
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014 
 * @category RepositoryEloquent
 * @package  Winkelhood\City
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements KabupatenRepository
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
	public function __construct( Kabupaten $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkelhood\City\Repositories\Kabupaten\KabupatenRepository::byPropinsi()
	 * --------------------------------------------------------------------
	 */
	public function byPropinsi ( $propinsi_id )
	{
		$result =  $this->model->wherePropId ( $propinsi_id )->get();
		
		return ( $result ) ? $result->toArray() : false;
	}
	// --------------------------------------------------------------------
	
}