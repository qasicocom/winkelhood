<?php
namespace Api;

use BaseController;
use Input;
use Form;

/**
 * Api Controller for AJAX Request City
 *
 *
 * @author     Alif Amri Suri (alifamri@qasico.com)
 * @date       Mar 24, 2014 
 * @category   Controller | API
 * @package    Laravel
 * @version    1
 * @since      File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico Technologies Inc. (http://www.qasico.com)
 */
class City extends BaseController
{
    
    /**
     * City Chaining
     * 
     * @return array json
     */
    public function ChainSelect()
    {
        $result = false;
        
        if( $prop_id = Input::get('prop_id') ) {
        	
        	$kab     = \City::Kabupaten()->byPropinsi ( $prop_id );
            $result  = Form::select( 'kab_id', Form::city( $kab, 'kabupaten' ) );
        }
        
        else if( $kab_id = Input::get('kab_id') ) {
        	
        	$kec     = \City::Kecamatan()->byKabupaten ( $kab_id );
            $result  = Form::select( 'kec_id', Form::city( $kec, 'kecamatan' ) );
        }
        
        return json_encode($result);
    }
    
}