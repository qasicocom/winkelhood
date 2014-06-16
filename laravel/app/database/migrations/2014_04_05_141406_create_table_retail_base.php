<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableRetailBase extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		
		Schema::create( 'retail_payment_type',
            function ( Blueprint $table )
            {
                $table->increments( 'id' );
                $table->string ( 'name' );
            }
        );
		
		Schema::create( 'retail_outlet',
			function ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'company_id' )
					  ->unsigned       ();
				$table->string         ( 'name', 50 )
					  ->nullable       ();
				$table->string         ( 'code', 50 )
					  ->nullable       ();
				$table->text           ( 'address' )
					  ->nullable       ();
				$table->integer        ( 'kec_id' )
					  ->nullable       ()
					  ->unsigned       ();
				$table->string         ( 'phone', 25 )
					  ->nullable       ();
				$table->text           ( 'descriptions' )
					  ->nullable       ();
				$table->softDeletes    ();
				$table->timestamps     ();
			
				$table->foreign        ( 'company_id' )
					  ->references     ( 'id' )
					  ->on             ( 'm_company' )
					  ->onDelete       ( 'cascade' );
				
				// foreignkey user_id 1:1 with m_city_kec
				$table->foreign 		( 'kec_id' )
				   	  ->references 		( 'id' )
					  ->on 				( 'm_city_kec' )
					  ->onDelete 		( 'cascade' );
			
			}
		);
		
		Schema::create( 'retail_outlet_staff', 
			function ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'user_id' )
					  ->unsigned       ();
				$table->integer        ( 'outlet_id' )
					  ->unsigned       ();
				$table->softDeletes    ();
				$table->timestamps     ();
				
				$table->foreign        ( 'user_id' )
					  ->references     ( 'id' )
					  ->on             ( 'm_users' )
					  ->onDelete       ( 'cascade' );
				
				$table->foreign        ( 'outlet_id' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_outlet' )
					  ->onDelete       ( 'cascade' );
			}
		);
		
		Schema::create( 'retail_activity',
			function ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'company_id' )
					  ->unsigned       ();
				$table->integer        ( 'performed_by' )
					  ->unsigned       ();
				$table->integer        ( 'object_id' );
				$table->integer        ( 'type' );
				$table->timestamps     ();
			
				$table->foreign        ( 'company_id' )
					  ->references     ( 'id' )
					  ->on             ( 'm_company' )
					  ->onDelete       ( 'cascade' );
			
				$table->foreign        ( 'performed_by' )
					  ->references     ( 'id' )
					  ->on             ( 'retail_outlet_staff' )
					  ->onDelete       ( 'cascade' );
			}
		);
		
		Schema::create( 'retail_supplier',
			function ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'company_id' )
					  ->unsigned       ();
				$table->string         ( 'name', 50 );
				$table->string         ( 'email', 50 )
					  ->nullable       ();
				$table->text           ( 'address' )
					  ->nullable       ();
				$table->integer        ( 'kec_id' )
					  ->nullable       ()
					  ->unsigned       ();
				$table->string         ( 'phone', 25 )
					  ->nullable       ();
				$table->text 		   ( 'desc' )
					  ->nullable       ();
				$table->timestamps     ();
			
				$table->foreign        ( 'company_id' )
					  ->references     ( 'id' )
					  ->on             ( 'm_company' )
					  ->onDelete       ( 'cascade' );
				
				// foreignkey user_id 1:1 with m_city_kec
				$table->foreign 		( 'kec_id' )
					  ->references 		( 'id' )
					  ->on 				( 'm_city_kec' )
					  ->onDelete 		( 'cascade' );
			}
		);
		
		Schema::create( 'retail_costumer',
			function ( Blueprint $table )
			{
				$table->increments     ( 'id' );
				$table->integer        ( 'company_id' )
					  ->unsigned       ();
				$table->string         ( 'name', 50 );
				$table->string         ( 'email', 50 )
					  ->nullable       ();
				$table->text           ( 'address' )
					  ->nullable       ();
				$table->integer        ( 'kec_id' )
					  ->nullable       ()
					  ->unsigned       ();
				$table->string         ( 'phone', 25 )
					  ->nullable       ();
				$table->timestamps     ();
			
				$table->foreign        ( 'company_id' )
					  ->references     ( 'id' )
					  ->on             ( 'm_company' )
					  ->onDelete       ( 'cascade' );
				
				// foreignkey user_id 1:1 with m_city_kec
				$table->foreign        ( 'kec_id' )
					  ->references     ( 'id' )
					  ->on             ( 'm_city_kec' )
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
		//
		Schema::table( 'retail_costumer',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_costumer_company_id_foreign' );
				$table->dropForeign( 'retail_costumer_kec_id_foreign' );
			}
		);
		
		Schema::table( 'retail_supplier',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_supplier_company_id_foreign' );
				$table->dropForeign( 'retail_supplier_kec_id_foreign' );
			}
		);
		
		Schema::table( 'retail_activity',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_activity_company_id_foreign' );
				$table->dropForeign( 'retail_activity_performed_by_foreign' );
			}
		);
		
		Schema::table( 'retail_outlet_staff',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_outlet_staff_outlet_id_foreign' );
				$table->dropForeign( 'retail_outlet_staff_user_id_foreign' );
			}
		);
		
		Schema::table( 'retail_outlet',
			function  ( Blueprint $table )
			{
				$table->dropForeign( 'retail_outlet_company_id_foreign' );
				$table->dropForeign( 'retail_outlet_kec_id_foreign' );
			}
		);
		
		Schema::drop( 'retail_outlet' );
		Schema::drop( 'retail_outlet_staff' );
		Schema::drop( 'retail_activity' );
		Schema::drop( 'retail_supplier' );
		Schema::drop( 'retail_costumer' );
		Schema::drop( 'retail_payment_type' );
		
		
	}

}
