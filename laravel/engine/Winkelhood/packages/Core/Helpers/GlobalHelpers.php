<?php
/**
 * ####################################################################
 *
 * Laravel Global Helpers
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Mar 8, 2014
 * @category helpers
 * @package  laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 *
 * ####################################################################
 * ####################################################################
 */

use Illuminate\Support\Facades\Crypt;


/**
 * Encrypting String
 * --------------------------------------------------------------------
 */
if(! function_exists( 'encrypt' ) )
{
	function encrypt( $string )
	{
		return Crypt::encrypt( $string );
	}
}
// --------------------------------------------------------------------

/**
 * Decrypting String
 * --------------------------------------------------------------------
 */
if( ! function_exists( 'decrypt' ) )
{
	function decrypt( $encrypted )
	{
		return Crypt::decrypt( $encrypted );
	}
}
// --------------------------------------------------------------------

/**
 * Translate array value
 * --------------------------------------------------------------------
 */
if( !function_exists( 'trans_array' ) )
{
	function trans_array( $input )
	{
		$data = [];
	
		foreach ( $input as $key )
		{
			$data [] = trans( $key );
		}
	
		return $data;
	}
}
// --------------------------------------------------------------------

/**
 * Make key array by string provided
 * --------------------------------------------------------------------
 */
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
// --------------------------------------------------------------------

/**
 * Make Name first letter capital
 * --------------------------------------------------------------------
 */
if( ! function_exists( 'akronim_name' ) )
{
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
}
// --------------------------------------------------------------------

/**
 * Make Standart Array Format for Api Reposponse
 * --------------------------------------------------------------------
 */
if( ! function_exists( 'apiResponse' ) )
{
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
}
// --------------------------------------------------------------------

/**
 * Make Standart Array Format for Api Reposponse
 * --------------------------------------------------------------------
 */
if( ! function_exists( 'moduleAction' ) )
{
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
}
// --------------------------------------------------------------------

/**
 * Make Standart Array Format for Api Reposponse
 * --------------------------------------------------------------------
 */
if( ! function_exists( 'moduleNav' ) )
{
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
}
// --------------------------------------------------------------------

