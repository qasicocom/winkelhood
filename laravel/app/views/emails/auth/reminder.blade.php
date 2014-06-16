@extends('emails.auth.layout')

@section('content')

<h1 style="font-size: 24px; font-weight: 500; margin-top: 15px; margin-bottom: 4px; color: #444444">Forgot Your Password ?</h1>

<p style="font-size: 15px; padding: 1em 2em; margin-bottom: 1em; color: rgb(119, 119, 119);">
Winkelhood received a request to reset the password for your Account.
To reset your password, click on below.
</p>
<a href="{{ Config::get('app.costum.domain.auth') . '/pwdreset/' . $token }}" style="display: block; background: #57c131; color: #fff; font-size: 14px; max-width: 222px; margin: 0 auto; height: 44px; line-height: 44px; text-decoration: none; border-radius: 5px; -webkit-border-radius: 5px; -moz-border-radius: 5px;"target="_blank">Reset Password</a>

@endsection;

