<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableRetailSo extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		
		Schema::create( 'retail_sales_order',
			function ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'outlet_id' )
					  ->unsigned       ();
				$table->integer        ( 'costumer_id' )
					  ->nullable       ()
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
			
				$table->foreign        ( 'outlet_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_outlet' )
					  ->onDelete       ( 'cascade' );
			
				$table->foreign        ( 'costumer_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_costumer' )
					  ->onDelete       ( 'cascade' );
			}
		);
		
		Schema::create( 'retail_sales_order_detail',
			function ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'sales_order_id' )
					  ->unsigned       ();
				$table->integer        ( 'product_id' )
					  ->unsigned       ();
				$table->integer        ( 'quantity' );
				$table->decimal        ( 'unit_prices', 10, 0 );
				$table->timestamps     ();
			
				$table->foreign        ( 'sales_order_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_sales_order' )
					  ->onDelete       ( 'cascade' );
			
				$table->foreign        ( 'product_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_product_variant' )
					  ->onDelete       ( 'cascade' );
			}
		);
		
		Schema::create( 'retail_sales_order_payment',
			function ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'sales_order_id' )
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
					
				$table->foreign        ( 'sales_order_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_sales_order' )
					  ->onDelete       ( 'cascade' );
			
				$table->foreign        ( 'payment_type_id' )
				  	  ->references     ( 'id' )
					  ->on             ( 'retail_payment_type' )
					  ->onDelete       ( 'cascade' );
			}
		);
		
		Schema::create( 'retail_sales_order_shipping',
			function ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'sales_order_id' )
					  ->unsigned       ();
				$table->string         ( 'logistic', 45 )
					  ->nullable       ();
				$table->string         ( 'code', 45 );
				$table->timestamp      ( 'delivery_date' )
					  ->nullable       ();
				$table->tinyInteger    ( 'status' )
				 	  ->nullable       ()
					  ->default        ( 0 );
				$table->timestamps     ();
					
				$table->foreign        ( 'sales_order_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_sales_order' )
					  ->onDelete       ( 'cascade' );
			}
		);
		
		Schema::create( 'retail_sales_order_return',
			function ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'sales_order_id' )
					  ->unsigned       ();
				$table->text           ( 'note' )
					  ->nullable       ();
				$table->tinyInteger    ( 'status' )
					  ->nullable       ()
					  ->default        ( 0 );
				$table->timestamps     ();
					
				$table->foreign        ( 'sales_order_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_sales_order' )
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
		Schema::table( 'retail_sales_order_return',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_sales_order_return_sales_order_id_foreign' );
			}
		);
		
		Schema::table( 'retail_sales_order_shipping',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_sales_order_shipping_sales_order_id_foreign' );
			}
		);
		
		Schema::table( 'retail_sales_order_payment',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_sales_order_payment_sales_order_id_foreign' );
				$table->dropForeign( 'retail_sales_order_payment_payment_type_id_foreign' );
			}
		);
		
		Schema::table( 'retail_sales_order_detail',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_sales_order_detail_sales_order_id_foreign' );
				$table->dropForeign( 'retail_sales_order_detail_product_id_foreign' );
			}
		);
		
		Schema::table( 'retail_sales_order',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_sales_order_outlet_id_foreign' );
				$table->dropForeign( 'retail_sales_order_costumer_id_foreign' );
			}
		);
		
		Schema::drop( 'retail_sales_order' );
		Schema::drop( 'retail_sales_order_detail' );
		Schema::drop( 'retail_sales_order_shipping' );
		Schema::drop( 'retail_sales_order_payment' );
		Schema::drop( 'retail_sales_order_return' );
	}

}
