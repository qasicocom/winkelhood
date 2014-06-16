<?php


HTML::macro( 'ChangeLanguage', function ( $short = FALSE, $class = "" ) {

   // $lang = ( Session::get('locale') ) ? Session::get('locale') : Config::get( 'app.locale' );
    $lang = Config::get( 'app.locale' );
    $txt_en = ( $short ) ? 'EN' : 'English';
    $txt_id = ( $short ) ? 'ID' : 'Bahasa';
    
    if( $lang == 'id' ) {
        $url = '<a href="/locale/en" title="Ganti Bahasa" class="'.$class.'">'.$txt_en.'</a>';
    }
    else {
        $url = '<a href="/locale/id" title="Change Language" class="'.$class.'">'.$txt_id.'</a>';
    }
    
    return $url;
});

HTML::macro( 'ActionButton', function ( $button_class = "btn-mini btn-success", $link = array() ){

	$html  = '<div style="display:block; margin: 0 auto; width: 90px">';
    $html .= '<div class="btn-group btn-group-xs">';
    $html .= '<button class="btn '.$button_class.'">Action</button>';
    $html .= '<button class="btn '.$button_class.' dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-caret-down"></i> </button>';
    $html .= '<ul class="dropdown-menu">';
        foreach ( $link as $url => $anchor ) {
            $html .= '<li><a href="'.$url.'">'.$anchor.'</a></li>';
        }
    $html .= '</ul>';
    $html .= '</div>';
    $html .= '</div>';
    
    return $html;
});

HTML::macro( 'DatatableTools',
	function( $show = array(), $action = array() )
	{
		$html  = '<div class="btn-group btn-group-sm">';
		if( count( $show ) > 0 ) {
			foreach( $show as $btn )
			{
				$html .= '<button class="btn '. $btn [ 'class' ] .'" data-toggle="tooltip" data-placement="bottom" title="'. $btn [ 'title' ] .'"><i class="fa '. $btn [ 'icon' ] .'"></i></button>';
			}
		}
		if( count( $action ) > 0 ) 
		{
			foreach( $action as $link )
			{
				if( isset( $link [ 'icon' ] ) )
				{
					$link [ 'anchor' ] = '<span class="btn-label icon fa '. $link [ 'icon' ] .'"></span> ' . $link [ 'anchor' ];
					$link [ 'class' ]  = "btn-labeled " . $link [ 'class' ];
				}
				
				$popupAttr = "";
				if( isset( $link [ 'popup'] ) )
				{
					$link [ 'class' ]  = "xmodal " . $link [ 'class' ];
					
					$attr = 'data-size="modal-'.$link [ 'popup'].'"';
					
					$popupAttr = $attr.' data-api="true" data-target="#modal"';	
				}
				
				$html .= '<a href="'. $link [ 'target' ] .'" class="btn '. $link [ 'class' ] .'" '. $popupAttr .'>'. $link [ 'anchor' ] .'</a>';
			}
		}
		$html .= '</div>';
		
		return $html;
	}
);

HTML::macro( 'popover', 
	function( $title, $content, $position = 'right' )
	{
		return 'data-toggle="popover" data-placement="'.$position.'" data-content="'.$content.'" data-title="'.$title.'" ';
	}
);

HTML::macro( 'tableAction', 
	function( $update = array(), $delete = array() )
	{
		
		$html  = '<div class="text-center"><div class="btn-group">';
		
		if( count( $update ) > 0 ) {
			$size  = ( isset( $update [ 1 ] ) ) ? $update [1] : 'md';
			$html .= '<a href="'. $update [ 0 ] .'" class="btn btn-xs btn-primary btn-outline light ttips xmodal fa fa-pencil-square-o" data-api="true" data-target="#modal" data-size="modal-'. $size .'" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="'. trans( 'table.action.update' ). '"></a>';
		}
		
		if( count( $delete ) > 0 ) {
			$size  = ( isset( $delete [ 1 ] ) ) ? $delete [1] : 'md';
			$html .= '<a href="'. $delete [ 0 ] .'" class="btn btn-xs btn-danger btn-outline light ttips xmodal fa fa-times-circle" data-api="true" data-target="#modal" data-size="modal-'. $size .'" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="'. trans( 'table.action.delete' ). '" style="margin-left:-1px"></a>';
		}
		
		$html .= '</div></div>';
		
		return $html;
	}
);