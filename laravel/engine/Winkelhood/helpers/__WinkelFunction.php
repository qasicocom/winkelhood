<?php

use Illuminate\Support\Facades\Crypt;

if(! function_exists( 'encrypt' ) )
{
	function encrypt( $string )
	{
		return Crypt::encrypt( $string );
	} 
}

if( ! function_exists( 'decrypt' ) )
{
	function decrypt( $encrypted )
	{
		return Crypt::decrypt( $encrypted );
	}
}

function trans_array( $input )
{
	$data = [];

	foreach ( $input as $field )
	{
		$data [] = trans( $field );
	}

	return $data;
}

function akronim ( $string, $forced = false )
{
	
	if( ( $forced == true ) || ( strlen( $string ) > 6 ) )
	{
		$string = strtoupper( $string [ 0 ] );
	}
	
	return $string;
}

function akronim_name ( $name, $type = 'last_only' )
{
	if( strlen( $name ) < 13  ) return $name;
	
	$words      = explode( ' ', $name );
	$numberWord = count( $words );
	
	// last only
	if( $type == 'last_only' )
	{
		for( $i=0; $i <= ( $numberWord - 1 ); $i++ )
		{
			$partofname = $words[$i];
		
			if( $i != ( $numberWord - 1 ) )
			{
				$partofname = akronim( $partofname );
			}
		
			$newname [] = $partofname;
		}
			
		$name = implode( ' ', $newname);
	}
	
	else if( $type == 'first_middle_only' )
	{
		
		for( $i=0; $i <= ( $numberWord - 1 ); $i++ )
		{
			$partofname = $words[$i];
		
			if( $i == ( $numberWord - 1 ) )
			{
				$partofname = akronim( $partofname, true );
			}
		
			$newname [] = $partofname;
		}
		$name = implode( ' ', $newname);
	}
	
	// fist only
	else if( $type == 'first_only' )
	{
		$name = "";
		for( $i=0; $i <= ( $numberWord - 1 ); $i++ )
		{
			$partofname = $words[$i];
			
			if( $i != 0 )
			{
				$partofname = akronim( $partofname, true );
			}
		
			$newname [] = $partofname;
		}
			
		$name = implode( ' ', $newname);
	}
	
	return $name;
}


function apiResponse( $status, $created, $alert, $reload = 'datatable', $modal = true )
{
	$response = array(
		'status' => $status,
		'id'  	 => $created,
		'reload' => $reload,
		'alert'  => array (
			'type' => $status,
			'text' => $alert
		),
		'modal'  => $modal
	);
	
	return $response;
}

function industry ( $list, $lang = 'en', $value = 0 )
{
	$lang   = ( $lang == 'en' ) ? 'en' : 'in';
	$result = array();
		
	$result [ 0 ] = trans('form.select.industry');
		
	if( is_array( $list ) )
	{
		foreach( $list as $industry )
		{
			$result [ $industry [ 'id' ] ] = $industry [ $lang ];
		}
	}
		
	ksort( $result );
	
	return \Form::select( 'industry_id', $result, $value, array( 'class'=>'form-control select2' ) );
}


function moduleAction ( $action, $refresh = null )
{
	$html  = '<div class="btn-group btn-group-lg">';
	
	if( count( $action ) > 0 )
	{
		foreach( $action as $link )
		{
			if( isset( $link [ 'icon' ] ) )
			{
				$link [ 'anchor' ] = '<span class="btn-label icon fa '. $link [ 'icon' ] .'"></span> ' . $link [ 'anchor' ];
				$link [ 'class' ]  = "btn-labeled " . $link [ 'class' ];
			}
	
			$popupAttr = "";
			if( isset( $link [ 'popup'] ) )
			{
				$link [ 'class' ]  = "xmodal " . $link [ 'class' ];
					
				$attr = 'data-size="modal-'.$link [ 'popup'].'"';
					
				$popupAttr = $attr.' data-api="true" data-target="#modal"';
			}
	
			$html .= '<a href="'. $link [ 'target' ] .'" class="btn btn-lg '. $link [ 'class' ] .'" '. $popupAttr .'>'. $link [ 'anchor' ] .'</a>';
		}
	}
	
	if( $refresh )
	{
		$html .= '<button class="btn btn-white tb-refresh" data-toggle="tooltip" data-placement="bottom" title="'. trans( 'table.action.refresh' ) .'"><i class="fa fa-refresh"></i></button>';
	}
	
	$html .= '</div>';
	
	return $html;
}

function moduleNav ( $nav = array() )
{
	$html  = '<ul class="nav nav-tabs">';
	
	if( count( $nav ) > 0 )
	{
		foreach ( $nav as $subnav )
		{
			$active = ( isset( $subnav [ 'active' ] ) ) ? 'active' : '';
			$html .= '<li class="'.$active.'">';
			
			$label = ( isset( $subnav [ 'label' ] ) ) ? '<span class="label label-success">'.$subnav [ 'label' ].'</span>' : '';
			
			$html .= '<a href="'. $subnav [ 'href' ] .'">'. $subnav [ 'anchor' ] . $label .' </a>';
			$html .= '</li>';
		}
	}
	
	$html .= '</ul>';
		
	return $html;
}

if( ! function_exists( 'selectArray' ) )
{
	function selectArray( array $arrays, $key, $value )
	{
		$newArray = array ( '' => '' );
		foreach( $arrays as $array )
		{
			$newArray [ $array [ $key ] ] = $array [ $value ];
		}
		
		return $newArray;
	}
}