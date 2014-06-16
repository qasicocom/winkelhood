<?php
namespace Winkelhood\Services\ViewComposer;

use Winkelhood\City\City;

class CityComposer
{
	
	protected $city;
	
	public function __construct( City $city )
	{
		$this->city = $city;
	}
	
	public function compose ( $view )
	{
		$prop_id = $kab_id = $kec_id = null;
		
		$data    = $view->getData();
		
		if( isset( $data [ 'company' ] ) )
		{
			$company = $data [ 'company' ];
			$city    = $this->city->All( $company->kec_id );
		}
		
		if( isset( $data [ 'supplier' ] ) )
		{
			$supplier = $data [ 'supplier' ];
			$city     = $this->city->All( (int) $supplier->kec_id );
		}
		
		if( isset( $data [ 'costumer' ] ) )
		{
			$costumer = $data [ 'costumer' ];
			$city     = $this->city->All( (int) $costumer->kec_id );
		}
		
		if( $city != null )
		{
			$city = (object) $city;
				
			$prop_id  = $city->propinsi  [ 'id' ];
			$kab_id   = $city->kabupaten [ 'id' ];
			$kec_id   = $city->kecamatan [ 'id' ];
		}
		
		$propinsi    = \Form::city( $this->city->Propinsi()->all()->toArray(), 'propinsi' );
		$kabupaten   = \Form::city( $this->city->Kabupaten()->byPropinsi( $prop_id ), 'kabupaten' );
		$kecamatan   = \Form::city( $this->city->Kecamatan()->byKabupaten( $kab_id ), 'kecamatan' );
		
		$prop_select = \Form::select( 'prop_id', $propinsi,  $prop_id,  array( 'class'=>'form-control' ) );
		$kab_select  = \Form::select( 'kab_id',  $kabupaten, $kab_id, array( 'class'=>'form-control' ) );
		$kec_select  = \Form::select( 'kec_id',  $kecamatan, $kec_id, array( 'class'=>'form-control' ) );
		
		$view->with( 'propinsi_select',  $prop_select );
		$view->with( 'kabupaten_select', $kab_select );
		$view->with( 'kecamatan_select', $kec_select );
		
	}
	
}
