<?php
namespace Winkelhood\Company;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Company\Repositories\CompanyRepository;
use Winkelhood\Company\Validators\CompanyValidator;

/**
 * Company Processor
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 17, 2014
 * @category PackagesLayer
 * @package Winkelhood/Company
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
class Company extends BaseProcessor
{
	
	/**
	 * Class Contructor
	 * 
	 * @param CompanyRepository $repo
	 * --------------------------------------------------------------------
	 */
	public function __construct( CompanyRepository $repo, CompanyValidator $validator )
	{
		$this->repository = $repo;
		$this->validate   = $validator;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Create new company
	 *
	 * @param array $input
	 * @return boolean | new company_id
	 * --------------------------------------------------------------------
	 */
	public function create ()
	{
		
	}
	// --------------------------------------------------------------------
	
	/**
	 * Update existing company
	 *
	 * @param array $input
	 * @return boolean
	 * --------------------------------------------------------------------
	 */
	public function update ()
	{
		// get input only for this key
		$inputkey = array( 'id_e', 'user_id', 'name', 'industry_id', 'address', 'kec_id', 'phone' );
		$input    = $this->filterInput( $inputkey );
		
		if( $this->validate->onUpdate( $input ) )
		{
			// process
			if( $this->repository->update( $input [ 'id' ], $input ) )
			{
				return $this->response( 'success', trans( 'form.flash.update.success' ) );
			}
			
			return $this->response( 'error', trans( 'form.flash.system.error' ) );
		}
		
		return $this->response( 'error' );
	}
	// --------------------------------------------------------------------
	
}