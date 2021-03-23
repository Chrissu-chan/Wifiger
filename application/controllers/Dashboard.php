<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {
    public function index() {

        $this->load->model('User_model');
        $data['user'] = $this->User_model->getUser();
        $this->template->load('template', 'dashboard/index.php', $data);
    }
}