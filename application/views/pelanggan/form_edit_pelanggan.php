	<div class="container-fluide">
		<div class="row">
			<div class="col-md-12">
				<div class="table table-striped m-b-12">
					<!-- form start -->
					<div class="table table-striped table-bordered">
						<div class="card-header">
                        <h3 class="card-title">Edit Pelanggan</h3>
							<div class="text-right">
								<a class="btn btn-warning" href="<?=base_url('pelanggan');?>"><i class="fa fa-undo"></i> Kembali</a>
							</div>
						</div>
						<form class="form-horizontal" action="" method="post">
							<div class="card-body">
								<div class="form-group row">
									<input type="hidden" name="id_pelanggan" value="<?=$row->id_pelanggan;?>">
									<label class="col-sm-4 col-form-label" for="nama">Nama Pelanggan</label>
									<div class="col-sm-8">
										<input type="text" class="form-control <?=form_error('nama') ? 'is-invalid' : null;?>" name="nama" id="nama" value="<?=$this->input->post('nama') ?? $row->nama_pelanggan;?>">
										<?=form_error('nama', '<span class="error invalid-feedback">', '</span>');?>
									</div>
								</div>
								<div class="form-group row">
									<label class="col-sm-4 col-form-label"for="telp">No.Telp</label>
									<div class="col-sm-8">
										<input type="text" class="form-control <?=form_error('telp') ? 'is-invalid' : null;?>" name="telp" id="telp" value="<?=$this->input->post('telp') ?? $row->telp;?>">
										<?=form_error('telp', '<span class="error invalid-feedback">', '</span>');?>
									</div>
								</div>
								<div class="form-group row">
									<label class="col-sm-4 col-form-label"for="ktp">No.Ktp</label>
									<div class="col-sm-8">
									    <input type="text" class="form-control <?=form_error('ktp') ? 'is-invalid' : null;?>" name="ktp" id="ktp" value="<?=$this->input->post('ktp') ?? $row->ktp;?>">
										<?=form_error('ktp', '<span class="error invalid-feedback">', '</span>');?>
									</div>
								</div>
								<div class="form-group row">
									<label class="col-sm-4 col-form-label" for="alamat">Alamat</label>
									<div class="col-sm-8">
										<input type="text" class="form-control <?=form_error('alamat') ? 'is-invalid' : null;?>" name="alamat" id="alamat" value="<?=$this->input->post('alamat') ?? $row->alamat;?>">
										<?=form_error('alamat', '<span class="error invalid-feedback">', '</span>');?>
									</div>
								</div>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary">Simpan</button>
                                    <button type="reset" class="btn btn-danger">Reset</button>
                                </div>
							</div>
							<!-- /.card-body -->

                                <!-- <div class="card-footer float-right">
                                    <button type="submit" class="btn btn-primary">Simpan</button>
                                    <button type="reset" class="btn btn-danger">Reset</button>
                                </div> -->
						</form>
					</div>
				</div>
			</div>
	</div>
</div>
