<?php
namespace Winkelhood\Staff;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Staff\Validators\StaffValidator;
use Winkelhood\Staff\Repositories\StaffRepository;

/**
 * Staff Processors
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Jun 4, 2014 
 * @category Processors
 * @package  Winkelhood\Staff
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class Staff extends BaseProcessor
{
	/**
	 * Class Contructor
	 *
	 * @param OutletRepository $outlet
	 * @param UserRepository $user
	 * --------------------------------------------------------------------
	 */
	public function __construct( StaffRepository $repo, StaffValidator $validator )
	{
		$this->repository 	= $repo;
		$this->validate 	= $validator;
	}
	// --------------------------------------------------------------------
	
 	/**
	 * Create new staff
	 *
	 * @param array $input
	 * @return boolean | new staff_id
	 * --------------------------------------------------------------------
	 */
	public function create()
	{
		// get input only for this key
		$inputkey = array( 'company_id', 'outlet_id', 'name', 'email', 'password', 'job_title', 'usergroup' );
		$input    = $this->filterInput( $inputkey );
		
		if( $this->validate->onCreate( $input ) )
		{
			if( $staff = $this->repository->create( $input ) )
			{
				return $this->response( 'success', trans( 'form.flash.entity.created' ) );
			}
			
			return $this->response( 'error', trans( 'form.flash.system.error' ) );
		}
		
		return $this->response( 'error' );
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Update existing costumer
	 *
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function update ()
	{
		
		// get input only for this key
		$inputkey = array( 'id_e', 'company_id', 'outlet_id', 'name', 'email', 'password', 'job_title', 'usergroup' );
		$input    = $this->filterInput( $inputkey );
		
		if( $staff = $this->repository->find( $input [ 'id' ] ) )
		{
			$input [ 'user_id' ] = $staff->user_id;
			
			// validate the input
			if( $this->validate->onUpdate( $input ) )
			{
				if( $staff = $this->repository->update( $input [ 'id' ], $input ) )
				{
					return $this->response( 'success', trans( 'form.flash.entity.updated' ) );
				}
			}
			
			return $this->response( 'error' );
		}
		
		return $this->response( 'error', trans( 'form.flash.system.error' ) );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Delete existing costumer
	 *
	 * @param array $input
	 * --------------------------------------------------------------------
	 */
	public function delete ()
	{
		// get input only for this key
		$inputkey = array( 'id_e', 'company_id', 'outlet_id' );
		$input    = $this->filterInput( $inputkey );
		
		if( $this->validate->onDelete( $input ) )
		{
			if( $delete = $this->repo->delete( $input [ 'id' ] ) )
			{
				return $this->response( 'success', trans( 'form.flash.entity.deleted' ) );
			}
			
			return $this->response( 'error', trans( 'form.flash.system.error' ) );
		}
		
		return $this->response( 'error' );
		
	}
	// --------------------------------------------------------------------

}