<?php
/**
 * Master Company Migration
 *
 * making of table:
 * - m_industry
 * - m_company
 */
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableMasterCompany extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up ()
	{
		Schema::create( 'm_industry', 
			function  ( Blueprint $table )
			{
				$table->increments( 'id' );
				$table->string( 'en', 150 );
				$table->string( 'in', 150 );
			} );
		
		// m_company
		Schema::create( 'm_company', 
			function  ( Blueprint $table )
			{
				$table->increments 	( 'id' );
				$table->integer 	( 'user_id' )
					  ->unsigned 	();
				$table->integer 	( 'industry_id' )
					  ->nullable 	()
					  ->unsigned 	();
				$table->integer 	( 'packages_id' )
				      ->unsigned 	();
				$table->string 		( 'name', 45 )
					  ->nullable 	();
				$table->string 		( 'slug', 45 );
				$table->text 		( 'address' )
					  ->nullable 	();
				$table->integer 	( 'kec_id' )
					  ->nullable 	()
					  ->unsigned 	();
				$table->string 		( 'phone', 25 )
					  ->nullable 	();
				$table->string 		( 'logo', 255 )
					  ->nullable 	();
				$table->tinyInteger ( 'status' )
				      ->nullable 	()
					  ->default 	( 1 );
				$table->timestamps  ();
				
				$table->foreign 	( 'user_id' )
					  ->references 	( 'id' )
					  ->on 			( 'm_users' )
					  ->onDelete 	( 'cascade' );
				
				$table->foreign 	( 'industry_id' )
					  ->references 	( 'id' )
					  ->on 			( 'm_industry' )
					  ->onDelete 	( 'cascade' );
				
				$table->foreign 	( 'packages_id' )
					  ->references 	( 'id' )
					  ->on 			( 'm_packages' )
					  ->onDelete 	( 'cascade' );
				
				// foreignkey user_id 1:1 with m_city_kec
				$table->foreign 	( 'kec_id' )
					  ->references 	( 'id' )
					  ->on 			( 'm_city_kec' )
					  ->onDelete 	( 'cascade' );
			} 
		);
		
		Schema::create( 'm_company_subscription',
			function( Blueprint $table )
			{
				$table->increments('id');
				$table->integer('company_id')
					  ->unsigned();
				$table->tinyInteger('type');
				$table->string( 'object' );
				$table->timestamps();
				
				$table->foreign( 'company_id' )
					  ->references( 'id' )
					  ->on( 'm_company' )
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
		Schema::table( 'm_company',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'm_company_user_id_foreign' );
				$table->dropForeign( 'm_company_industry_id_foreign' );
				$table->dropForeign( 'm_company_packages_id_foreign' );
				$table->dropForeign( 'm_company_kec_id_foreign' );
			}
		);
		
		Schema::table( 'm_company_subscription',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'm_company_subscription_company_id_foreign' );
			}
		);
		
		Schema::drop( 'm_industry' );
		
		Schema::drop( 'm_company' );
		
		Schema::drop( 'm_company_subscription' );
	}

}
