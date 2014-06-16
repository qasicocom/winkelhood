<?php
namespace Winkelhood\Supplier\Repositories\Supplier;
use Winkelhood\Core\BaseRepository;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Supplier\Models\Supplier;
use Winkelhood\Supplier\Repositories\SupplierRepository;

/**
 * Eloquent Supplier Repository
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 27, 2014 
 * @category RepositoryEloquent
 * @package Winkelhood\Supplier
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements SupplierRepository, Crudable
{
	
	/**
	 * Class contructor
	 * Define the model classes that will be used
	 *
	 * @param Winkelhood\Supplier\Models\Supplier $m_user
	 * --------------------------------------------------------------------
	 */
	public function __construct( Supplier $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkel\Repositories\Supplier\SupplierRepository::datatable()
	 * --------------------------------------------------------------------
	 */
	public function datatable( $company_id, $filter = null, $access = null )
	{
		if( is_null( $company_id ) && ! $access )
		{
			return false;
		}
		
		$query = \DB::table  ( 'retail_supplier as supplier' )
					->where  ( 'supplier.company_id', '=', $company_id )
					->select ( 'supplier.*' );
		
		if( $filter )
		{
			$query->where   ( 'supplier.name', 'like', '%'.$filter.'%' )
				  ->orWhere ( 'supplier.email', 'like', '%'.$filter.'%' )
				  ->orWhere ( 'supplier.address', 'like', '%'.$filter.'%' )
				  ->orWhere ( 'supplier.desc', 'like', '%'.$filter.'%' )
				  ->orWhere ( 'supplier.phone', 'like', '%'.$filter.'%' );
		}
		
		return $query;
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkel\Repositories\Supplier\SupplierRepository::count()
	 * --------------------------------------------------------------------
	 */
	public function count( $company_id )
	{
		$count   = $this->model->whereCompanyId( $company_id )->count();
		
		return $count;
	}
	// --------------------------------------------------------------------
	
}