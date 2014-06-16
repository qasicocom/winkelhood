<?php
namespace Winkelhood\Warehouse\Repositories;
use Winkelhood\Core\Interfaces\Repoable;

/**
 * Category Repository
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 3, 2014
 * @category InterfaceRepository
 * @package Winkelhood\Product
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
interface CategoryRepository extends Repoable
{
	/**
	 * Query Builder for Datatable
	 *
	 * @param int $company_id
	 * @param str $filter
	 * @param bool $access
	 * --------------------------------------------------------------------
	 */
	public function datatable( $company_id );
	// --------------------------------------------------------------------
	
	/**
	 * Get total number category
	 *
	 * @param int $company_id
	 * --------------------------------------------------------------------
	*/
	public function count( $company_id );
	// --------------------------------------------------------------------
	
}