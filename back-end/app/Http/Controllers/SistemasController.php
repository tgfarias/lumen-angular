<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Sistema;

class SistemasController extends Controller {

	public function __construct() {
	}

	public function list() {
		// try {
		//          $menu = DB::table('m_menu')
		//                    ->join('m_menu_type', 'm_menu.type_id', '=', 'm_menu_type.id')
		//                    ->select('m_menu.*', 'm_menu_type.type_name')->get();
		//          $res['success'] = true;
		//          $res['data'] = $menu;
		//          $res['count'] = $menu->count();
		//          return response($res, 200);
		//      } catch (\Illuminate\Database\QueryException $ex) {
		//          $res['success'] = false;
		//          $res['message'] = $ex->getMessage();
		//          return response($res, 500);
		//      }

		$sistema = Sistema::all();
		return response()->json($sistema);
	}

	// public function find($params) {

	// }

	// public function save(Request $request) {
	// 	$sistema = Sistema::create($request->all());
	// 	return response()->json($sistema);
	// }

}
