<div class="menu-content top" id="menu-content-demo">
	<div>
		<div class="text-bg">
			<span class="text-slim name">{{ $me->sortname }}</span>
			<small class="text-slim role">{{ $me->role }}</small>
		</div>
		<img src="{{ $me->picture }}" alt="" class="">
		<div class="btn-groupx">
			<a href="{{ URL::to( 'setting/profile' ) }}" class="btn btn-xs btn-primary btn-outline dark ttips xmodal fa fa-cog" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="{{ trans( 'page.menu.setting.profile' ) }}" data-size="modal-md" data-api="true" data-target="#modal"></a>
			<a href="{{ URL::to( 'signout' ) }}" class="btn btn-xs btn-danger btn-outline dark ttips" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="{{ trans( 'page.menu.signout' ) }}"><i class="fa fa-power-off"></i></a>
		</div>
	</div>
</div>

<ul class="navigation">

	@foreach( $menus as $menu )
		
		@if( isset( $menu [ 'submenu' ] ) )
			<li class="mm-dropdown">
				<a href="#"><i class="menu-icon {{ $menu [ 'icon' ] }}"></i><span class="mm-text">{{ $menu [ 'present' ] }}</span></a>
				<ul>
				@foreach( $menu [ 'submenu' ] as $submenu )
					<?php 
						$active = ( $submenu [ 'route' ] == $menu_active ) ? 'active' : '';
					?>
					<li class="{{ $active }}"><a href="{{ $submenu [ 'link' ] }}"><span class="mm-text">{{ $submenu [ 'present' ] }}</span></a></li>
				@endforeach
				</ul>
			</li>
		@else
			<?php 
				$active = ( $menu [ 'route' ] == $menu_active ) ? 'active' : '';
			?>
			<li class="no-dropdown {{ $active }}">
				<a href="{{ $menu [ 'link' ] }}">
					<i class="menu-icon {{ $menu [ 'icon' ] }}"></i>
					<span class="mm-text">{{ $menu [ 'present' ] }}</span>
				</a>
			</li>
		@endif
		
	@endforeach

</ul>

<div class="text-center">
<a href="" class="btn btn-md btn-primary">Upgrade Account</a>
</div>
<div class="nav-footer hidden-xs">
	{{ HTML::ChangeLanguage(TRUE, 'btn btn-xs btn-danger btn-outline') }}
	
	<div id="main-menu-toggle" class="pull-right">
		<button class="btn btn-primary btn-xs btn-outline toggle-close"><i class="fa fa-chevron-circle-left"></i></button>
		<button class="btn btn-primary btn-xs btn-outline toggle-open"><i class="fa fa-chevron-circle-right"></i></button>
	</div>
</div>