<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {
    public function index() {

        $this->load->model('User_model');
        $this->load->model('Pelanggan_model');



        $data['user'] = $this->User_model->getUser();
        $data['pelanggan'] = $this->Pelanggan_model->getPelanggan();
        $this->template->load('template', 'dashboard/index.php', $data);
    }
}