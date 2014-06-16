@section( 'content' )

	<div class="page-header">
	
		<button type="button" class="navbar-toggle collapsed" id="toggle-mmc"><i class="navbar-icon fa fa-bars"></i></button>
		
		<h1 class="bordered"><i class="fa {{ $header_icon }}"></i>&nbsp; {{ $header_title }}</h1>
		
		<div class="panel-search hidden-xs">
			{{ Form::text  ( 'name', '', array( 'class'=>'form-control input-lg panel-search searchdt', 'placeholder' => $header_search ) ) }}
		</div>
		
		<div class="panel-action pull-right">
			{{ $header_action }}
		</div>
		
	</div>
	<div id="pa-page-alerts-box">
		{{ Form::flashMessage( 'messages', 'alert-page pa_page_alerts_dark '.Session::get('status') ) }}
	</div>
	<div class="page-nav">
		{{ $header_nav }}
		<div class="clearfix"></div>
	</div>
	
	<div class="panel panel-transparent">
		{{ $subview }}
	</div>

@endsection