<?php
namespace Winkelhood\Services\ViewComposer;

class Module 
{
	
	public function compose ( $view )
	{
		$view->with( $view->getData() );
	}
	
}