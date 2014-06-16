@section ( 'content' )

	<div class="row">
		<div class="col-sm-6">
			
			<div class="form-group field-name">
				{{ Form::label ( 'name', trans( 'form.label.name.user' ), array('class' => 'control-label')) }}
				{{ Form::text  ( 'name', Input::old('name'), array( 'class'=>'form-control' ) ) }}
			</div>
			<div class="form-group field-email">
				{{ Form::label ( 'email', trans( 'form.label.email' ), array('class' => 'control-label')) }}
				{{ Form::text  ( 'email', Input::old('email'), array( 'class'=>'form-control' ) ) }}
			</div>
			<div class="form-group field-address">
				{{ Form::label ( 'address', trans( 'form.label.alamat' ), array('class' => 'control-label')) }}
				<textarea name="address" rows="" cols="" spellcheck="false" class="form-control noresize"></textarea>
			</div>
			<div class="form-group field-phone">
				{{ Form::label ( 'phone', trans( 'form.label.phone' ), array('class' => 'control-label')) }}
				{{ Form::text  ( 'phone', Input::old('phone'), array( 'class'=>'form-control' ) ) }}
			</div>
		</div>
		<div class="col-sm-6">
			
			@include ( 'plugins.city.form' )
		</div>
	</div>

@endsection

@section ( 'action' )

	<button type="button" class="btn btn-white" data-dismiss="modal">{{ trans( 'form.button.cancel' ) }}</button>
	<button type="submit" class="btn btn-primary loading-state">{{ trans( 'form.button.save' ) }}</button>

@endsection