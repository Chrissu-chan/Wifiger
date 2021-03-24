<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pelanggan_model extends CI_Model {
     
    public function getPelanggan($id = null) {
        $this->db->from('pelanggan');
        if ($id != null) {
            $this->db->where('id_pelanggan', $id);
        }
        return $this->db->get();
    } 

    public function tambahPelanggan() {
        $alamat = !empty($this->input->post('alamat', true)) ? $this->input->post('alamat', true) : '';
		$data = [
			'nama_pelanggan' => ucwords($this->input->post('nama', true)),
			'telp' => $this->input->post('telp', true),
			'ktp' => $this->input->post('ktp', true),
			'alamat' => ucwords($alamat),
		];
		$this->db->insert('pelanggan', $data);
	}
 
    public function editPelanggan() {
        $data = [
           'nama_pelanggan' => ucwords($this->input->post('nama', true)),
           'telp' => $this->input->post('telp', true),
           'ktp' => $this->input->post('ktp', true),
           'alamat' => ucwords($this->input->post('alamat', true)),
        ];
        $this->db->where('id_pelanggan', $this->input->post('id_pelanggan', true));
        $this->db->update('pelanggan', $data);
    } 

    public function cek_data($name)
    {
        $this->db->select();
        $this->db->from('pelanggan');
        $this->db->where('name_pelanggan', $nama);
        $query = $this->db->get();
        return $query;
    }

    public function deletePelanggan($id) {
        $this->db->delete('pelanggan', ['id_pelanggan' => $id]);
    } 
}
