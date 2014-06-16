<?php
use Illuminate\Support\Facades\Schema;

/**
 * Master Packages Migration
 */
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableMasterPackages extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up ()
	{
		Schema::create( 'm_packages', 
			function  ( Blueprint $table )
			{
				$table->increments( 'id' );
				$table->string( 'name' );
				$table->text( 'desc' )
					  ->nullable();
				$table->decimal( 'prices', 10, 0 );
				$table->integer( 'num_outlets' );
				$table->integer( 'num_users' );
				$table->integer( 'num_product' );
				$table->string( 'support' );
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
		Schema::drop( 'm_packages' );
	}

}
