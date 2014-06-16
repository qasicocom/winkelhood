<?php
namespace Winkelhood\Account\Processors;
use Winkelhood\Core\BaseProcessor;
use Winkelhood\Account\Repositories\UsergroupRepository;

/**
 * Usergroup
 * Processor is layer class repository and processing form
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 18, 2014
 * @category PackagesProcessor
 * @package Winkelhood\Account
 * @version 1
 * @since File available since Release 0.1
 * @copyright Copyright (c) 2014 Qasico.
 */
class UsergroupProcessor extends BaseProcessor
{
	/**
	 * Stored Usergroup Repository Class
	 * @var UsergroupRepository
	 */
	protected $usergroup;
	// --------------------------------------------------------------------
	
	/**
	 * Class Constructor
	 * @param UsergroupRepository $repo
	 * --------------------------------------------------------------------
	 */
	public function __construct( UsergroupRepository $repo )
	{
		$this->repository = $repo;
	}
	// --------------------------------------------------------------------
	
	
}