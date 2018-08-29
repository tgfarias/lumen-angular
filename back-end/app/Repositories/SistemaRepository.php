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

        //print_r($params);

        $descricao = $params['descricao'];
        $sigla = $params['sigla'];
        $email = $params['email'];

        $sistema = Sistema::when($descricao, function($query) use ($descricao){
            $query->where('descricao', 'LIKE', '%' . $descricao . '%');
            })->when($sigla, function($qry) use ($sigla){
                $qry->where('sigla', 'LIKE', '%' . $sigla . '%');
            })->when($email, function($q) use ($email){
                $q->where('email', $email);
            })
            ->orderBy('id', 'desc')
            ->get();

        return $sistema;
    }
}