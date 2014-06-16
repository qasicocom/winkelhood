<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableMasterPricing extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create( 'm_pricing', 
			function( Blueprint $table )
			{
				$table->increments 	( 'id' );
				$table->string 		( 'type', 50 );
				$table->string 		( 'name', 50 )
					  ->nullable    ();
				$table->integer 	( 'number' )
					  ->nullable 	();
				$table->decimal 	( 'prices', 10, 0 );
				
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
		//
		Schema::drop( 'm_pricing' );
	}

}
