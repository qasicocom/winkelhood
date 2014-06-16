<div class="modal-header">
	<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	<h4 class="modal-title" id="myModalLabel">{{ $title }}</h4>
</div>

{{ Form::open( array( 'class' => 'form-ajax' ) ) }}

	<div class="modal-body">
		@yield( 'content' )
	</div>
	
	<div class="modal-footer">
		@yield( 'action' )
	</div>

{{ Form::close() }}	

<script type="text/javascript">
jQuery(document).ready(function(){
	qasico.plugins();
});
</script>