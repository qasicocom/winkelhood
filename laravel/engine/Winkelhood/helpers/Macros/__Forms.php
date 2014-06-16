<?php

/**
 * Name :   Form Macro
 * Type :	Macros		
 * Path	  	/app/helpers/macros/foundation.php
 * @author 	Alif Amri Suri
 * @since  	Mar 8, 2014
 * @desc  	
 * Use macro in Form class 
 * - Form::isError( 'field' ) - check if this field error
 * - Form::errorMessage( 'field' ) - get error message for this field
 */


/**
 * Registered macro isError
 * to check field contain error
 * 
 */
Form::macro( 'isError', function ( $field ) {
	return FieldError($field);
});

/**
 * Registered macro errorMessage
 */
Form::macro( 'errorMessage', function ( $field, $format = true ) {
	return errorMessage($field, $format);
});


Form::macro( 'flashMessage', function ( $name, $style = 'info' ){
    
    
	if ( $message = Session::get( $name ) ) {
	    
		$output  = '<div class="alert alert-page pa_page_alerts_dark alert-dark alert-' . $style . '">';
		$output .= '<button type="button" class="close" data-dismiss="alert">&times;</button>';
		$output .= preg_replace('/^(\S+(\s+\S+)?)/', '<strong>$1</strong>', $message);
		$output .= '</div>';
		
		return $output;
	}
});


Form::macro( 'Freetrial', function() {
    
    if( Session::get( 'is_trial' ) ) {
        return 'Trial 30 Hari';
    }
    
});


Form::macro( 'reArray', function( $array_stack = array(), $array_key_key, $array_key_value, $array_push = false ) {

    $result = array();
    
    if( is_array( $array_stack ) ) {
        
        $result = array();
        foreach( $array_stack as $array )
        {
            $result [ $array [ $array_key_key ] ] = $array [ $array_key_value ];
        }
    }
    
    if ( is_array( $array_push ) ) {
        foreach( $array_push as $key => $value ){
            $result [ $key ] = $value;
        }
    }
    
    ksort( $result );
    
    return $result;
});


Form::macro( 'city', 
	function( $list = array(), $city ) 
	{
		if( $city == 'propinsi' )
		{
			$array_push = array ( '' => trans('form.select.prop') );
		}
		else if( $city == 'kabupaten' )
		{
			$array_push = array ( '' => trans('form.select.kab') );
		}
		else if( $city == 'kecamatan' )
		{
			$array_push = array ( '' => trans('form.select.kec') );
		}
		
		$result = array();
		
		if( is_array( $list ) ) 
		{
			foreach( $list as $city )
			{
				$result [ $city [ 'id' ] ] = $city [ 'name' ];
			}
		}
		
		if ( is_array( $array_push ) ) {
			foreach( $array_push as $key => $value ){
				$result [ $key ] = $value;
			}
		}
		
		ksort( $result );
		
		return $result;
	}
);

Form::macro( 'industry', 
	function( $list, $lang = 'en' )
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
		
		return ksort( $result );
	}
);


/**
 * **************************************************************
 * HELPERS FUNCTION FORM MACROS
 * **************************************************************
 */

/**
 * FieldError   
 * Detect if this field has error and return string 'error' 
 * that can be tagged to element div to signal erroneous entry
 *      
 * @author 	Alif Amri Suri
 * @since  	Mar 8, 2014
 * @param   string $field		
 * @return  string|null
 */
if (! function_exists( 'FieldError' ) ) {
	function FieldError( $field ) {
		$error = '';
		if( $errors = Session::get( 'errors' ) ) {
			$error = $errors->first( $field ) ? ' has-error dark' : '';
		}
		
		return $error;
	}
}


/**
 * errorMessage
 * return formatted error message associated with a field
 *
 * @author 	Alif Amri Suri
 * @since  	Mar 8, 2014
 * @param   string $field
 * @return  string|null
 */
if (! function_exists( 'errorMessage' ) ) {
	function errorMessage( $field, $format ) {
	    
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
}
