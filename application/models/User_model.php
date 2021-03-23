<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_model extends CI_Model {

	public function login($username) {
		$query = $this->db->get_where('user', ['username' => $username]);
		return $query; // mengembalikan data objek
	}
    public function getUser($id = null) {
		$this->db->from('user');
		if ($id != null) { 
			$this->db->where('id_user', $id);
			$this->db->or_where('username', $id);
		}
		$query = $this->db->get();
		return $query;
	}

}