<?php

/**
 * Base Controller for Qasico System
 *
 * @author     Alif Amri Suri (alifamri@qasico.com)
 * @date       Mar 24, 2014 
 * @category   Controller
 * @package    Laravel
 * @version    1
 * @since      File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico Technologies Inc. (http://www.qasico.com)
 */
class BaseController extends Controller
{

    /**
     * Store data that will be passed to viewer file,
     * use key 'layout' for passing data to the layout
     * 
     * @var array
     * --------------------------------------------------------------------
     */
    protected $data = array();
    // --------------------------------------------------------------------
    
    public function __construct()
    {
    	App::setLocale( Session::get( 'locale' ) );
    }
    
    /**
     * Forced to change layout from controller
     * mostly used for popup page
     * 
     * @param string $layout_file    
     * --------------------------------------------------------------------        
     */
    public function changeLayout ( $layout_file )
    {
       $this->layout = View::make( $layout_file );
    }
	// --------------------------------------------------------------------
	
    /**
     * Setup the view that used on the controller.
     *
     * @param string $view_file            
     * @param array $data
     * --------------------------------------------------------------------            
     */
    public function view ( $view_file, $data = array() )
    {
        // clear data layout and prepare the data
        unset( $this->data[ 'layout' ] );
        $data = array_merge( $this->data, $data );

        $view = View::make( $view_file );
       
        // use with for auto presenter
        foreach( $data as $key => $data )
        {
        	$view->with( $key, $data );
        }
        
        return $view;
    }
	// --------------------------------------------------------------------
	
    /**
     * Setup view with modules
     * 
     * @param string $subview
     * @param array $data
     * @return \Illuminate\View\View
     * --------------------------------------------------------------------
     */
    public function module( $subview, $data = array () )
    {
    	// clear data layout and prepare the data
    	unset( $this->data[ 'layout' ] );
    	$data = array_merge( $this->data, $data );
    	
    	$view = View::make( 'winkel.apps.module' )->nest( 'subview', $subview, $data );
    	 
    	// use with for auto presenter
    	foreach( $data as $key => $data )
    	{
    		$view->with( $key, $data );
    	}
    	
    	return $view;
    }
    // --------------------------------------------------------------------
    
    /**
     * Setup the layout used by the controller.
     *
     * @return void
     * --------------------------------------------------------------------
     */
    protected function setupLayout ()
    {
        if ( ! is_null( $this->layout ) ) {
            $this->layout = View::make( $this->layout );
            if( isset( $this->data [ 'me' ] ) ) {
                $this->layout->me = (object) $this->data [ 'me' ];
            }
        }
    
    }
	// --------------------------------------------------------------------
	
    /**
     * Forced popup 404 not found
     * 
     * @param string $title
     * --------------------------------------------------------------------
     */
    public function popupNotfound( $title )
    {
    	$this->changeLayout( 'plugins.popup.notfound' );
    	$this->layout->title        = $title;
    	$this->layout->content      = $this->view( 'plugins.popup.blank' );
    }
	// --------------------------------------------------------------------
	
    public function responseJson ( $response )
    {
    	
    	if( ( $response->data != null ) && ( !is_string( $response->data ) ) ) {
    		$response->data = $response->data->toJson();
    	}
    	
    	return json_encode( $response );
    }
    
    
}

/**
 * Application Controller
 * Populate data yang sering digunakan di User Panel
 *
 * @author     Alif Amri Suri (alifamri@qasico.com)
 * @date       Mar 24, 2014
 * @category   Controller
 * @package    Laravel
 * @version    1
 * @since      File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico
 */
abstract class AppsController extends BaseController
{
	/**
	 * Stored current user data
	 * will auto serve to the layout
	 * 
	 * @var object
	 * --------------------------------------------------------------------
	 */
	protected $me;
	// --------------------------------------------------------------------
	
	/**
	 * Stored current user company data
	 * will auto serve to the layout
	 * 
	 * @var object
	 * --------------------------------------------------------------------
	 */
	protected $company;
	// --------------------------------------------------------------------
	
	/**
	 * Default layout will be use
	 * set this on controller to change the layout
	 * 
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $layout 	= 'winkel.apps.layout';
	// --------------------------------------------------------------------
	
	/**
	 * Class contructor
	 * set the $serve if need user & company data
	 * 
	 * @param bool $serve
	 * --------------------------------------------------------------------
	 */
	public function __construct( $serve = true )
	{
		parent::__construct();
		
		$this->beforeFilter( 'auth' );
		$loggedin = \Account::privileges();
		
		$this->me = $loggedin->user;
		$this->company = $loggedin->company;
		
		if( $serve ) {
			\View::share( 'me', $this->me );
			\View::share( 'company', $this->company );
		}
	}
	// --------------------------------------------------------------------
	

}

