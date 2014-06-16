<?php
namespace Api;

use BaseController;
use Input;
use Config;

/**
 * API Company
 *
 * @author     Alif Amri Suri (alifamri@qasico.com)
 * @date       Mar 24, 2014 
 * @category   Controller | API
 * @package    Laravel
 * @version    1
 * @since      File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico Technologies Inc. (http://www.qasico.com)
 */
class Company extends BaseController 
{

    /**
     * Check availablity of slug
     * handle post request, required input 'slug'
     *
     * @author Alif Amri Suri
     * @date Mar 17, 2014
     * @return string
     */
    public function checkSlug ()
    {
        
        // static, subdomain has been booked.
        $subdomain_booked = Config::get('app.costum.subdomain_booked');
        
        // user input to check
        $slug = Input::get( 'slug' );
        
        // default return result is error.
        $result = array(
            'status'   => 'error',
            'messages' => trans( 'form.validation.company_slug.check' )
        );
        
        // check if not empty slug, and slug is not reserved.
        if ( ! empty( $slug ) && ! in_array( $slug, $subdomain_booked ) ) {
            
            // check on databases.
            $check_db = \Winkelhood\Company\Models\Company::where( 'slug', '=', $slug )->first();
            
            // if no result / no exist tandanya slug belum tersedia
            if ( ! $check_db ) {
                $result = array(
                    'status' => 'success'
                );
            }
        }
        
        return json_encode( $result );
    
    }
    
}