<?php
use Illuminate\Support\Facades\Schema;

/**
 * Master City Migration
 *
 * Create table of :
 * - m_city_prop
 * - m_city_kab
 * - m_city_kec
 *
 * @author Alif Amri Suri
 * @updated Apr 5, 2014
 */

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableMasterCity extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up ()
	{
		// 1. Table m_city_prop
		Schema::create( 'm_city_prop', 
			function  ( Blueprint $table )
			{
				$table->increments( 'id' );
				$table->string( 'name', 45 );
			} 
		);
		
		
		// 2. Table m_city_kab
		// has relation 1 to many with m_city_prop with FK prop_id
		Schema::create( 'm_city_kab', 
			function  ( Blueprint $table )
			{
				$table->increments( 'id' );
				$table->integer( 'prop_id' )
					  ->unsigned();
				$table->string( 'name', 45 );
				
				$table->foreign( 'prop_id', 'm_city_kab_prop_id_fk' )
					  ->references( 'id' )
					  ->on( 'm_city_prop' )
					  ->onDelete( 'cascade' );
			} 
		);
		
		
		// 3. Table m_city_kec
		// has relation 1 to many with m_city_kab with FK kab_id
		Schema::create( 'm_city_kec', 
			function  ( Blueprint $table )
			{
				$table->increments( 'id' );
				$table->integer( 'kab_id' )
					  ->unsigned();
				$table->string( 'name', 45 );
				
				$table->foreign( 'kab_id', 'm_city_kec_kab_id_fk' )
					  ->references( 'id' )
					  ->on( 'm_city_kab' )
					  ->onDelete( 'cascade' );
			} 
		);
	
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down ()
	{
		// Drop FK before deleting tables
		Schema::table( 'm_city_kec',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'm_city_kec_kab_id_fk' );
			}
		);
		
		Schema::table( 'm_city_kab',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'm_city_kab_prop_id_fk' );
			}
		);
		
		Schema::drop( 'm_city_prop' );
		Schema::drop( 'm_city_kab' );
		Schema::drop( 'm_city_kec' );
	}

}
