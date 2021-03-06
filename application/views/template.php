<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
<head>
	<meta charset="utf-8" />
	<title>Wifiger</title>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	
	<!-- ================== BEGIN BASE CSS STYLE ================== -->
	<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
	<link href="<?= base_url('assets/plugins/jquery-ui/jquery-ui.min.css') ?>" rel="stylesheet" />
	<link href="<?= base_url('assets/plugins/bootstrap/4.1.3/css/bootstrap.min.css') ?>" rel="stylesheet" />
	<link href="<?= base_url('assets/plugins/font-awesome/5.2/css/all.min.css') ?>" rel="stylesheet" />
	<link href="<?= base_url('assets/plugins/animate/animate.min.css') ?>" rel="stylesheet" />
	<link href="<?= base_url('assets/plugins/DataTables/media/css/jquery.dataTables.min.css') ?>" rel="stylesheet" />
	<link href="<?= base_url('assets/css/default/style.min.css') ?>" rel="stylesheet" />
	<link href="<?= base_url('assets/css/default/style-responsive.min.css') ?>" rel="stylesheet" />
	<link href="<?= base_url('assets/css/default/theme/default.css') ?>" rel="stylesheet" />
	
	<!-- ================== END BASE CSS STYLE ================== -->
	
	<!-- ================== BEGIN BASE JS ================== -->
	<script src="<?= base_url('assets/plugins/pace/pace.min.js') ?>"></script>
	<!-- ================== END BASE JS ================== -->
</head>
<body>
	<!-- begin #page-loader -->
	<div id="page-loader" class="fade show"><span class="spinner"></span></div>
	<!-- end #page-loader -->
	
	<!-- begin #page-container -->
	<div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
		<!-- begin #header -->
		<div id="header" class="header navbar-default">
			<!-- begin navbar-header -->
			<div class="navbar-header">
				<a href="index.html" class="navbar-brand"><span class="navbar-logo"></span> <b>Wifiger</b></a>
				<button type="button" class="navbar-toggle" data-click="sidebar-toggled">
					<span class="icon-bar"></span>
				</button>
			</div>
			<!-- end navbar-header -->
			
			<!-- begin header-nav -->
			<ul class="navbar-nav navbar-right">
				<li>
					<form class="navbar-form">
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Enter keyword" />
							<button type="submit" class="btn btn-search"><i class="fa fa-search"></i></button>
						</div>
					</form>
				<li class="dropdown navbar-user">
					<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
						<div class="image image-icon bg-black text-grey-darker">
							<i class="fa fa-user"></i>
						</div>
						<span class="d-none d-md-inline">Administrator</span> <b class="caret"></b>
					</a>
					<div class="dropdown-menu dropdown-menu-right">
						<a href="<?= base_url('auth/logout');?>" class="dropdown-item">Log Out</a>
					</div>
				</li>
			</ul>
			<!-- end header navigation right -->
		</div>
		<!-- end #header -->
		
		<!-- begin #sidebar -->
		<div id="sidebar" class="sidebar">
			<!-- begin sidebar scrollbar -->
			<div data-scrollbar="true" data-height="100%">
				<!-- begin sidebar user -->
				<ul class="nav">
					<li class="nav-profile">
						<a href="javascript:;" data-toggle="nav-profile">
							<div class="cover with-shadow"></div>
							<div class="image image-icon bg-black text-grey-darker">
								<i class="fa fa-user"></i>
							</div>
						</a>
					</li>
				</ul>
				<!-- end sidebar user -->
				<!-- begin sidebar nav -->
				<ul class="nav">
					<li class="nav-header">Navigation</li>
					<li class="active">
						<a href="index.html">
							<i class="fa fa-database"></i>
							<span>Master</span>
						</a>
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-exchange-alt"></i> 
							<span>Transaksi</span>
						</a>
						<ul class="sub-menu">
							<li class="has-sub">
							<li><a href="<?= base_url('pelanggan');?>">Pelanggan</a></li>
							<li><a href="javascript:;">Deposito</a></li>
						</ul>
					        <li class="active">
						    <a href="index.html">
							  <i class="fa fa-shopping-cart"></i>
							  <span>Pemasangan</span>
						</a>
					</li>
					</li>
					<!-- begin sidebar minify button -->
					<!-- end sidebar minify button -->
				</ul>
				<!-- end sidebar nav -->
			</div>
			<!-- end sidebar scrollbar -->
		</div>
		<div class="sidebar-bg"></div>
		<!-- end #sidebar -->
		
		<!-- begin #content -->
		<div id="content" class="content">
            <?php echo $contents ?>
		</div>
		<!-- end #content -->
		
		<!-- begin scroll to top btn -->
		<a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top fade" data-click="scroll-top"><i class="fa fa-angle-up"></i></a>
		<!-- end scroll to top btn -->
	</div>
	<!-- end page container -->
	
	<!-- ================== BEGIN BASE JS ================== -->
	<script src="<?= base_url('assets/plugins/jquery/jquery-3.3.1.min.js') ?>"></script>
	<script src="<?= base_url('assets/plugins/jquery-ui/jquery-ui.min.js') ?>"></script>
	<script src="<?= base_url('assets/plugins/bootstrap/4.1.3/js/bootstrap.bundle.min.js') ?>"></script>
	<script src="<?= base_url('assets/plugins/slimscroll/jquery.slimscroll.min.js') ?>"></script>
	<script src="<?= base_url('assets/plugins/js-cookie/js.cookie.js') ?>"></script>
	<script src="<?= base_url('assets/js/theme/default.min.js') ?>"></script>
	<script src="<?= base_url('assets/js/apps.min.js') ?>"></script>
	<script src="<?= base_url('assets/plugins/DataTables/media/js/jquery.dataTables.min.js') ?>"></script>
	<!-- ================== END BASE JS ================== -->
	
	<script>
		$(document).ready(function() {
			App.init();
		});
	</script>
	<script>
		$('#tabel1').DataTable({
			"responsive": true,
            "autoWidth": false,
		    "columns" : [
				{
					"sortable" : true
				},
				{
					"sortable" : true
				},
				{
					"sortable" : false
				},
				{
					"sortable" : false
				},
				{
					"sortable" : false
				},
				{
					"sortable" : false
				}
			] 

		});
  </script>
</body>
</html>
