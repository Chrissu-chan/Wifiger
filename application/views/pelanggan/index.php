
	<div class="panel-body">
		<div class="row">
			<div class="col-lg-12">
				<!-- Notifikasi -->
				<?=$this->session->flashdata('pesan');?>
			</div>
			<div class="table table-striped m-b-12">
				<div class="table table-striped table-bordered">
					<div class="card-header">
						<h3 class="card-title">Data pelanggan</h3>
						<div class="float-center">
							<a href="<?=base_url('pelanggan/tambah');?>" class="btn btn-primary"><i class="fa fa-plus"></i> Tambah</a>
						</div>
					</div>
					<div class="card-body">
						<table class="table table-hover" id="tabel1">
							<thead>
								<tr>
									<th>#</th>
									<th>Nama Pelanggan</th>
									<th>No.Telephone</th>
									<th>No.Ktp</th>
									<th>Alamat</th>
									<th>Aksi</th>
								</tr>
							</thead>
							<tbody>
								<?php $no = 1;foreach ($row->result() as $pelanggan): ?>
								<tr>
									<td><?=$no++;?></td>
									<td><?=$pelanggan->nama_pelanggan;?></td>
									<td><?=$pelanggan->telp;?></td>
									<td><?=$pelanggan->ktp;?></td>
									<td><?=$pelanggan->alamat;?></td>
									<td>
										<a class="btn btn-success btn-sm" href="<?=base_url('pelanggan/edit/');?><?=$pelanggan->id_pelanggan;?>"><i class="fa fa-edit"></i></a>
										<a class="btn btn-danger btn-sm" onclick="return confirm('Anda yakin ingin menghapus data ini?')" href="<?=base_url('pelanggan/delete/');?><?=$pelanggan->id_pelanggan;?>"><i class="fa fa-trash"></i></a>
									</td>
								</tr>
							<?php endforeach;?>
						</tbody>

					</table>
				</div>
			
		</div>
	</div>
</div>
</div>
