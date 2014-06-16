@section('content')
<div class="col-sm-6 col-sm-offset-3">
	{{ Form::open( array( 'url' => route('auth.pwdreset.post'), 'class' => 'form', 'data-abide' => '' ) ) }}
	{{ Form::flashMessage( 'messages', Session::get('status') ) }}
    {{ Form::hidden( 'token', $token ) }}
    <p class="text-center">{{ trans( 'auth.page.pwdreset.desc' ) }}</p>
    <div class="form-group w-icon {{ Form::isError( 'email' ) }}">
		{{ Form::text('email', Input::old('email'), array( 'class'=>'form-control input-lg', 'placeholder' => trans( 'form.label.email' ) ) ) }}
		<span class="fa fa-user form-icon"></span>
		{{ Form::errorMessage( 'email' ) }}
	</div>
	<div class="form-group w-icon {{ Form::isError( 'password' ) }}">
		{{ Form::password('password', array( 'class' => 'form-control input-lg', 'placeholder' => trans('form.label.password') )) }}
		<span class="fa fa-lock form-icon"></span>
		{{ Form::errorMessage( 'password' ) }}
	</div>
	<div class="form-group w-icon {{ Form::isError( 'password_confirmation' ) }}">
		{{ Form::password('password_confirmation', array( 'class' => 'form-control input-lg', 'placeholder' => trans('form.label.repassword') )) }}
		<span class="fa fa-lock form-icon"></span>
		{{ Form::errorMessage( 'password_confirmation' ) }}
	</div>
    <div class="form-actions">
		{{ Form::submit( trans( 'form.button.pwdreset' ), array('class'=>'btn btn-primary btn-block') ) }}
	</div>
</div>
@endsection
