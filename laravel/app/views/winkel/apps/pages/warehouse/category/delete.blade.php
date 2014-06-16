@section( 'content' )

	{{ Form::open( array( 'class' => 'form-ajax' ) ) }}

	<div class="modal-body">
		<p><strong>Are you sure want to delete this ?</strong><br/></p>
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-white" data-dismiss="modal">{{ trans( 'form.button.cancel' ) }}</button>
		{{ Form::submit( trans( 'form.button.delete' ), array('class'=>'btn btn-warning loading-state') ) }}
	</div>
	
	{{ Form::close() }}	
@endsection