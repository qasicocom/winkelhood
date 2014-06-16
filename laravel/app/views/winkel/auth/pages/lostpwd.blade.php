@section ( 'content' )
<div class="col-sm-6 col-sm-offset-3">
	{{ Form::open( array( 'url' => route('auth.lostpwd.post'), 'class' => 'form' ) ) }}
		{{ Form::flashMessage( 'messages', Session::get('status') ) }}
		<p class="text-center" >{{ trans( 'auth.page.lostpwd.desc' ) }}</p>
		
		<div class="form-group w-icon {{ Form::isError( 'email' ) }}">
			{{ Form::text('email', Input::old('email'), array( 'class'=>'form-control input-lg', 'placeholder' => trans( 'form.label.email' ) ) ) }}
			<span class="fa fa-user form-icon"></span>
			{{ Form::errorMessage( 'email' ) }}
		</div>
		<div class="form-actions">
		{{ Form::submit( trans('form.button.pwdreminder' ), array('class'=>'btn btn-primary btn-block') ) }}
		</div>
	{{ Form::close() }}
</div>
@endsection
