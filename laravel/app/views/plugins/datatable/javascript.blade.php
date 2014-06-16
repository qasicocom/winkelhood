<script type="text/javascript">
init.push(function () {
	$.extend($.fn.dataTableExt.oStdClasses,{sWrapper:"dataTables_wrapper form-inline winkel-table",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm"});
		
    jQuery(document).ready(function(){

    	var tableElement = $('.{{ $class }}');
    	
    	tableElement.dataTable( {
    		"dom": 'Rlfrtip',
    		"stateSave": true,
    		"colReorder" : {
    			"realtime": true
    		},
			"sDom": "<'panel-body no-padding't><'panel-footer'<'col-md-6'i><'col-md-6'p><'clearfix'>>",
    		"sPaginationType": "bootstrap",
    		 "aoColumnDefs": [
              { 'bSortable': false, 'aTargets': [ {{ implode( ',', $noSorting ) }} ] }
    		],
    		@if ( isset( $sorting ))
    		"aaSorting": [[ {{ $sorting }}, "asc" ]],
    		@endif
    		"oLanguage": {
    			"sLengthMenu": "_MENU_ ",
    			"sInfo": "Showing <b>_START_ to _END_</b> of _TOTAL_ entries",
    			"sSearch":""
    		},
    		"fnInitComplete": function( oSettings ) { qasico.plugins(); },
    		"fnDrawCallback": function() { qasico.plugins(); },
    		@foreach ($options as $k => $o)
			{{ json_encode($k) }}: {{ json_encode($o) }},
			@endforeach
			@foreach ($callbacks as $k => $o)
			{{ json_encode($k) }}: {{ $o }},
	        @endforeach
    		bAutoWidth     : false
    	});

    	$('.searchdt').keyup(function(){
    		tableElement.fnFilter( $(this).val() );
  		})
    	
    });
});
</script>