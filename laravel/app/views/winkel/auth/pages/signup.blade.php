@section ( 'content' )
<div class="col-lg-6 col-lg-offset-3" style="padding-bottom: 50px;">
	@if ( Session::get( 'user_registered' ) )
		
		{{ Form::flashMessage( 'messages', Session::get('status') ) }}
		<div class="">
			<p class="text-center">{{ trans( 'auth.page.signup.success_messages' ) }}</p>
		</div>
		
	@else
		{{ Form::open( array( 'url' => route('auth.signup.post'), 'class' => 'form' ) ) }}
			{{ Form::flashMessage( 'messages', Session::get('status') ) }}
			
			<div class="form-group w-icon {{ Form::isError( 'name' ) }}">
	            {{ Form::text('name', Input::old('name'), array( 'class'=>'form-control input-lg', 'placeholder' => trans( 'form.label.name.user' ) ) ) }}
				{{ Form::errorMessage( 'name' ) }}
				<span class="fa fa-user form-icon"></span>
			</div>
			<div class="form-group w-icon {{ Form::isError( 'email' ) }}">
				{{ Form::text('email', Input::old('email'), array( 'class'=>'form-control input-lg', 'placeholder' => trans( 'form.label.email' ) ) ) }}
				{{ Form::errorMessage( 'email' ) }}
				<span class="fa fa-envelope form-icon"></span>
			</div>
			<div class="form-group w-icon {{ Form::isError( 'password' ) }}">
				{{ Form::password( 'password', array( 'class'=>'form-control input-lg', 'id'=>'password', 'placeholder' => trans( 'form.label.password' ) ) ) }}
				{{ Form::errorMessage( 'password' ) }}
				<span class="fa fa-lock form-icon"></span>
			</div>
		
			<div class="form-group w-icon {{ Form::isError( 'slug' ) }} dark" id="input-callback">
				<div class="input-group">
					{{ Form::text('slug', Input::old('slug'), array( 'class'=>'slug-check just-char form-control input-lg', 'placeholder' => trans( 'form.label.slug' ) )) }}
					<span class="input-group-addon bg-warning no-border">.{{ Config::get( 'app.costum.domain.home' ) }}</span>
				</div>
				<p class="help-block">{{ Form::errorMessage( 'slug', false ) }}</p>
				<span class="fa fa-link form-icon"></span>
			</div>
			
			<div class="form-group">
				<p class="text-center"> {{ trans( 'form.label.term' ) }} </p>
			</div>
			
		<div class="form-actions">
			{{ Form::submit( trans( 'form.button.signup' ), array('class'=>'btn btn-lg btn-primary btn-block') ) }}
		</div>
		{{ Form::close() }}
	@endif
	
</div>
@endsection