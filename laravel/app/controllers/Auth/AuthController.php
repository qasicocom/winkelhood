<?php
namespace Auth;

use \BaseController;
use \Illuminate\Support\Facades\Auth;
use \Illuminate\Support\Facades\View;
use \Illuminate\Support\Facades\Input;
use \Illuminate\Support\Facades\App;
use \Illuminate\Support\Facades\Redirect;
use \Illuminate\Support\Facades\Session;
use \Illuminate\Support\Facades\Lang;
use \Illuminate\Support\Facades\Cookie;

/**
 * Auth Controller
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Mar 8, 2014
 * @category Controller
 * @package Laravel
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
class AuthController extends BaseController
{

	/**
	 * Layout file being used
	 *
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $layout = 'winkel.auth.layout';
	// --------------------------------------------------------------------

	/**
	 * Display Form Signin
	 *
	 * --------------------------------------------------------------------
	 */
	public function getSignin ()
	{
		$this->layout->title = trans( 'page.signin.title' );
		$this->layout->content = View::make( 'winkel.auth.pages.signin' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Display Form Signup
	 * 
	 * --------------------------------------------------------------------
	 */
	public function getSignup ()
	{
		$this->layout->title = trans( 'page.signup.title' );
		$this->layout->content = View::make( 'winkel.auth.pages.signup' );
	}
	// --------------------------------------------------------------------

	/**
	 * Display form reminder password
	 *
	 * --------------------------------------------------------------------
	 */
	public function getLostpwd()
	{
		$this->layout->title   = trans( 'page.lostpwd.title' );
		$this->layout->content = View::make( 'winkel.auth.pages.lostpwd' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Display the password reset view for the given token.
	 *
	 * @param  string  $token
	 * @return Response
	 * --------------------------------------------------------------------
	 */
	public function getPwdReset($token = null)
	{
		if (is_null($token)) App::abort(404);
	
		$this->layout->title   = trans( 'page.pwdreset.title' );
		$this->layout->content = View::make( 'winkel.auth.pages.pwdreset' )->with('token', $token);
	}
	// --------------------------------------------------------------------
	
	/**
	 * email verification, update status user and auto login
	 *
	 * @author Alif Amri Suri
	 * @date Mar 20, 2014
	 * --------------------------------------------------------------------
	 */
	public function doVerify()
	{
		if( Input::get( 'key' ) && 
			\Account::user()->verify( Input::get( 'key' ) ) )
		{
			return Redirect::to( Auth::user()->redirect );
		}
		else {
			App::abort(404);
		}
	}
	// --------------------------------------------------------------------
	
	/**
	 * handle route url '/signout'
	 * and clear session user then throw to '/auth' page
	 *
	 * @author 		Alif Amri Suri
	 * @since  		Mar 8, 2014
	 * --------------------------------------------------------------------
	 */
	public function doSignout ()
	{
		Auth::logout();
		
		return Redirect::to( Route('auth.signin') )
			->with ('messages', trans( 'form.flash.signout' ) )
			->with( 'status', 'info' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Handle POST request on submit form signin
	 *
	 * @author Alif Amri Suri
	 * @since Mar 8, 2014
	 * --------------------------------------------------------------------
	 */
	public function postSignin ()
	{
		$signin =  \Account::user()->signin();
		
		if ( $signin->status == 'success' ) 
		{
			return Redirect::to( \Account::privileges()->baseUrl );
			
		}
		else {
			return Redirect::back()
				->with( 'messages', $signin->message )
				->with( 'status', 'danger' )
				->withInput( Input::except( 'password' ) );
		}
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Handle POST on submit signup form
	 *
	 * @author Alif Amri Suri
	 * @since Mar 20, 2014
	 * @update Apr 24, 2014
	 * --------------------------------------------------------------------
	 */
	public function postSignup ()
	{
		$signup = \Account::user()->signup();

		if ( $signup->status == 'success' ) 
		{
			return Redirect::back()
				->with( 'messages', $signup->message )
				->with( 'status', 'success' );
			
		}
		else {
			return Redirect::back()
				->withErrors( $signup->data )
				->withInput( Input::except( 'password' ) );
		}
		
    }
    // --------------------------------------------------------------------
	
	/**
	 * Handle POST request on submit reminder password
	 * 
	 * --------------------------------------------------------------------
	 */
	public function postLostpwd()
	{
		$lostPwd = \Account::user()->lostPwd();
		
		if ( $lostPwd->status == 'success' ) 
		{
			return Redirect::back()
				->with( 'messages', $lostPwd->message )
				->with( 'status', 'success' );
				
		}
		else {
			return Redirect::back()
				->withErrors( $lostPwd->data )
				->withInput();
		}
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Handle a POST request to reset a user's password.
	 *
	 * @return Response
	 */
	public function postPwdReset( $token = null )
	{
		$resetPwd = \Account::user()->resetPwd();
		
		if ( $resetPwd->status == 'success' ) {
				
			return Redirect::to( Route( 'auth.signin' ) )
				->with( 'messages', $resetPwd->message )
				->with( 'status', 'success' );
		
		}
		else {
			return Redirect::back()
			->with( 'messages', $resetPwd->message )
			->with( 'status', 'danger' )
			->withErrors( $resetPwd->data )
			->withInput();
		}
	}
	// --------------------------------------------------------------------
	
	
}