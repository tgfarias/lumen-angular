<?php

namespace App\Repositories;

use App\Interfaces\SistemaInterface;
use App\Models\Sistema;

class SistemaRepository implements SistemaInterface{

    public function create($params){
        $sistema = Sistema::create( $params );
	 	return $sistema;
    }

    public function list(){
        $sistema = Sistema::all();
        return $sistema;
    }

    public function search($params){

        $sistema = Sistema::where($params)
        ->get();

        return $sistema;
    }
}