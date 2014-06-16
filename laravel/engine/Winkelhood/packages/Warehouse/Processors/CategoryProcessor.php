<?php
namespace Winkelhood\Warehouse\Processors;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Warehouse\Validators\CategoryValidator;
use Winkelhood\Warehouse\Repositories\CategoryRepository;

/**
 * Product Category Processors
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 18, 2014
 * @category Procesors
 * @package  Winkelhood\Warehouse
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class CategoryProcessor extends BaseProcessor
{
	
	/**
	 * Class Contructor
	 *
	 * @param OutletRepository $outlet
	 * @param CategoryRepository $category
	 * --------------------------------------------------------------------
	 */
	public function __construct( CategoryRepository $repo, CategoryValidator $validator )
	{
		$this->repository 	= $repo;
		$this->validate 	= $validator;
	}
	// --------------------------------------------------------------------
	
	/**
	 * 
	 * @return object
	 * --------------------------------------------------------------------
	 */
	public function create ()
	{
		// get input only for this key
		$inputkey = array( 'outlet_id', 'name', 'parent_id' );
		$input    = $this->filterInput( $inputkey );
		
		$input [ 'parent_id' ] = ( $input [ 'parent_id' ] == 0 ) ? NULL : $input [ 'parent_id' ];
		
		// validate the input
		if( $this->validate->onCreate( $input ) ) {

			if( $cat = $this->repo->create( $input ) )
			{
				return $this->response( 'success', trans( 'form.flash.entity.created' ) );
			}
			
			return $this->response( 'error', trans( 'form.flash.system.error' ) );
		}
		
		
		return $this->response( 'error' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * 
	 * @return object
	 * --------------------------------------------------------------------
	 */
	public function update ()
	{
		$inputkey = array ( 'id_e', 'outlet_id', 'name', 'parent_id' );
		$input 	  = $this->filterInput( $inputkey );
		
		$input [ 'parent_id' ] = ( $input [ 'parent_id' ] == 0 ) ? NULL : $input [ 'parent_id' ];

		if( $this->validate->onUpdate( $input ) ) {
			
			if( $cat = $this->repo->update ( $input ['id'], $input ) )
			{
				return $this->response( 'success', trans( 'form.flash.entity.updated' ) );
			}
			
			return $this->response( 'error', trans( 'form.flash.system.error' ) );
		}
		
		return $this->response( 'error' );
	}
	// --------------------------------------------------------------------
	
	/**
	 * 
	 * @return object
	 * --------------------------------------------------------------------
	 */
	public function delete ()
	{
		$inputkey = array ( 'id_e', 'outlet_id' );
		$input 	  = $this->filterInput( $inputkey );
		
		if( $this->validate->onDelete( $input ) ) {
				
			if( $cat = $this->repo->delete ( $input ['id'] ) )
			{
				return $this->response( 'success', trans( 'form.flash.entity.deleted' ) );
			}
				
			return $this->response( 'error', trans( 'form.flash.system.error' ) );
		}
		
		return $this->response( 'error' );
	}
	// --------------------------------------------------------------------
	
}