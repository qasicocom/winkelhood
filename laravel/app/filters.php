<?php

/*
|--------------------------------------------------------------------------
| Application & Route Filters
|--------------------------------------------------------------------------
|
| Below you will find the "before" and "after" events for the application
| which may be used to do any work before or after a request into your
| application. Here you may also register your custom route filters.
|
*/

App::before(function($request)
{
	//
});

App::after(function($request, $response)
{
	//
});

//-------------------------------------------------------------------------

/*
|--------------------------------------------------------------------------
| Authentication Filters
|--------------------------------------------------------------------------
|
| The following filters are used to verify that the user of the current
| session is logged into this application. The "basic" filter easily
| integrates HTTP Basic authentication for quick, simple checking.
|
*/

Route::filter('auth', function()
{
	if (Auth::guest() ) {
		return Redirect::to( Route('auth.signin') )
			->with ('messages', trans( 'form.flash.guest' ) )
			->with( 'status', 'info' );
	}
});
//-------------------------------------------------------------------------

/*
|--------------------------------------------------------------------------
| Guest Filter
|--------------------------------------------------------------------------
|
| The "guest" filter is the counterpart of the authentication filters as
| it simply checks that the current user is not logged in. A redirect
| response will be issued if they are, which you may freely change.
|
*/

Route::filter('guest', function()
{
	if ( Auth::check() ) 
	{
		return Redirect::to( \Account::privileges()->baseUrl );
	}
});
//-------------------------------------------------------------------------

/*
|--------------------------------------------------------------------------
| CSRF Protection Filter
|--------------------------------------------------------------------------
|
| The CSRF filter is responsible for protecting your application against
| cross-site request forgery attacks. If this special token in a user
| session does not match the one given in this request, we'll bail.
|
*/

Route::filter('csrf', function()
{
	if (Session::token() != Input::get('_token'))
	{
		throw new Illuminate\Session\TokenMismatchException;
	}
});
//-------------------------------------------------------------------------

/*
|--------------------------------------------------------------------------
| Ajax Request Filter
|--------------------------------------------------------------------------
|
| Will process only if request is ajax 
|
*/

Route::filter('ajax_request', function( $route){

	if ( !Request::ajax() ) App::abort(404);

});
//-------------------------------------------------------------------------

/**
 * company.wildcard
 *
 * Check wildcard subdomain company di database
 * if not exist on slug company throw notfound
 * send session if exist
 *
 * @author Alif Amri Suri
 * @date Mar 20, 2014
 */
Route::filter('company.wildcard', function( $route ){

	$company_slug = $route->getParameter ( 'slug' );

	// is slug same
	if( $company_slug != \Account::privileges()->company->slug )
	{
		Redirect::to( route( 'signin' ) );
	}

});
	
/**
 * Changing the Language of Apps
 * set the session if user changing the language
 *
 * @author Alif Amri Suri
 * @date Mar 20, 2014
 */
Route::filter ( 'locale', function ( $route ) {

	$available_lang = array( 'id', 'en' );

	$lang = $route->getParameter( 'lang' );

	if( in_array( $lang, $available_lang ) ){
		\Session::put( 'locale', $lang );
	}

	return Redirect::back();
});