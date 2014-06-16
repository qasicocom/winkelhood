<?php
/**
 * ####################################################################
 * 
 * Laravel Form Macros
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Mar 8, 2014
 * @category macros
 * @package  laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 * 
 * ####################################################################
 * ####################################################################
 */


/**
 * Registered macro isError
 * to check field contain error
 * 
 * usage: Form::isError ( 'field_name' );
 * --------------------------------------------------------------------
 */
Form::macro( 'isError', 
	function ( $field ) {
		
		$error = '';
		
		if( $errors = Session::get( 'errors' ) ) {
			$error = $errors->first( $field ) ? ' has-error dark' : '';
		}
		
		return $error;
		
	}
);
// --------------------------------------------------------------------


/**
 * Registered macro errorMessage
 * 
 * usage: Form::errorMessage ( 'field_name', false );
 * --------------------------------------------------------------------
 */
Form::macro( 'errorMessage', 
	function ( $field, $format = true ) {
	
		if( $errors = Session::get( 'errors' ) ) {
			if( $format == true ) {
				return ( $errors->first( $field ) ) ? '<p class="help-block">' . $errors->first( $field ) . '</p>' : '';
			}
			else {
				return ( $errors->first( $field ) ) ? $errors->first( $field ) : '';
			}
		}
		
		return false;
	
	}
);
// --------------------------------------------------------------------

/**
 * Registered macro flashMessage
 * 
 * usage: Form::flashMessage( 'name', 'error' );
 * --------------------------------------------------------------------
 */
Form::macro( 'flashMessage', 
	function ( $name, $style = 'info' ){
    
		if ( $message = Session::get( $name ) ) {
		    
			$output  = '<div class="alert alert-page pa_page_alerts_dark alert-dark alert-' . $style . '">';
			$output .= '<button type="button" class="close" data-dismiss="alert">&times;</button>';
			$output .= preg_replace('/^(\S+(\s+\S+)?)/', '<strong>$1</strong>', $message);
			$output .= '</div>';
			
			return $output;
		}
		
		return false;
	}
);
// --------------------------------------------------------------------

