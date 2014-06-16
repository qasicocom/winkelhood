<div class="modal-header">
	<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	<h4 class="modal-title" id="myModalLabel">{{ $title }}</h4>
</div>

<div class="modal-body">
	@yield( 'content' )
</div>
<div class="modal-footer">
	@yield( 'action' )
</div>