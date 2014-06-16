<?php
namespace Winkelhood\Supplier\Repositories;
use Winkelhood\Core\Interfaces\Repoable;

/**
 * Supplier Repository Interfaces
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 27, 2014
 * @category RepositoryInterface
 * @package Winkelhood\Supplier
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
interface SupplierRepository extends Repoable
{

	/**
	 * Query Builder for Datatable
	 *
	 * @param int $company_id        	
	 * @param str $filter        	
	 * @param bool $access
	 * --------------------------------------------------------------------
	 */
	public function datatable ( $company_id, $filter = null, $access = null );
	// --------------------------------------------------------------------
	
	/**
	 * get total number of supplier
	 * 
	 * @param int $company_id
	 * --------------------------------------------------------------------
	 */
	public function count( $company_id );
	// --------------------------------------------------------------------
	
}