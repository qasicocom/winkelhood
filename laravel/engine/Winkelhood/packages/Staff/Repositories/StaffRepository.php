<?php
namespace Winkelhood\Staff\Repositories;
use Winkelhood\Core\Interfaces\Repoable;

/**
 * Staff Repository Interface
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 7, 2014 
 * @category RepositoryInterface
 * @package Winkelhood\Staff
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
interface StaffRepository extends Repoable
{
	
	/**
	 * Get query builder for datatable
	 * 
	 * @param int $company_id
	 * @param string $filter
	 * @param bool $access
	 * --------------------------------------------------------------------
	 */
	public function datatable ( $company_id, $filter = false, $access = false );
	// --------------------------------------------------------------------

	/**
	 * Get total staff
	 * 
	 * @param int $company_id
	 * --------------------------------------------------------------------
	 */
	public function count ( $company_id );
	// --------------------------------------------------------------------
	
	/**
	 * Get outlet info for this user
	 * 
	 * @param int $user_id
	 * --------------------------------------------------------------------
	 */
	public function outlet ( $user_id );
	// --------------------------------------------------------------------
	
	/**
	 * Get company info for this user
	 * 
	 * @param int $user_id
	 * --------------------------------------------------------------------
	 */
	public function company ( $user_id );
	// --------------------------------------------------------------------
	
}