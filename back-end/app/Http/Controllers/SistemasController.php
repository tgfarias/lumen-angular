<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Interfaces\SistemaInterface;

class SistemasController extends Controller {

	private $sistema;
	
	public function __construct( SistemaInterface $sistema ) {
		$this->sistema = $sistema;
	}

	public function list() {
		return response()->json($this->sistema->list());
	}

	public function find(Request $params) {

	}

	public function create(Request $request) {
		$this->validate($request, [
			'descricao' => 'required',
			'sigla' 	=> 'required',
			'email'		=> 'email'
		]);

		$params = new \strClass();

		$params->email 		= $request->email;
		$params->descricao 	= $request->descricao;
		$params->sigla		= $request->sigla;
		$params->url		= $request->url;
		$params->status		= 1;

		 $result = $this->sistema->create( $params );
		 
		 return response()->json($result);
	}

}
