<?php
namespace Apps\Setting;

class ProfileController extends \AppsController
{
	
	public function __construct ()
	{
		parent::__construct();
	}

	public function getIndex ()
	{
		$this->changeLayout( 'plugins.popup.layout-form' );
		
		$this->layout->title        = trans( 'title.settings.profile' );
		$this->layout->content      = $this->view( 'winkel.apps.pages.setting.profile' )->with( 'me', $this->me );
	}
	
	public function postUpdate ()
	{
		\Input::merge( [ 'id' => $this->me->id ] );
		
		$response = \Account::user()->update();
		
		if( $response->status = 'success' )
		{
			$response->modal = true;
		}
		
		return $this->responseJson( $response );
	}
	
	public function postAvatar ()
	{
		$upload = new \Winkelhood\services\Uploader;
		
		$img = $upload->avatar( $this->me->id );
		
		\Input::merge( [ 'id' => $this->me->id, 'avatar' => $img ] );
		
		$response = \Account::user()->updateAvatar();
		
		return $this->responseJson( $response );
		
	}
	
}