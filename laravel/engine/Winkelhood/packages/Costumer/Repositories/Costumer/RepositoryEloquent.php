<?php
namespace Winkelhood\Costumer\Repositories\Costumer;
use Winkelhood\Core\BaseRepository;
use Winkelhood\Costumer\Repositories\CostumerRepository;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Costumer\Models\Costumer;

/**
 * Eloquent Costumer Repository
 *
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Apr 27, 2014 
 * @category Repository
 * @package Winkel
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements CostumerRepository, Crudable
{
	
	/**
	 * Class contructor
	 * Define the model classes that will be used
	 *
	 * @param Model $m_user
	 * --------------------------------------------------------------------
	 */
	public function __construct( Costumer $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkel\Repositories\Costumer\CostumerRepository::datatable()
	 * --------------------------------------------------------------------
	 */
	public function datatable( $company_id, $filter = false, $access = false )
	{
		if( is_null( $company_id ) && ! $access )
		{
			return false;
		} 
		
		$query = \DB::table   ( 'retail_costumer as costumer' )
				  ->where     ( 'costumer.company_id', '=', $company_id )
				  ->select    ( 'costumer.*' )
				  ->addSelect ( \DB::raw( '( select count(*) from retail_sales_order where costumer_id = costumer.id  ) as num_transaction' ) );
					
		
		if( $filter )
		{
			$query->where   ( 'costumer.name', 'like', '%'.$filter.'%' )
				  ->orWhere ( 'costumer.email', 'like', '%'.$filter.'%' )
				  ->orWhere ( 'costumer.address', 'like', '%'.$filter.'%' )
				  ->orWhere ( 'costumer.phone', 'like', '%'.$filter.'%' );
		}
		
		//dd( $query->get() );		
		return $query;
	}
	// --------------------------------------------------------------------
	
	/**
	 * (non-PHPdoc)
	 * @see \Winkel\Repositories\Costumer\CostumerRepository::count()
	 * --------------------------------------------------------------------
	 */
	public function count( $company_id )
	{
		$count   = $this->model->whereCompanyId( $company_id )->count();
		
		return $count;
	}
	// --------------------------------------------------------------------
	
}