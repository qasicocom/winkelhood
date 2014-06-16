<!doctype html>

<!--[if IE 8]>         <html class="ie8"> <![endif]-->
<!--[if IE 9]>         <html class="ie9 gt-ie8"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="gt-ie8 gt-ie9 not-ie"> <!--<![endif]-->
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{{ $title }}</title>
	
	@include ( 'winkel.css' )
</head>
<body class="theme-winkel main-menu-animated">

	<div id="main-wrapper">
	
		<div id="main-menu" role="navigation">
			<div id="main-menu-inner">
				<div class="menu-header">
					<a href="/" class="logo">Winkelhood</a>
				</div> 
				@include ( 'winkel.apps.sidebar' )				
			</div>
		</div>
		
		<div id="content-wrapper">
			@yield('content')
		</div>
		
		<div id="main-menu-bg"></div>
	</div>
	<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true" data-load="0">
        <div class="modal-dialog"><div class="modal-content"></div></div>
    </div>
    
	@include ( 'winkel.js' )
	@yield( 'script' )
</body>
</html>