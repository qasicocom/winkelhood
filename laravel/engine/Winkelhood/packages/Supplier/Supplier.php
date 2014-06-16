<?php
namespace Winkelhood\Supplier;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Supplier\Validators\SupplierValidator;
use Winkelhood\Supplier\Repositories\SupplierRepository;

/**
 * Supplier Package Layers
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014
 * @category PackageLayers
 * @package  Winkelhood\Supplier
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class Supplier extends BaseProcessor
{

	/**
	 * Class Constructor
	 *
	 * @param SupplierRepository $supplier
	 * --------------------------------------------------------------------
	 */
	public function __construct( SupplierRepository $repo, SupplierValidator $validator )
	{
		$this->repository 	= $repo;
		$this->validate 	= $validator;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Create new supplier
	 *
	 * @param array $input
	 * @return boolean | new costumer_id
	 * --------------------------------------------------------------------
	 */
	public function create()
	{
		// get input only for this key
		$inputkey = array( 'company_id', 'name', 'email', 'address', 'phone', 'kec_id', 'desc' );
		$input    = $this->filterInput( $inputkey );
		
		if( $this->validate->onCreate( $input ) )
		{
			if( $supplier = $this->repo->create( $input ) )
			{
				return $this->response( 'success', trans( 'form.flash.entity.created' ) );
			}
			
			return $this->response( 'error', trans( 'form.flash.system.error' ) );
		}
		
		return $this->response( 'error' );
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Update existing supplier
	 *
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function update ()
	{
		// get input only for this key
		$inputkey = array( 'id_e', 'company_id', 'name', 'email', 'address', 'phone', 'kec_id', 'desc' );
		$input    = $this->filterInput( $inputkey );
		
		if( $this->validate->onUpdate( $input ) )
		{
			if( $supplier = $this->repo->update( $input [ 'id' ], $input ) )
			{
				return $this->response( 'success', trans( 'form.flash.entity.updated' ) );
			}
			
			return $this->response( 'error', trans( 'form.flash.system.error' ) );
		}
		
		return $this->response( 'error' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * Delete existing supplier
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
			if( $supplier = $this->repo->delete( $input [ 'id' ] ) )
			{
				return $this->response( 'success', trans( 'form.flash.entity.deleted' ) );
			}
			
			return $this->response( 'error', trans( 'form.flash.system.error' ) );
		}
		
		return $this->response( 'error' );
	}
	// --------------------------------------------------------------------
	
}