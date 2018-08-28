<?php

namespace App\Interfaces;

interface SistemaInterface{
    public function create($params);
    public function search($params);
    public function list();
}
