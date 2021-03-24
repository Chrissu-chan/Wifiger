<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pelanggan extends CI_Controller {

    public function __construct(){
        parent::__construct();
        $this->load->model('Pelanggan_model');
    }

    public function index(){
        $data = [
            'title' => 'Data Pelanggan',
            'row' => $this->Pelanggan_model->getPelanggan(),
        ];
        $this->template->load('template', 'pelanggan/index', $data);
    }
    

    public function tambah(){
        $data = [
            'title' => 'Data Pelanggan',
        ];
        $this->form_validation->set_rules('nama', 'Nama', 'trim|required');
		$this->form_validation->set_rules('telp', 'No Telephone', 'trim|required|numeric|max_length[13]');
		$this->form_validation->set_rules('ktp', 'No Ktp', 'trim|required|numeric|max_length[16]');
		$this->form_validation->set_rules('alamat', 'Alamat', 'trim');

        if ($this->form_validation->run() == false){
            $this->template->load('template', 'pelanggan/form_tambah_pelanggan', $data);
        } else {
            $this->Pelanggan_model->tambahPelanggan();
            $this->session->set_flashdata('pesan', '<div class="alert alert-success">
                Data Pelanggan berhasil ditambahkan! </div>');
            redirect('pelanggan');
        } 
    }
    public function edit($id) {
        $data = [
            'title' => 'Data Pelanggan',
        ];
        $this->form_validation->set_rules('nama', 'Nama', 'trim|required');
		$this->form_validation->set_rules('telp', 'No Telephone', 'trim|required|numeric|max_length[13]');
		$this->form_validation->set_rules('ktp', 'No Ktp', 'trim|required|max_length[16]');
		$this->form_validation->set_rules('alamat', 'Alamat', 'trim');

        if ($this->form_validation->run() == false){
            //jika validasi form gagal
            $query = $this->Pelanggan_model->getPelanggan($id);
            //jika data yang di edit ditemukan
            if ($query->num_rows() > 0){
                $data['row'] = $query->row();
                $this->template->load('template', 'pelanggan/form_edit_pelanggan', $data);
            } else {
                // tidak ada data
                $this->session->set_flashdata('pesan', '<div class="alert alert-warning" >
                    Data Pelanggan tidak ditemukan! </div>');
                redirect('pelanggan');
               }
            } else {
                //validasi form sukses
                $this->Pelanggan_model->editPelanggan();
                $this->session->set_flashdata('pesan' , '<div class="alert alert-success">
                    Data Pelanggan berhasil diupdate! </div>');
                redirect('pelanggan');
            }
        }

        public function delete($id){
            $this->Pelanggan_model->deletePelanggan($id);
            $this->session->set_flashdata('pesan', '<div class="alert alert-success">
			Data Pelanggan berhasil dihapus! </div>');
		redirect('pelanggan');
        } 
   
  }
