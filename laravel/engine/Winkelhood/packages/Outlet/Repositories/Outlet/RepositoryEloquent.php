<?php
namespace Winkelhood\Outlet\Repositories\Outlet;
use Winkelhood\Core\BaseRepository;
use Winkelhood\Outlet\Repositories\OutletRepository;
use Winkelhood\Outlet\Models\Outlet;

/**
 * Eloquent Outlet Repository
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 3, 2014 
 * @category Repository
 * @package Winkelhood\Outlet
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements OutletRepository
{

	/**
	 * Class contructor
	 * Define the model classes that will be used
	 *
	 * @param Model $m_outlet
	 * --------------------------------------------------------------------
	 */
	public function __construct( Outlet $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------
	
}