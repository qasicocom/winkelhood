<?php
namespace Winkelhood\Account\Processors;
use Illuminate\Support\MessageBag;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Account\Repositories\UserRepository;
use Winkelhood\Account\Validators\AccountValidator;
use Winkelhood\Account\Models\UserActivation;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;

/**
 * User Processor
 * Processor is layer class repository and processing form
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 18, 2014
 * @category PackagesProcessor
 * @package Winkelhood\Account
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
class UserProcessor extends BaseProcessor
{

	/**
	 * Class Contructor
	 * 
	 * @param UserRepository $repo
	 * --------------------------------------------------------------------
	 */
	public function __construct ( UserRepository $repo, AccountValidator $validator )
	{
		$this->validate   = $validator;
		$this->repository = $repo;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Processing login user
	 *
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function signin ()
	{
		// get input only for this key
		$inputkey = array( 'email', 'password', 'remember' );
		$input    = $this->filterInput( $inputkey );
	
		if( $this->validate->onSignin( $input ) )
		{
			
			// attempt to do the login
			$credential = array_except( $input, 'remember' );
			if ( \Auth::attempt( $credential, \Input::get( 'remember' ) ) )
			{
				$event = \Event::fire( 'auth.signin', \Auth::user() );
				return $this->response( 'success', 'login successfull!' );
			}
			
			return $this->response( 'error', trans( 'form.flash.signin.error' ) );
			
		}
		
		return $this->response( 'error', trans( 'form.flash.signin.error' ) );
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Processing signup user
	 *
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function signup ()
	{
		// get input only for this key
		$inputkey = array( 'name', 'email', 'password', 'slug' );
		$input    = $this->filterInput( $inputkey );
		
		// validate the input
		if( $this->validate->onSignup( $input ) )
		{
			$input [ 'password' ]  = \Hash::make( $input [ 'password' ] );
			$input [ 'usergroup' ] = 2;
			
			// gw simpan slug disini dulu daripada pas register langsung membuat company.
			// ntar saat di verifikasi baru kita bikin company nya
			$input [ 'job_title' ] = $input [ 'slug' ];
			
			if( $newUser = $this->repository->create( $input ) )
			{
				$event = \Event::fire( 'auth.signup', $newUser );
				return $this->response( 'success', trans( 'form.flash.signup.success' ) );
			}
			
			return $this->response( 'error', trans( 'form.flash.system.error' ) );
		}
		
		return $this->response( 'error' );
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Processing lost password request form
	 *
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function lostPwd ()
	{
		// get input only for this key
		$inputkey = array( 'email' );
		$input    = $this->filterInput( $inputkey );
		
		// validate the input
		if( $this->validate->onLostPwd( $input ) )
		{
			// procced lost password using laravel
			if( ( \Password::remind( $input ) ) == \Password::REMINDER_SENT )
			{
				return $this->response( 'success', trans( 'form.flash.lostPwd.success' ) );
			}
			
			return $this->response( 'error', trans( 'form.flash.system.error' ) );
		}
		
		return $this->response( 'error' );
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Processing reset password user
	 *
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function resetPwd ()
	{
		// get input only for this key
		$inputkey = array( 'email', 'password', 'password_confirmation', 'token' );
		$input    = $this->filterInput( $inputkey );
		
		// validate the input
		if( $this->validate->onResetPwd( $input ) )
		{
			$response = Password::reset( $input,
				function( $user, $password )
				{
					$user->password = \Hash::make( $password );
					$user->save();
				}
			);
			
			if( $response == Password::PASSWORD_RESET )
			{
				return $this->response( 'success', trans( 'form.flash.resetPwd.success' ) );
			}
			
			return $this->response( 'error', trans( 'form.flash.system.error' ) );
		}
		
		return $this->response( 'error' );
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Processing verify account
	 *
	 * @param str $key
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function verify ( $key )
	{
		$key        = urldecode( $key );
		
		$activation = UserActivation::whereCode( $key )->with( 'User' )->first();
		
		if( $activation && $activation->user->id )
		{
			// creating company after verify
			$company [ 'slug' ] 		= $activation->user->job_title;
			$company [ 'packages_id' ]  = 1;
			$company [ 'user_id' ]      = $activation->user_id;
			$company [ 'status' ]  		= 1;
			
			// create started outlet
			
			// update user
			$activation->user->job_title = "";
			$activation->user->status    = 1;
			$activation->user->verified  = 1;
			$activation->user->save();
				
			// try login
			Auth::loginUsingId( $activation->user_id );
				
			// delete the activation
			$activation->delete();
				
			return true;
		}
		
		return false;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Update Profile
	 * 
	 * @return object
	 * --------------------------------------------------------------------
	 */
	public function update ()
	{
		$inputkey = array( 'id', 'name', 'email', 'job_title', 'password' );
		$input    = $this->filterInput( $inputkey );
		
		if( $this->validate->onUpdateProfile( $input ) )
		{
			
			if( $input [ 'password' ] == null )
			{
				unset( $input [ 'password' ] );
			}
			else {
				$input [ 'password' ] = \Hash::make( $input [ 'password' ] );
			}
			
			if( $this->repository->update( $input [ 'id' ], $input ) )
			{
				return $this->response( 'success', trans( 'form.flash.UpdateProfile.success' ) );
			}
			
			return $this->response( 'error', trans( 'form.flash.system.error' ) );
		}
		
		return $this->response( 'error' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Updating Avatar
	 * 
	 * @return object
	 * --------------------------------------------------------------------
	 */
	public function updateAvatar ()
	{
		$inputkey = array( 'id', 'avatar' );
		$input    = $this->filterInput( $inputkey );
		
		if( $this->validate->onUpdateAvatar($input) )
		{
			if( $this->repository->update( $input [ 'id' ], $input ) )
			{
				$v = str_random( 4 );
				return $this->response( 'success', null, $input [ 'avatar' ].'?v='.$v );
			}
		}
		
		return $this->response( 'error' );
	}
	// --------------------------------------------------------------------
	
}