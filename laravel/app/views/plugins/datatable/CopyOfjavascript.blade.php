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
			"sDom": "<'panel-heading'<'col-md-3'<'t-title'>><'col-md-9'<'t-table visible-lg'><'t-datatable'f l><'t-action'>><'clearfix'>><'panel-body no-padding't><'panel-footer'<'col-md-6'i><'col-md-6'p><'clearfix'>>",
    		"sPaginationType": "bootstrap",
    		 "aoColumnDefs": [
              { 'bSortable': false, 'aTargets': [ {{ implode( ',', $noSorting ) }} ] }
    		],
    		"aaSorting": [[ {{ $sorting }}, "asc" ]],
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

    	$('.dataTables_filter input').addClass("input-medium"); 
        $('.dataTables_length select').addClass("select2"); 
        $('.dataTables_filter input').attr('placeholder', "{{ trans( 'table.field.search' ) }}" );

		@if ( isset ( $tableTitle ) && $tableTitle!= "" )
			$( ".t-title" ).html ( '<span class="panel-title">{{ $title }}</span>' );
		@endif	


		@if ( isset ( $tableTools ) && $tableTools!= "" )
			$(".t-table").html( '{{ $tableTools }}' );
			$('.tb-refresh').click( function() {
				new $.fn.dataTable.ColReorder( tableElement );
			});
		
		@endif
		
		@if ( isset ( $tableActions ) && $tableActions!= "" )
			$( ".t-action" ).html ( '{{ $tableActions }}' );
		
		@endif	
    });
});
</script>