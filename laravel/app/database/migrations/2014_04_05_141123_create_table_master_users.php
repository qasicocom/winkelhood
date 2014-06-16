<?php
/**
 * Master Users Migrations
 *
 * table of:
 * - m_user_groups
 * - m_users
 */
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableMasterUsers extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up ()
	{
		// m_usergroups
		Schema::create( 'm_usergroups', 
			function  ( Blueprint $table )
			{
				$table->increments( 'id' );
				$table->string( 'name', 20 );
			} 
		);
		
		Schema::create( 'm_usergroup_privileges',
			function  ( $table )
			{
				$table->increments 	( 'id' );
				$table->integer 	( 'usergroup' )
				->unsigned 	();
				$table->integer 	( 'modules_id' )
				->unsigned 	();
			
				$table->foreign 	( 'usergroup' )
				->references  ( 'id' )
				->on 			( 'm_usergroups' )
				->onDelete( 'cascade' );
			
				$table->foreign( 'modules_id' )
				->references( 'id' )
				->on( 'm_modules' )
				->onDelete( 'cascade' );
			}
		);
		
		// m_users
		Schema::create( 'm_users', 
			function  ( Blueprint $table )
			{
				$table->increments 		( 'id' );
				$table->integer 		( 'usergroup' )
					  ->unsigned 		();
				$table->string 			( 'email', 100 );
				$table->string 	 		( 'password', 64 );
				$table->string 			( 'name', 64 )
					  ->nullable 		();
				$table->string 			( 'avatar', 255 )
					  ->nullable 		();
				$table->string 			( 'job_title', 100 )
					  ->nullable 		();
				$table->string 	 		( 'locale', 10 )
					  ->nullable 		();
				$table->boolean 		( 'status' )
					  ->nullable        ()
					  ->default         ( 0 );
				$table->boolean     	( 'verified' )
					  ->nullable        ()
					  ->default         ( 0 );
				$table->timestamp       ( 'last_login' )
					  ->nullable        ();
				$table->timestamps      ();
				$table->string 			('remember_token', 100)
					  ->nullable 		();
				$table->foreign         ( 'usergroup' )
					  ->references      ( 'id' )
					  ->on              ( 'm_usergroups' )
					  ->onDelete        ( 'cascade' );
			}
		);
		
		Schema::create( 'm_user_activations',
			function ( Blueprint $table )
			{
				$table->increments( 'id' );
				$table->integer( 'user_id' );
				$table->string( 'code', 100 );
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
		Schema::table( 'm_users', 
            function  ( Blueprint $table )
            {
                $table->dropForeign( 'm_users_usergroup_foreign' );
            } 
        );
		
		Schema::table( 'm_usergroup_privileges',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'm_usergroup_privileges_usergroup_foreign' );
				$table->dropForeign( 'm_usergroup_privileges_modules_id_foreign' );
			}
		);
		
		Schema::drop( 'm_usergroup_privileges' );
		
        
        Schema::drop( 'm_usergroups' );
        
        Schema::drop( 'm_users' );
        
        Schema::drop( 'm_user_activations' );
	}

}
