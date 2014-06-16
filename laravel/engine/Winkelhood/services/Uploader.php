<?php
namespace Winkelhood\services;

use Illuminate\Support\Facades\Input;
use Intervention\Image\Facades\Image;
use \AWS;

/**
 * Uploading Image to s3
 *
 * @author Alif Amri Suri (alifamri@qasico.com)
 * @since May 29, 2014 
 * @category Library
 * @package  Winkelhood\services
 * @version 1
 * @since File available since Release 0.1
 * @copyright  Copyright (c) 2014 Qasico.
 */
class Uploader
{
	/**
	 * Address our cloud
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $cdn    = 'http://cdn.winkelhood.com';
	// --------------------------------------------------------------------
	
	/**
	 * Bucket name of S3
	 * @var string
	 * --------------------------------------------------------------------
	 */
	protected $bucket = 'cdn.winkelhood.com';
	// --------------------------------------------------------------------
	
	/**
	 * Uploading avatar
	 *
	 * @param string $fileName
	 * @return string|boolean
	 * --------------------------------------------------------------------
	 */
	public function avatar ( $fileName )
	{
		if( $file = $this->localUpload( 'images', $fileName ) )
		{
			if( \Config::get( 'app.costum.uploader' ) == false ) 
			{
				return \Config::get( 'app.url' ). '/tmp/' .$fileName.'.jpg';
			}
			else 
			{
				$file = $_SERVER['DOCUMENT_ROOT'].'/'.$file;
				
				if( $this->put( $file, 'public/avatar/'.$fileName.'.jpg' ) )
				{
					unlink( $file );
					return $this->cdn.'/public/avatar/'.$fileName.'.jpg';
				}
			}
		}
	
		return false;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Upload on local and resizing images
	 * 
	 * @param string $name
	 * @return Ambigous <string, boolean>
	 * --------------------------------------------------------------------
	 */
	private function localUpload ( $input, $filename )
	{
		// make random string for filename
		$filename = $filename.'.jpg';
		
		$result = \Image::make  ( \Input::file( $input )->getRealPath() )
						 ->widen( 200 ) 
						 ->crop ( 200, 200 )
						 ->save ( 'tmp/'. $filename );

		return ( $result ) ? public_path( 'tmp' ) . '/' . $filename : false;
	}
	// --------------------------------------------------------------------
	
	/**
	 * Upload to AWS S3
	 * 
	 * @param string $file
	 * @param string $filename
	 * --------------------------------------------------------------------
	 */
	private function put ( $file, $filename )
	{
		$s3   = AWS::get('s3');
		
		$aws [ 'Bucket' ] 		  = $this->bucket;
		$aws [ 'Key' ]    		  = $filename;
		$aws [ 'SourceFile' ]  	  = $file;
		
		return $s3->putObject( $aws );
		
	}
	// --------------------------------------------------------------------
	
}