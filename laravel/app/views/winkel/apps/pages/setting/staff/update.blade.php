@section ( 'content' )

	<div class="row">
		<div class="col-sm-6">
			<div class="form-group field-name">
				{{ Form::label ( 'name', trans( 'form.label.name.user' ), array('class' => 'control-label')) }}
				{{ Form::text  ( 'name', $staff->name, array( 'class'=>'form-control' ) ) }}
			</div>
			<div class="form-group field-email">
				{{ Form::label ( 'email', trans( 'form.label.email' ), array('class' => 'control-label')) }}
				{{ Form::text  ( 'email', $staff->email, array( 'class'=>'form-control', 'autocomplete' => 'off' ) ) }}
			</div>
			<div class="form-group field-password">
				{{ Form::label ( 'password', trans( 'form.label.password' ), array('class' => 'control-label')) }}
				{{ Form::password( 'password', array( 'class'=>'form-control', 'autocomplete' => 'off' ) ) }}
			</div>
		</div>
		<div class="col-sm-6">
			<div class="form-group field-job_title">
				{{ Form::label ( 'job_title', trans( 'form.label.job' ), array('class' => 'control-label')) }}
				{{ Form::text  ( 'job_title', $staff->job_title, array( 'class'=>'form-control' ) ) }}
			</div>
			<div class="form-group field-usergroup">
				{{ Form::label ( 'usergroup', trans( 'form.label.usergroup' ), array('class' => 'control-label')) }}
				{{ $usergroup }}
			</div>
		</div>
	</div>

@endsection

@section ( 'action' )

	<button type="button" class="btn btn-white" data-dismiss="modal">{{ trans( 'form.button.cancel' ) }}</button>
	<button type="submit" class="btn btn-primary loading-state">{{ trans( 'form.button.save' ) }}</button>

@endsection