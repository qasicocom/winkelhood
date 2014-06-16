@section( 'content' )

<div class="row">
	<div class="col-md-4">
		<div style="background: #FFF; width: 120px; position: absolute; top: 10px; left: 40px;">
			<img src="{{ $me->picture }}" id="avatar" class="img-responsive" style="width: 100px; display: block; float: none; margin-bottom: 5px; margin-left:5px">
			<a href="#" target="_blank" class="btn btn-success" id="uploadme" data-target="#avatar" data-width="100" data-action="/setting/profile/avatar" data-name="images">Change Avatar</a>
		</div>
	</div>
	<div class="col-md-8">
		<div class="form-group field-name">
			{{ Form::label ( 'name', trans( 'form.label.name.user' ), array('class' => 'control-label')) }}
			{{ Form::text  ( 'name', $me->name, array( 'class'=>'form-control' ) ) }}
		</div>
		<div class="form-group field-email">
			{{ Form::label ( 'email', trans( 'form.label.email' ), array('class' => 'control-label')) }}
			{{ Form::text  ( 'email', $me->email, array( 'class'=>'form-control' ) ) }}
		</div>
		<div class="form-group field-job_title">
			{{ Form::label ( 'job_title', trans( 'form.label.job' ), array('class' => 'control-label')) }}
			{{ Form::text  ( 'job_title', $me->job_title, array( 'class'=>'form-control' ) ) }}
		</div>
		<div class="form-group field-password">
			{{ Form::label ( 'password', trans( 'form.label.password' ), array('class' => 'control-label')) }}
			{{ Form::password( 'password', array( 'class'=>'form-control' ) ) }}
		</div>
	</div>
</div>

@endsection

@section ( 'action' )

	<button type="button" class="btn btn-white" data-dismiss="modal">{{ trans( 'form.button.cancel' ) }}</button>
	<button type="submit" class="btn btn-primary loading-state">{{ trans( 'form.button.save' ) }}</button>

@endsection