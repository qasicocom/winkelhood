@if( isset( $layout ) )
	
	<div class="form-group no-margin-hr panel-padding-h">
		<div class="row">
			{{ Form::label ( 'prop_id', trans( 'form.label.prop' ), array('class' => 'control-label col-sm-3')) }}
			<div class="col-sm-7 field-prop_id" id="chain_prop">
				{{ $propinsi_select }}
			</div>
		</div>
	</div>
	<div class="form-group no-margin-hr panel-padding-h">
		<div class="row">
			{{ Form::label ( 'kab_id', trans( 'form.label.kab' ), array('class' => 'control-label col-sm-3')) }}
			<div class="col-sm-7 field-kab_id" id="chain_kab">
				{{ $kabupaten_select }}
			</div>
		</div>
	</div>
	<div class="form-group no-margin-hr panel-padding-h">
		<div class="row">
			{{ Form::label ( 'kec_id', trans( 'form.label.kec' ), array('class' => 'control-label col-sm-3')) }}
			<div class="col-sm-7 field-kec_id" id="chain_kec">
				{{ $kecamatan_select }}
			</div>
		</div>
	</div>
	
@else 
	<div class="form-group field-prop_id" id="chain_prop">
		{{ Form::label ( 'prop_id', trans( 'form.label.prop' ), array('class' => 'control-label')) }}
		{{ $propinsi_select }}
	</div>
	<div class="form-group field-kab_id" id="chain_kab">
		{{ Form::label ( 'kab_id', trans( 'form.label.kab' ), array('class' => 'control-label')) }}
		{{ $kabupaten_select }}
	</div>
	<div class="form-group field-kec_id" id="chain_kec">
		{{ Form::label ( 'kec_id', trans( 'form.label.kec' ), array('class' => 'control-label')) }}
		{{ $kecamatan_select }}
	</div>
@endif