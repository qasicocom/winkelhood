<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableRetailPo extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		
		Schema::create( 'retail_purchase_order_request',
			function ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'outlet_id' )
					  ->unsigned       ();
				$table->integer        ( 'product_id', false, true );
				$table->integer        ( 'quantity' );
				$table->tinyInteger    ( 'status' )
					  ->nullable       ()
					  ->default        ( 0 );
				$table->timestamps     ();
			
				$table->foreign        ( 'outlet_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_outlet' )
					  ->onDelete       ( 'cascade' );
				
				$table->foreign        ( 'product_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_product_variant' )
					  ->onDelete       ( 'cascade' );
			}
		);
		
		Schema::create( 'retail_purchase_order',
			function ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'company_id' )
					  ->unsigned       ();
				$table->integer        ( 'outlet_id' )
					  ->unsigned       ();
				$table->integer        ( 'supplier_id' )
					  ->unsigned       ();
				$table->decimal        ( 'shipping_prices', 10, 0 )
				 	  ->nullable       ()
					  ->default        ( 0 );
				$table->integer        ( 'tax' )
					  ->nullable       ()
					  ->default        ( 0 );
				$table->text           ( 'note' )
					  ->nullable       ();
				$table->tinyInteger    ( 'status' )
					  ->nullable       ()
					  ->default        ( 0 );
				$table->tinyInteger    ( 'is_payed' )
					  ->nullable	   ()
					  ->default 	   ( 0 );
				$table->tinyInteger    ( 'is_shipped' )
					  ->nullable	   ()
					  ->default 	   ( 0 );
				$table->timestamps     ();
			
				$table->foreign        ( 'company_id' )
					  ->references     ( 'id' )
					  ->on             ( 'm_company' )
					  ->onDelete       ( 'cascade' );
				
				$table->foreign        ( 'outlet_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_outlet' )
					  ->onDelete       ( 'cascade' );
				
				$table->foreign        ( 'supplier_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_supplier' )
					  ->onDelete       ( 'cascade' );
			}
		);
		
		Schema::create( 'retail_purchase_order_detail',
			function ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'purchase_order_id' )
					  ->unsigned       ();
				$table->integer        ( 'product_id' )
					  ->unsigned       ();
				$table->integer        ( 'quantity' );
				$table->integer        ( 'nogood' )
				      ->nullable       ()
					  ->default        ( 0 );
				$table->decimal        ( 'unit_prices', 10, 0 );
				$table->tinyInteger    ( 'status' )
					  ->nullable       ()
					  ->default        ( 0 );
				$table->timestamps     ();
			
				$table->foreign        ( 'purchase_order_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_purchase_order' )
					  ->onDelete       ( 'cascade' );
			
				$table->foreign        ( 'product_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_product_variant' )
					  ->onDelete       ( 'cascade' );
			}
		);
		
		Schema::create( 'retail_purchase_order_payment',
			function ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'purchase_order_id' )
					  ->unsigned       ();
				$table->decimal        ( 'amount', 10, 0 );
				$table->tinyInteger    ( 'is_cash' )
					  ->nullable       ()
					  ->default        ( 0 );
				$table->string         ( 'code', 45 )
					  ->nullable 	   ();
				$table->integer        ( 'payment_type_id' )
					  ->nullable       ()
					  ->unsigned       ();
				$table->timestamp      ( 'duedate_payment' )
					  ->nullable       ();
				$table->timestamp      ( 'settled_payment' )
					  ->nullable       ();
				$table->tinyInteger    ( 'status' )
					  ->nullable       ()
					  ->default        ( 0 );
				$table->timestamps     ();
				 
				$table->foreign        ( 'purchase_order_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_purchase_order' )
					  ->onDelete       ( 'cascade' );
			
				$table->foreign        ( 'payment_type_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_payment_type' )
					  ->onDelete       ( 'cascade' );
			}
		);
		
		Schema::create( 'retail_purchase_order_receiving',
			function ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'purchase_order_id' )
					  ->unsigned       ();
				$table->text           ( 'note' )
					  ->nullable       ();
				$table->tinyInteger    ( 'status' )
					  ->nullable       ()
					  ->default        ( 0 );
				$table->timestamps     ();
			
				$table->foreign        ( 'purchase_order_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_purchase_order' )
					  ->onDelete       ( 'cascade' );
			}
		);
		
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table( 'retail_purchase_order_receiving',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_purchase_order_receiving_purchase_order_id_foreign' );
			}
		);
		
		Schema::table( 'retail_purchase_order_payment',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_purchase_order_payment_purchase_order_id_foreign' );
				$table->dropForeign( 'retail_purchase_order_payment_payment_type_id_foreign' );
			}
		);
		
		Schema::table( 'retail_purchase_order_detail',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_purchase_order_detail_purchase_order_id_foreign' );
				$table->dropForeign( 'retail_purchase_order_detail_product_id_foreign' );
			}
		);
		
		Schema::table( 'retail_purchase_order',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_purchase_order_company_id_foreign' );
				$table->dropForeign( 'retail_purchase_order_outlet_id_foreign' );
				$table->dropForeign( 'retail_purchase_order_supplier_id_foreign' );
			}
		);
		
		Schema::table( 'retail_purchase_order_request',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_purchase_order_request_outlet_id_foreign' );
				$table->dropForeign( 'retail_purchase_order_request_product_id_foreign' );
			}
		);
		
		Schema::drop( 'retail_purchase_order_request' );
		Schema::drop( 'retail_purchase_order' );
		Schema::drop( 'retail_purchase_order_detail' );
		Schema::drop( 'retail_purchase_order_payment' );
		Schema::drop( 'retail_purchase_order_receiving' );
		
	}

}
