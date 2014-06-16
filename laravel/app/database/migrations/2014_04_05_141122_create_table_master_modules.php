<?php

use Illuminate\Support\Facades\Schema;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableMasterModules extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create( 'm_modules',
			function  ( Blueprint $table )
			{
				$table->increments( 'id' );
				$table->string( 'name', 50 );
				$table->text( 'desc', 50 )
					  ->nullable();
				
			} 
		);
		
		Schema::create( 'm_package_modules',
			function( Blueprint $table )
			{
				$table->integer( 'packages_id' )
					  ->unsigned();
				$table->integer( 'modules_id' )
					  ->unsigned();
				
				$table->foreign( 'packages_id' )
					  ->references( 'id' )
					  ->on( 'm_packages' )
					  ->onDelete( 'cascade' );
				
				$table->foreign( 'modules_id' )
					  ->references( 'id' )
					  ->on( 'm_modules' )
					  ->onDelete( 'cascade' );
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
		
		Schema::table( 'm_package_modules',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'm_package_modules_packages_id_foreign' );
				$table->dropForeign( 'm_package_modules_modules_id_foreign' );
			}
		);
		
		Schema::drop( 'm_package_modules' );
		
		Schema::drop( 'm_modules' );
	}

}
