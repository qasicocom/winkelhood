@section ( 'content' )

	<div class="row">
		<div class="col-sm-12">
			<div class="form-group field-name">
				{{ Form::label ( 'name', trans( 'form.label.name.category' ), array('class' => 'control-label')) }}
				{{ Form::text  ( 'name', $category->name, array( 'class'=>'form-control' ) ) }}
			</div>
			<div class="form-group field-parent_id">
				{{ Form::label ( 'parent_id', trans( 'form.label.category.parent' ), array('class' => 'control-label')) }}
				{{ $category_select }}
			</div>
		</div>
	</div>
	
@endsection

@section ( 'action' )

	<button type="button" class="btn btn-white" data-dismiss="modal">{{ trans( 'form.button.cancel' ) }}</button>
	<button type="submit" class="btn btn-primary loading-state">{{ trans( 'form.button.save' ) }}</button>

@endsection