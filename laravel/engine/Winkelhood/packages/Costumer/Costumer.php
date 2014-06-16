<?php
namespace Winkelhood\Costumer;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Costumer\Repositories\CostumerRepository;
use Winkelhood\Costumer\Validators\CostumerValidator;

/**
 * Costumer Packages Layer
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014
 * @category PackagesLayer
 * @package Winkelhood/Costumer
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
class Costumer extends BaseProcessor
{
	
	/**
	 * Class Contructor
	 *
	 * @param CostumerRepository $costumer
	 * @param UserRepository $user
	 * --------------------------------------------------------------------
	 */
	public function __construct( CostumerRepository $repository, CostumerValidator $validator )
	{
		$this->repository = $repository;
		$this->validate   = $validator;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Create new costumer
	 *
	 * @param array $input
	 * @return boolean | new costumer_id
	 * --------------------------------------------------------------------
	 */
	public function create ()
	{
		// get input only for this key
		$inputkey = array( 'company_id', 'name', 'email', 'address', 'phone', 'kec_id' );
		$input    = $this->filterInput( $inputkey );
		
		if( $this->validate->onCreate( $input ) )
		{
			if( $costumer = $this->repository->create( $input ) )
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
		$inputkey = array( 'id_e', 'company_id', 'name', 'email', 'address', 'phone', 'kec_id' );
		$input    = $this->filterInput( $inputkey );
		
		if( $this->validate->onUpdate( $input ) )
		{
			if( $costumer = $this->repository->update( $input[ 'id' ], $input ) )
			{
				return $this->response( 'success', trans( 'form.flash.entity.updated' ) );
			}
			
			return $this->response( 'error', trans( 'form.flash.system.error' ) );
		}
		
		return $this->response( 'error' );
		
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
		$inputkey = array( 'id_e', 'company_id' );
		$input    = $this->filterInput( $inputkey );
		
		if( $this->validate->onDelete( $input ) )
		{
			if( $costumer = $this->repo->delete( $input[ 'id' ] ) )
			{
				return $this->response( 'success', trans( 'form.flash.entity.deleted' ) );
			}
			
			return $this->response( 'error', trans( 'form.flash.system.error' ) );
		}
		
		return $this->response( 'error' );
		
	}
	// --------------------------------------------------------------------
	
}