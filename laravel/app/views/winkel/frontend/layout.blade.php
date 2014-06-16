<!doctype html>
<html class="no-js" lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{{ $title }}</title>
	
	@include ( 'winkel.css' )
	
</head>
<body class="theme-winkel page-home">

	<section id="content">
		<div class="wrapper">
			<div class="row">
				<div class="col-sm-5">
					<div id="app_info">
						
						<div class="logo">
							<h1>Winkelhood</h1>
							<span>Effortless Retail System</span>
						</div>
						<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
						laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit 
						lobortis nisl ut aliquip ex ea commodo consequat. 
						</p>
						
						<div class="buttons-with-margins">
							<a class="btn btn-lg btn-labeled btn-warning" href="{{ URL::to( route( 'auth.signup' ) ) }}"><span class="btn-label icon fa fa-rocket"></span>Signup Free</a>
							<a class="btn btn-lg btn-labeled btn-success" href="{{ URL::to( route( 'auth.signin' ) ) }}"><span class="btn-label icon fa fa-lock"></span>Signin Member</a>
						</div>
					</div>
				</div>
				<div class="col-sm-7">
					<iframe src="//www.youtube.com/embed/-mlSrKo16D0?rel=0&controls=0&autohide=1&showinfo=0&modestbranding=1&autoplay=0" frameborder="0" width="100%" height="330px" allowfullscreen></iframe> 
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