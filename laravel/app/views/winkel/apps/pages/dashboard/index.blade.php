@section( 'content' )

<div class="page-header">
	<h1>Dashboard</h1>
</div>

<div class="row">
	<script>
					init.push(function () {
						var uploads_data = [
							{ day: '2014-03-10', v: 20 },
							{ day: '2014-03-11', v: 10 },
							{ day: '2014-03-12', v: 15 },
							{ day: '2014-03-13', v: 12 },
							{ day: '2014-03-14', v: 5  },
							{ day: '2014-03-15', v: 5  },
							{ day: '2014-03-16', v: 20 }
						];
						Morris.Line({
							element: 'hero-graph',
							data: uploads_data,
							xkey: 'day',
							ykeys: ['v'],
							labels: ['Value'],
							lineColors: ['#333'],
							lineWidth: 2,
							pointSize: 4,
							gridLineColor: 'rgba(0,0,0,.5)',
							resize: true,
							gridTextColor: '#555',
							xLabels: "day",
							xLabelFormat: function(d) {
								return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov', 'Dec'][d.getMonth()] + ' ' + d.getDate(); 
							},
						});
					});
				</script>
	<div class="col-md-8">
			<div class="stat-panel">
					<div class="stat-row">
						<!-- Success darker background -->
						<div class="stat-cell bg-info darker">
							<!-- Stat panel bg icon -->
							<i class="fa fa-lightbulb-o bg-icon" style="font-size:60px;line-height:80px;height:80px;"></i>
							<!-- Big text -->
							<span class="text-bg">Overview</span><br>
							<!-- Small text -->
							<span class="text-sm">Your account statistics</span>
						</div>
					</div> <!-- /.stat-row -->
					<div class="stat-row">
						<div class="stat-cell col-sm-12 padding-sm valign-middle">
							<div id="hero-graph" class="graph" style="height: 180px;"></div>
						</div>
					</div>
					<div class="stat-row">
						<!-- Success background, without bottom border, without padding, horizontally centered text -->
						<div class="stat-counters bg-info no-border-b no-padding text-center">
							<!-- Small padding, without horizontal padding -->
							<div class="stat-cell col-xs-4 padding-sm no-padding-hr">
								<!-- Big text -->
								<span class="text-bg"><strong>12</strong></span><br>
								<!-- Extra small text -->
								<span class="text-xs">PURCHASES</span>
							</div>
							<!-- Small padding, without horizontal padding -->
							<div class="stat-cell col-xs-4 padding-sm no-padding-hr">
								<!-- Big text -->
								<span class="text-bg"><strong>17</strong></span><br>
								<!-- Extra small text -->
								<span class="text-xs">REVIEWS</span>
							</div>
							<!-- Small padding, without horizontal padding -->
							<div class="stat-cell col-xs-4 padding-sm no-padding-hr">
								<!-- Big text -->
								<span class="text-bg"><strong>49</strong></span><br>
								<!-- Extra small text -->
								<span class="text-xs">LIKES</span>
							</div>
						</div> <!-- /.stat-counters -->
					</div> <!-- /.stat-row -->
					<div class="stat-row">
						<!-- Success background, without bottom border, without padding, horizontally centered text -->
						<div class="stat-counters bg-info no-border-b no-padding text-center">
							<!-- Small padding, without horizontal padding -->
							<div class="stat-cell col-xs-4 padding-sm no-padding-hr">
								<!-- Big text -->
								<span class="text-bg"><strong>203</strong></span><br>
								<!-- Extra small text -->
								<span class="text-xs">FRIENDS</span>
							</div>
							<div class="stat-cell col-xs-4 padding-sm no-padding-hr">
								<!-- Big text -->
								<span class="text-bg"><strong>1056</strong></span><br>
								<!-- Extra small text -->
								<span class="text-xs">POINTS</span>
							</div>
							<!-- Success background, small padding, without left and right padding, vertically centered text -->
							<a href="#" class="stat-cell col-xs-4 bg-info padding-sm no-padding-hr valign-middle">
								<!-- Extra small text -->
								<span class="text-xs">MORE&nbsp;&nbsp;<i class="fa fa-caret-right"></i></span>
							</a>
						</div> <!-- /.stat-counters -->
					</div> <!-- /.stat-row -->
				</div> <!-- /.stat-panel -->
	</div>
</div>

@endsection