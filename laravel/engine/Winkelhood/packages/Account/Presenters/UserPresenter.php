<?php
namespace Winkelhood\Account\Presenters;
use McCool\LaravelAutoPresenter\BasePresenter;

/**
 * User Object Presenter
 *
 * Automatically decorates objects bound to views during the view render process
 *
 * @category Presenters
 * @package Winkel
 * @version 1
 * @author Alif Amri Suri
 * @since Apr 23, 2014
 */
class UserPresenter extends BasePresenter
{

	/**
	 * Present picture avatar user
	 *
	 * @return string 
	 * --------------------------------------------------------------------
	 */
	public function picture ()
	{
		if ( is_null( $this->avatar ) ) {
			$avatar = '/assets/img/profiles/default.jpg';
		}
		else {
			$avatar = $this->avatar;
		}
		
		return $avatar;
	
	}
	// --------------------------------------------------------------------
	
	/**
	 * Present Role user
	 *
	 * @return string 
	 * --------------------------------------------------------------------
	 */
	public function role() 
	{
		return $this->Usergroup->name;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Present Sortname
	 * 
	 * @return string
	 * --------------------------------------------------------------------
	 */
	public function sortname()
	{
		$name = $this->name;
		
		if( strlen( $name ) > 18  )
		{
			$name = akronim_name( $name );
			
			if( strlen( $name ) > 18  ) {
				$name = akronim_name( $name, 'first_middle_only' );
				
				if( strlen( $name ) > 18  ) {
					$name = akronim_name( $name, 'first_only' );
				}
			}
		}
		
		return $name;
	}
	// --------------------------------------------------------------------
	
	
}