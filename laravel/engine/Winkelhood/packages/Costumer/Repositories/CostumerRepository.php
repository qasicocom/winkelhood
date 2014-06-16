<?php
namespace Winkelhood\Costumer\Repositories;
use Winkelhood\Core\Interfaces\Repoable;

/**
 * Costumer Repository Interfaces
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 27, 2014 
 * @category RepositoryInterface
 * @package Winkelhood\Costumer
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
interface CostumerRepository extends Repoable
{
	
	/**
	 * Query Builder for Datatable
	 *
	 * @param int $company_id
	 * @param str $filter
	 * @param bool $access
	 * --------------------------------------------------------------------
	 */
	public function datatable( $company_id, $filter = false, $access = false );
	// --------------------------------------------------------------------
	
	/**
	 * Get total number costumer
	 * 
	 * @param int $company_id
	 * --------------------------------------------------------------------
	 */
	public function count( $company_id );
	// --------------------------------------------------------------------
	
}