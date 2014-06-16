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
<body class="theme-winkel page-frontend">

	<section id="content">
		<div class="wrapper">
			<div class="row" id="frontend-container">
			<div class="col-sm-12">
				<h1 class="logo">
					<a href="{{ URL::to( route('auth.signin') ) }}" title="winkelhood" alt="winkelhood">
						Winkelhood
					</a>
				</h1>
				@yield( 'content' )
			</div>
			<div class="clearfix"></div>
			</div>
		</div>
	</section>
	
	<footer>
		<div class="wrapper">
			<div class="row">
				<div class="col-sm-12">
					<ul class="list-inline">
						<li><a href="">Home</a></li>
						<li><a href="">About</a></li>
						<li><a href="">Term of use</a></li>
						<li><a href="">Privacy Policy</a></li>
						<li><a href="">Pricing</a></li>
						<li><a href="">{{ HTML::ChangeLanguage() }}</a></li>
					</ul>
					<p><small>&copy; 2014 PT. Qasico. All Rights Reserved.</small></p>
				</div>
			</div>
		</div>
	</footer>
	
	
	@include ( 'winkel.js' )
</body>
</html>