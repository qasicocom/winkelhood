<?php
namespace Winkelhood\City\Repositories;

/**
 * Kecamatan Repository Interfaces
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014 
 * @category RepositoryInterfaces
 * @package  Winkelhood\City
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
interface KecamatanRepository
{
	
	/**
	 * Get all kabupaten and propinsi related with kec_id provided
	 *
	 * @param int $kec_id
	 * --------------------------------------------------------------------
	 */
	public function related ( $kec_id );
	// --------------------------------------------------------------------
	
	/**
	 * Get kecamatan list by provide kabupaten id
	 * 
	 * @param int $kab_id
	 * --------------------------------------------------------------------
	 */
	public function byKabupaten ( $kab_id );
	// --------------------------------------------------------------------
	
}