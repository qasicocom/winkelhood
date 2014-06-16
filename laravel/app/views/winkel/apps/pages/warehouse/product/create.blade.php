<div class="form-bordered">

	<div class="form-group no-margin-hr panel-padding-h no-padding-t no-border-t">
		<div class="row">
			<div class="col-sm-4">
				<h3>Product Details</h3>
				<span>Write a name and descriptons and provide category and supplier detail</span>
			</div>
			<div class="col-sm-8">
				<div class="form-group no-border field-name">
					{{ Form::label ( 'name', trans( 'form.label.name.product' ), array('class' => 'control-label')) }}
					{{ Form::text  ( 'name', Input::old('name'), array( 'class'=>'form-control' ) ) }}
				</div>
				<div class="form-group no-border no-padding field-desc">
					{{ Form::label ( 'desc', trans( 'form.label.desc' ), array('class' => 'control-label')) }}
					<textarea name="desc" rows="" cols="" spellcheck="false" class="form-control noresize"></textarea>
					<p class="info">{{ trans( 'form.info.product.desc' ) }}</p>
				</div>
				<div class="form-group no-border no-padding">
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group no-border no-padding no-margin-hr">
								{{ Form::label ( 'category_id', trans( 'form.label.category' ), array('class' => 'control-label')) }}
								{{ Form::select( 'category_id', array(), '',  array( 'class'=>'form-control select2' ) ) }}
								<p class="text"><a href="" class="">{{ trans( 'title.category.create' ) }}</a></p>
								
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group no-border no-padding no-margin-hr">
								{{ Form::label ( 'supplier_id', trans( 'form.label.supplier' ), array('class' => 'control-label')) }}
								{{ Form::select( 'supplier_id', array(), '',  array( 'class'=>'form-control select2' ) ) }}
								<p class="text"><a href="" class="">{{ trans( 'title.supplier.create' ) }}</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="form-group no-margin-hr panel-padding-h">
		<div class="row">
			<div class="col-sm-4">
				<h3>Inventory &amp; Variant</h3>
				<span>Manage inventory, and configure the options for selling this product</span>
			</div>
			<div class="col-sm-8">
				<div class="form-group no-border">
					<div class="row">
						<div class="col-sm-6">
							<div class="form-group no-border no-padding no-margin-hr">
								{{ Form::label ( 'cost', trans( 'form.label.cost' ), array('class' => 'control-label')) }}
								{{ Form::text  ( 'cost', Input::old('cost'), array( 'class'=>'form-control' ) ) }}
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group no-border no-padding no-margin-hr">
								{{ Form::label ( 'pricing', trans( 'form.label.pricing' ), array('class' => 'control-label')) }}
								{{ Form::text  ( 'pricing', Input::old('pricing'), array( 'class'=>'form-control' ) ) }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="form-group no-margin-hr panel-padding-h">
		<div class="row">
			<div class="col-sm-4">
				<h3>Images</h3>
				<span>Upload images of this product</span>
			</div>
			<div class="col-sm-8">
			
			</div>
		</div>
	</div>
	<div class="form-group no-margin-hr panel-padding-h">
		<div class="row">
			<div class="col-sm-4">
				<h3>Visibility</h3>
				<span>Control whether this product can be seen on your store.</span>
			</div>
			<div class="col-sm-8">
			
			</div>
		</div>
	</div>

</div>