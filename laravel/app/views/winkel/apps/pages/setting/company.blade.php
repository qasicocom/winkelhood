@section( 'content' )

	<div class="page-header">
	
		<button type="button" class="navbar-toggle collapsed" id="toggle-mmc"><i class="navbar-icon fa fa-bars"></i></button>
		<h1><i class="fa {{ $header_icon }}"></i>&nbsp; {{ $header_title }}</h1>
		
	</div>
	<div id="pa-page-alerts-box">
		{{ Form::flashMessage( 'messages', 'alert-page pa_page_alerts_dark '.Session::get('status') ) }}
	</div>
	<div class="page-nav">
		{{ $header_nav }}
		<div class="clearfix"></div>
	</div>
	
	<div class="row">
		<div class="col-md-8">
			<div class="panel colourable no-border">
				{{ Form::open( array( 'class' => 'form-ajax form-horizontal form-bordered' ) ) }}
				<div class="panel-body no-padding-hr">
				
					<div class="form-group no-margin-hr panel-padding-h no-padding-t no-border-t">
						<div class="row">
							{{ Form::label ( 'name', trans( 'form.label.name.company' ), array('class' => 'control-label col-sm-3')) }}
							<div class="col-sm-7 field-name">
								{{ Form::text  ( 'name', $company->name, array( 'class'=>'form-control' ) ) }}
							</div>
						</div>
					</div>
					
					<div class="form-group no-margin-hr panel-padding-h">
						<div class="row">
							{{ Form::label ( 'industry_id', trans( 'form.label.industry' ), array('class' => 'control-label col-sm-3')) }}
							<div class="col-sm-7 field-industry_id">
								{{ $industry }}
							</div>
						</div>
					</div>
					
					<div class="form-group no-margin-hr panel-padding-h">
						<div class="row">
							{{ Form::label ( 'address', trans( 'form.label.address.company' ), array('class' => 'control-label col-sm-3')) }}
							<div class="col-sm-7 field-address">
								<textarea name="address" rows="" cols="" spellcheck="false" class="form-control noresize">{{ $company->address }}</textarea>
							</div>
						</div>
					</div>
					
					@include ( 'plugins.city.form', array( 'layout' => 'bordered' ) )
					
					<div class="form-group no-margin-hr panel-padding-h no-margin-b">
						<div class="row">
							{{ Form::label ( 'phone', trans( 'form.label.phone' ), array('class' => 'control-label col-sm-3')) }}
							<div class="col-sm-7 field-phone">
								{{ Form::text  ( 'phone', $company->phone, array( 'class'=>'form-control' ) ) }}
							</div>
						</div>
					</div>
				</div>
				<div class="panel-footer">
					<button type="submit" class="btn btn-primary loading-state pull-right">{{ trans( 'form.button.save' ) }}</button>
					<div class="clearfix"></div>
				</div>
				{{ Form::close() }}	
			</div>
		</div>
	</div>

	
@endsection