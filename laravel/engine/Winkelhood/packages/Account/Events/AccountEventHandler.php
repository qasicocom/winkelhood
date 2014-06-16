<?php
namespace Winkelhood\Account\Events;
use Winkelhood\Account\Models\User;
use Winkelhood\Account\Models\UserActivation;

/**
 * Classes to handler all event for user table
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 9, 2014
 * @category EventHandler
 * @package Winkelhood\Account
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico Technologies Inc.
 */
class AccountEventHandler
{
	/**
	 * Handle user loggedin Event
	 * 
	 * @author Alif Amri Suri
	 * @since March 9, 2014
	 * @param object Auth
	 * --------------------------------------------------------------------
	 */
	public function onUserLogin ( User $user )
	{
		// Updating user last_login time
		$user->last_login = new \DateTime();
		$user->save();
		
		// @todo insert to outlet activity
		
		// @todo if user set remember checkbox, save the info of user email, company slug.
		if( \Input::get( 'remember' ) == 1 ) {
			$cookie_data [ 'email' ]    = $user->email;
			$cookie_data [ 'name' ]     = $user->name;
			$cookie_data [ 'avatar' ]   = $user->avatar;
			$cookie_data [ 'redirect' ] = $user->redirect;
			
			\Cookie::queue( 'remembered', serialize($cookie_data), 60 * 24 * 30 );
		}
	}
	// --------------------------------------------------------------------
	
	/**
	 * Handle user on signup event
	 * 
	 * @author Alif Amri Suri
	 * @since Apr 9, 2014
	 * @param obj $object
	 * --------------------------------------------------------------------
	 */
	public function onUserSignup( User  $user )
	{
		$activation_code = str_random(40);
		
		// save verification code
		$activations = new \Winkelhood\Account\Models\UserActivation;
		$activations->user_id = $user->id;
		$activations->code    = $activation_code;
		$activations->save();
		
		// send email verification
		$data[ 'token' ] = urlencode( $activation_code );
		
		\Mail::send( 'emails.auth.verification', $data,
			function  ( $message ) use ( $user )
			{
				$message->to( $user->email, $user->name )
				->subject( 'Email Verification' );
			}
		);
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Handle user on logout
	 * 
	 * @param unknown_type $object
	 * --------------------------------------------------------------------
	 */
	public function onUserLogout ( $object )
	{
		//
	}
	// --------------------------------------------------------------------
	
	/**
	 * Register the listeners for the subscriber.
	 *
	 * @param Illuminate\Events\Dispatcher $events        	
	 * @return array
	 * --------------------------------------------------------------------
	 */
	public function subscribe ( $events )
	{
		$events->listen( 'auth.login', 'Winkelhood\Account\Events\AccountEventHandler@onUserLogin' );
		$events->listen( 'auth.signup', 'Winkelhood\Account\Events\AccountEventHandler@onUserSignup' );
		$events->listen( 'auth.logout', 'Winkelhood\Account\Events\AccountEventHandler@onUserLogout' );
	}
	// --------------------------------------------------------------------
}