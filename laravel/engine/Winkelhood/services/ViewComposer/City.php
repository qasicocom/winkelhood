<?php
namespace Winkelhood\Services\ViewComposer;

class City
{
	public function compose ( $view )
	{
		$prop_id = $kab_id = $kec_id = null;
		
		$data    = $view->getData();
		
		if( isset( $data [ 'company' ] ) )
		{
			$company = $data [ 'company' ];
			$city    = \City::All( $company->kec_id );
		}
		
		if( $city != null )
		{
			$city = (object) $city;
			
			$prop_id  = $city->propinsi  [ 'id' ];
			$kab_id   = $city->kabupaten [ 'id' ];
			$kec_id   = $city->kecamatan [ 'id' ];
		}
		
		$propinsi    = \Form::city( \City::Propinsi()->all()->toArray(), 'propinsi' );
		$kabupaten   = \Form::city( \City::Kabupaten()->byPropinsi( $prop_id ), 'kabupaten' );
		$kecamatan   = \Form::city( \City::Kecamatan()->byKabupaten( $kab_id ), 'kecamatan' );
		
		$prop_select = \Form::select( 'prop_id', $propinsi,  $prop_id,  array( 'class'=>'form-control' ) );
		$kab_select  = \Form::select( 'kab_id',  $kabupaten, $kab_id, array( 'class'=>'form-control' ) );
		$kec_select  = \Form::select( 'kec_id',  $kecamatan, $kec_id, array( 'class'=>'form-control' ) );
		
		$view->with( 'propinsi_select',  $prop_select );
		$view->with( 'kabupaten_select', $kab_select );
		$view->with( 'kecamatan_select', $kec_select );
	}
}