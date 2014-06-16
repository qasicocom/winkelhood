<?php
namespace Winkelhood\Warehouse\Repositories\Category;
use Winkelhood\Core\BaseRepositoryCached;
use Winkelhood\Warehouse\Repositories\CategoryRepository;
use Winkelhood\Core\Services\ExtendedCacheManager;

/**
 * Product Category Cache Repository
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 3, 2014 
 * @category RepositoryCache
 * @package Winkelhood\Warehouse
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryCache extends BaseRepositoryCached implements CategoryRepository
{
	
	/**
	 * Construct
	 *
	 * @param RepositoryEloquent $repo
	 * --------------------------------------------------------------------
	 */
	public function __construct ( RepositoryEloquent $repo )
	{
		$this->repository = $repo;
		$this->prefix_key = 'product.category';
		$this->cache 	  = new ExtendedCacheManager( \App::make( 'cache' ), $this->prefix_key );
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkelhood\Product\Repositories\Category\CategoryRepository::datatable()
	 * --------------------------------------------------------------------
	 */
	public function datatable( $company_id )
	{
		return $this->repository->datatable( $company_id );
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkelhood\Product\Repositories\Category\CategoryRepository::count()
	 * --------------------------------------------------------------------
	 */
	public function count( $company_id )
	{
		return $this->repository->count( $company_id );
	}
	// --------------------------------------------------------------------
}