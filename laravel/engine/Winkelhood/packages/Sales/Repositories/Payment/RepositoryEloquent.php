<?php
namespace Winkelhood\Sales\Repositories\Payment;
use Winkelhood\Core\BaseRepository;
use Winkelhood\Core\Interfaces\Crudable;
use Winkelhood\Sales\Repositories\PaymentRepository;
use Winkelhood\Sales\Models\Payment;

/**
 * Repository Eloquent
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since Jun 4, 2014 
 * @category RepositoryEloquent
 * @package  Winkelhood\Sales
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class RepositoryEloquent extends BaseRepository implements PaymentRepository, Crudable
{
	
	/**
	 * Class Contructor
	 * 
	 * @param Detail $model
	 * --------------------------------------------------------------------
	 */
	public function __construct( Payment $model )
	{
		$this->model = $model;
	}
	// --------------------------------------------------------------------
	
}