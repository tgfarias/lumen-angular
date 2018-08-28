<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Interfaces\SistemaInterface;
use Illuminate\Http\Request;

class SistemasController extends Controller {

	private $sistema;
	
	public function __construct( SistemaInterface $sistema ) {
		$this->sistema = $sistema;
	}

	public function list() {
		return response()->json($this->sistema->list());
	}

	public function search(Request $params) {
		$terms = '';
		if($params->json()->get('descricao') !== ''){
			$terms .= 'descricao like %' . $params->json()->get('descricao') .'%';
		}
		else if($params->json()->get('sigla') !== ''){
			$terms .= 'AND sigla like %' . $params->json()->get('sigla') .'%';
		}
		else if($params->json()->get('email') !== ''){
			$terms .= 'AND email =' . $params->json()->get('email');
		}
		else{
			return response()->json('Nenhum Sistema foi encontrado. Favor revisar os critérios da sua pesquisa!');
		}


		$result = $this->sistema->search($terms);
		return response()->json($result);

	}

	public function create(Request $request) {


		// $this->validate(
		// 	$request, 
		// 	['descricao' => 'required',
		// 	'sigla' 	=> 'required',
		// 	'email'		=> 'email'
		// 	],
		// 	['descricao.required' => 'Dados obrigatórios não informados', //MN003
		// 	'sigla.required' => 'Dados obrigatórios não informados', //MN003
		// 	'email.email' => 'E-mail inválido'] //MN004

		// );

		// $params = new \stdClass();

		// $params->email 		= $request->email;
		// $params->descricao 	= $request->descricao;
		// $params->sigla		= $request->sigla;
		// $params->url		= $request->url;
		// $params->status		= 1;

		 $result = $this->sistema->create( $request->json()->all() );
		 
		 return response()->json($result);
	}

}
