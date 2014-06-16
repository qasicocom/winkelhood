<?php
namespace Winkelhood\Warehouse\Repositories\Variant;
use Winkelhood\Core\BaseRepository;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Warehouse\Models\Variant;
use Winkelhood\Warehouse\Repositories\VariantRepository;

/**
 * Eloquent Product Repository
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 3, 2014 
 * @category RepositoryEloquent
 * @package Winkelhood\Product
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements VariantRepository, Crudable
{

	/**
	 * Class contructor
	 * Define the model classes that will be used
	 *
	 * @param Winkelhood\Warehouse\Models\Product $model
	 * --------------------------------------------------------------------
	 */
	public function __construct( Variant $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------

}