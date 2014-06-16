<?php
namespace Apps\Warehouse;

use Winkel\Processors\Product\VariantProcessor;

use Winkel\Repositories\Product\VariantRepository;

class VariantController extends \AppsController
{
	
	protected $repo;
	
	protected $process;
	
	public function __construct( VariantRepository $repo, VariantProcessor $process )
	{
		parent::__construct();
		$this->repo 	= $repo;
		$this->process 	= $process;
	}
	
	public function postCreate ( $product_id )
	{
		
	}
	
	public function postUpdate ( $variant_id )
	{
		
	}
	
	public function postDelete ( $variant_id )
	{
		
	}
	
}