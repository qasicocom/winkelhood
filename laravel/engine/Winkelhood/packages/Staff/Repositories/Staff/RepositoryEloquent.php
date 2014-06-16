<?php
namespace Winkelhood\Staff\Repositories\Staff;
use Winkelhood\Core\BaseRepository;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Staff\Repositories\StaffRepository;
use Winkelhood\Staff\Models\Staff;

/**
 * Eloquent Staff Repository
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 8, 2014 
 * @category RepositoryEloquent
 * @package Winkelhood\Staff
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements StaffRepository, Crudable
{
	
	/**
	 * Class contructor
	 * Define the model classes that will be used
	 *
	 * @param  Winkelhood\Staff\Models\Staff $model
	 * --------------------------------------------------------------------
	 */
	public function __construct( Staff $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkel\Repositories\Staff\StaffRepository::datatable()
	 * --------------------------------------------------------------------
	 */
	public function datatable ( $company_id, $filter = false, $access = false  )
	{
		if( is_null( $company_id ) && ! $access )
		{
			return false;
		}
		
		$query = \DB::table   ( 'retail_outlet_staff as staff' )
				   ->join     ( 'm_users as user', 'user.id', '=', 'staff.user_id' )
				   ->join     ( 'retail_outlet as outlet', 'outlet.id', '=', 'staff.outlet_id' )
				   ->join     ( 'm_usergroups as usergroup', 'usergroup.id', '=', 'user.usergroup')
				   ->where    ( 'outlet.company_id', '=', $company_id )
				   ->select   ( 'user.name', 'user.email', 'user.last_login' )
				   ->addSelect( 'staff.id' )
				   ->addSelect( 'usergroup.name as role' );
		
		if( $filter )
		{
			$query->where   ( 'user.name', 'like', '%'.$filter.'%' )
				  ->orWhere ( 'user.email', 'like', '%'.$filter.'%' )
				  ->orWhere ( 'usergroup.name', 'like', '%'.$filter.'%' );
		}
		
		return $query;
	}	
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkel\Repositories\Staff\StaffRepository::count()
	 * --------------------------------------------------------------------
	 */
	public function count ( $company_id )
	{
		$company = \Winkelhood\Company\Models\Company::find( $company_id );

		return $company->staffs->count();
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkel\Repositories\AbstractRepository::create()
	 * --------------------------------------------------------------------
	 */
	public function create ( array $input )
	{
		// create user staff
		$userData = array_only( $input, [ 'usergroup', 'email', 'name', 'password', 'job_title' ] );
		
		$userData [ 'password' ]  = \Hash::make( $userData [ 'password' ] );
		$userData [ 'status' ]    = 1;
		$userData [ 'verified' ]  = 1;
		
		$userrepo = \App::make( 'Winkelhood\Repository\User' );
		
		if( $user = $userrepo->create( $userData ) )
		{
			$staff [ 'user_id' ]   = $user->id;
			$staff [ 'outlet_id' ] = $input [ 'outlet_id' ];
			
			return $this->model->create( $staff );
		}
		
		return false;
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkelhood\Core\Repository::update()
	 * --------------------------------------------------------------------
	 */
	public function update ( $id, array $input )
	{
		
		$userData = array_only( $input, [ 'usergroup', 'email', 'name', 'password', 'job_title' ] );
			
		if( isset( $userData [ 'password' ] ) && $userData [ 'password' ] != null ) {
			$userData [ 'password' ]  = \Hash::make( $userData [ 'password' ] );
		}
			
		$userrepo = \App::make( 'Winkelhood\Repository\User' );
			
		return $userrepo->update( $input [ 'user_id' ], $userData );
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkelhood\Core\Repository::delete()
	 * --------------------------------------------------------------------
	 */
	public function delete ( $id )
	{
		if( $staff = $this->model->find( $id ) )
		{
			$userrepo = \App::make( 'Winkelhood\Repository\User' );
			$user     = $userrepo->find( $staff->user_id );
			
			// removing staff outlet
			$user->Outlet()->detach();
			
			// delete the user
			$user->status = 0;
			$user->save();
			
			return true;
		}
		
		return false;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Getting model outlet for this user
	 * 
	 * return \Winkelhood\Staff\Models\Staff@outlet
	 * --------------------------------------------------------------------
	 */
	public function outlet( $user_id )
	{
		$staff = $this->findBy( 'user_id', $user_id );
		return $staff->outlet;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Getting model company for this user
	 * 
	 * @see \Winkelhood\Staff\Repositories\Staff\StaffRepository::company()
	 * --------------------------------------------------------------------
	 */
	public function company ( $user_id )
	{
		$staff = $this->findBy( 'user_id', $user_id );
		return $staff->outlet->company()->first();
	}
	// --------------------------------------------------------------------
	
	public function find( $id, array $with = array() )
	{
		$query = \DB::table   ( 'retail_outlet_staff as staff' )
				->join     ( 'm_users as user', 'user.id', '=', 'staff.user_id' )
				->join     ( 'retail_outlet as outlet', 'outlet.id', '=', 'staff.outlet_id' )
				->join     ( 'm_usergroups as usergroup', 'usergroup.id', '=', 'user.usergroup')
				->where    ( 'staff.id', '=', $id )
				->select   ( 'user.id as user_id', 'user.name', 'user.email', 'user.last_login', 'user.usergroup', 'user.job_title' )
				->addSelect( 'staff.id' )
				->addSelect( 'usergroup.name as role' );
		
		return $query->first();
	}
	
}