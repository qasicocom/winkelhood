<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableRetailProduct extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create( 'retail_product_category',
			function  ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'parent_id' )
				      ->unsigned  	   ()
					  ->nullable       ();
				$table->integer        ( 'outlet_id' )
					  ->unsigned       ();
				$table->string         ( 'name', 60 );
			
				$table->foreign( 'parent_id' )
					  ->references( 'id' )
					  ->on( 'retail_product_category' )
					  ->onDelete( 'cascade' );
				
				$table->foreign( 'outlet_id' )
					  ->references( 'id' )
					  ->on( 'retail_outlet' )
					  ->onDelete( 'cascade' );
			}
		);
		
		Schema::create( 'retail_product',
			function ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'outlet_id' )
					  ->unsigned       ();
				$table->integer        ( 'category_id' )
					  ->unsigned       ();
				$table->integer        ( 'supplier_id' )
					  ->nullable       ()
					  ->unsigned       ();
				$table->string         ( 'name', 100 );
				$table->text           ( 'descriptions' )
					  ->nullable       ();
				$table->string         ( 'warehouse', 100 )
					  ->nullable       ();
				$table->string         ( 'image', 255 )
					  ->nullable       ();
				$table->tinyInteger    ( 'status' )
					  ->nullable       ()
					  ->default        ( 0 );
				$table->tinyInteger    ( 'have_variant' )
					  ->nullable       ()
					  ->default        ( 0 );
				$table->integer        ( 'sales_count' )
					  ->nullable       ()
					  ->default        ( 0 );
				$table->timestamps     ();
			
				$table->foreign        ( 'outlet_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_outlet' )
					  ->onDelete       ( 'cascade' );
			
				$table->foreign        ( 'category_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_product_category' )
					  ->onDelete       ( 'cascade' );
			
				$table->foreign        ( 'supplier_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_supplier' )
					  ->onDelete       ( 'cascade' );
			}
		);
		
		Schema::create( 'retail_product_variant',
			function ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'product_id' )
					  ->unsigned       ();
				$table->string         ( 'code', 25 )
					  ->nullable 	   ();
				$table->string         ( 'name', 100 )
					  ->nullable       ();
				$table->decimal        ( 'base_prices', 10, 0 );
				$table->decimal        ( 'selling_prices', 10, 0 );
				$table->integer        ( 'stock' )
					  ->nullable       ()
					  ->default        ( 0 );
				$table->integer        ( 'nogood' )
					  ->nullable       ()
					  ->default        ( 0 );
					
				$table->foreign        ( 'product_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_product' )
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
		Schema::table( 'retail_product_category',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_product_category_outlet_id_foreign' );
				$table->dropForeign( 'retail_product_category_parent_id_foreign' );
			}
		);
		
		Schema::table( 'retail_product_variant',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_product_variant_product_id_foreign' );
			}
		);
		
		Schema::table( 'retail_product',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_product_supplier_id_foreign' );
				$table->dropForeign( 'retail_product_category_id_foreign' );
				$table->dropForeign( 'retail_product_outlet_id_foreign' );
			}
		);
		
		Schema::drop( 'retail_product_variant' );
		Schema::drop( 'retail_product' );
		Schema::drop( 'retail_product_category' );
	}

}
