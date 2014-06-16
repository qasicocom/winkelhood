@section ( 'content' )
<div class="col-lg-6 col-lg-offset-3">
	{{ Form::open( array( 'url' => route('auth.signin.post'), 'class' => 'form' ) ) }}
	{{ Form::flashMessage( 'messages', Session::get('status') ) }}
	
	<div class="form-group w-icon {{ Form::isError( 'email' ) }}">
		{{ Form::text('email', Input::old('email'), array( 'class'=>'form-control input-lg',  'placeholder' => trans( 'form.label.email' ) ) ) }}
		<span class="fa fa-user form-icon"></span>
	</div>
	<div class="form-group w-icon {{ Form::isError( 'password' ) }}">
		{{ Form::password( 'password', array( 'class'=>'form-control input-lg', 'id'=>'password',  'placeholder' => trans( 'form.label.password' ) ) ) }}
		<span class="fa fa-lock form-icon"></span>
	</div>
	<div class="form-group">
		<label class="checkbox-inline">
			{{ Form::checkbox('remember', '1', 0, array( 'id'=>'remember', 'class'=>'px' ) ) }}
			<span class="lbl">{{ trans( 'form.label.remember' ) }}</span>
		</label>
		<p class="pull-right">
			<a href="{{ URL::to('lostpwd') }}" class="forgot-password" id="forgot-password-link">{{ trans( 'form.label.forgotpass' ) }}</a>
		</p>
	</div>
	<div class="form-actions">
	{{ Form::submit( trans( 'form.button.signin' ), array('class'=>'btn btn-primary btn-block') ) }}
	</div>
	{{ Form::close() }}	
</div>
@endsection