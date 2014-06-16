<?php
namespace Winkelhood\Company\Repositories\Company;
use Winkelhood\Core\BaseRepositoryCached;
use Winkelhood\Company\Repositories\CompanyRepository;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Core\Services\ExtendedCacheManager;

/**
 * Cache Company Repository
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 25, 2014 
 * @category CacheRepository
 * @package Winkelhood\Company
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryCache extends BaseRepositoryCached implements CompanyRepository, Crudable
{
	
	/**
	 * Construct
	 *
	 * @param RepositoryEloquent $company
	 * --------------------------------------------------------------------
	 */
	public function __construct ( RepositoryEloquent $company  )
	{
		$this->repository = $company;
		$this->prefix_key = 'company';
		$this->cache 	  = new ExtendedCacheManager( \App::make('cache'), $this->prefix_key );
	}
	// --------------------------------------------------------------------
	
}