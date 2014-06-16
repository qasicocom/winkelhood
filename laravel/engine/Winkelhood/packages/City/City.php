<?php
namespace Winkelhood\City;

use Winkelhood\City\Repositories\KecamatanRepository;

use Winkelhood\City\Repositories\KabupatenRepository;

use Winkelhood\City\Repositories\PropinsiRepository;

/**
 * City Packages Layer
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014 
 * @category PackagesLayer
 * @package Winkelhood/City
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class City
{
	
	/**
	 * Binding Propinsi Repository Aliases
	 * 
	 * @example City::propinsi()->all (); 
	 * --------------------------------------------------------------------
	 */
	public function Propinsi ()
	{
		return \App::make( 'Winkelhood\City\Repositories\PropinsiRepository' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Binding Kabupaten Repository Aliases
	 * 
	 * @example City::kabupaten()->all();
	 * --------------------------------------------------------------------
	 */
	public function Kabupaten ()
	{
		return \App::make( 'Winkelhood\City\Repositories\KabupatenRepository' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Binding Kecamatan Repository Aliasses
	 * 
	 * @example City::kecamatan()->all();
	 * --------------------------------------------------------------------
	 */
	public function Kecamatan ()
	{
		return \App::make( 'Winkelhood\City\Repositories\KecamatanRepository' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Get all kabupaten and propinsi related with kec_id provided
	 * 
	 * @param int $kec_id
	 * --------------------------------------------------------------------
	 */
	public function All ( $kec_id )
	{
		if( ! is_int( $kec_id ) ) return false;
		
		return $this->Kecamatan()->related( $kec_id );
	}
	// --------------------------------------------------------------------
	
}