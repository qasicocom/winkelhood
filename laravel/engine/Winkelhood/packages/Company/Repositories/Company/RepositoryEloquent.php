<?php
namespace Winkelhood\Company\Repositories\Company;
use Winkelhood\Core\BaseRepository;
use Winkelhood\Company\Repositories\CompanyRepository;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Company\Models\Company;

/**
 * Company repository using eloquent
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 25, 2014 
 * @category RepositoryEloquent
 * @package Winkelhood\Company
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements CompanyRepository, Crudable
{
	
	/**
	 * Class contructor
	 * Define the model classes that will be used
	 *
	 * @param Winkelhood\Company\Models\Company $model
	 * --------------------------------------------------------------------
	 */
	public function __construct( Company $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------
	
} 