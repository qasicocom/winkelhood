<?php
namespace Winkelhood\City\Repositories\Kecamatan;
use Winkelhood\Core\BaseRepository;
use Winkelhood\City\Repositories\KecamatanRepository;
use Winkelhood\City\Models\Kecamatan;

/**
 * Kecamatan Repository Eloquent
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014 
 * @category RepositoryEloquent
 * @package  Winkelhood\City
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements KecamatanRepository
{
	
	/**
	 * Stored The Model
	 *
	 * @var Illuminate\Database\Eloquent\Model
	 * --------------------------------------------------------------------
	 */
	protected $model;
	// --------------------------------------------------------------------
	
	/**
	 * Class contructor
	 * Define the model classes that will be used
	 *
	 * @param Model $model
	 * --------------------------------------------------------------------
	 */
	public function __construct( Kecamatan $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkelhood\City\Repositories\Kecamatan\KecamatanRepository::related()
	 * --------------------------------------------------------------------
	 */
	public function related( $kec_id )
	{
		if( $kec = $this->find( $kec_id, [ 'Kabupaten' ] ) )
		{
			$city [ 'kecamatan' ] [ 'id' ]     = $kec->id;
			$city [ 'kecamatan' ] [ 'name' ]   = $kec->name;
			$city [ 'kabupaten' ] [ 'id' ] 	   = $kec->Kabupaten->id;
			$city [ 'kabupaten' ] [ 'name' ]   = $kec->Kabupaten->name;
			$city [ 'propinsi' ]  [ 'id' ] 	   = $kec->Kabupaten->Propinsi->id;
			$city [ 'propinsi' ]  [ 'name' ]   = $kec->Kabupaten->Propinsi->name;
		
			return $city;
		}
		
		return false;
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkelhood\City\Repositories\Kecamatan\KecamatanRepository::byKabupaten()
	 * --------------------------------------------------------------------
	 */
	public function byKabupaten ( $kab_id )
	{
		$result = $this->model->whereKabId ( $kab_id )->get();
		
		return ( $result ) ? $result->toArray() : false;
	}
	// --------------------------------------------------------------------
	
}