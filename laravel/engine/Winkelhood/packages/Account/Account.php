<?php
namespace Winkelhood\Account;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Auth;
use Winkelhood\Support\Facades\Staff;
use Winkelhood\Outlet\Facades\Outlet;
use Winkelhood\Company\Facades\Company;
use Winkelhood\Account\Processors\UserProcessor;
use Winkelhood\Account\Processors\UsergroupProcessor;

/**
 * Account Packages Layer
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014
 * @category PackagesLayer
 * @package Winkelhood/Account
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class Account
{
	/**
	 * Stored User Processor object
	 * 
	 * @var object Winkelhood\Account\Processors\User
	 * --------------------------------------------------------------------
	 */
	protected $user;
	// --------------------------------------------------------------------
	
	/**
	 * Stored usergroup Processor object
	 * 
	 * @var object Winkelhood\Account\Processors\Usergroup
	 * --------------------------------------------------------------------
	 */
	protected $usergroup;
	// --------------------------------------------------------------------
	
	/**
	 * Class Constructor
	 * 
	 * @param User $user
	 * @param Usergroup $usergroup
	 * --------------------------------------------------------------------
	 */
	public function __construct( UserProcessor $user, UsergroupProcessor $usergroup )
	{
		$this->user      = $user;
		$this->usergroup = $usergroup;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Aliasing User Processors
	 * 
	 * @return object
	 * --------------------------------------------------------------------
	 */
	public function user ()
	{
		return $this->user;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Aliasing Usergroup Processors
	 * 
	 * @return object
	 * --------------------------------------------------------------------
	 */
	public function usergroup ()
	{
		return $this->usergroup;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Read from auth user and get privileges
	 * and other info of the user
	 * --------------------------------------------------------------------
	 */
	public function privileges ()
	{
		$privileges = array();
		
		$user = Auth::user();
		
		$privileges [ 'user' ] = $user;
		
		if( $user->usergroup < 2 )
		{
			// winkelhood admin
			$privileges [ 'baseUrl' ] = Config::get( 'app.costum.domain.system' );
				
		}
		else if( $user->usergroup == 2 )
		{
			// company owner
			$company = Company::findBy( 'user_id', $user->id );
				
			$privileges [ 'company' ] = $company;
			$privileges [ 'baseUrl' ] = 'http://' . $company->slug . '.' . Config::get( 'app.costum.domain.home' );
		}
		else {
			// company staff
			$company = Staff::company( $user->id );
				
			$privileges [ 'company' ] = $company;
			$privileges [ 'baseUrl' ] = 'http://' . $company->slug . '.' . Config::get( 'app.costum.domain.home' );
		}
		
		return (object) $privileges;
	}
	// --------------------------------------------------------------------
	
}