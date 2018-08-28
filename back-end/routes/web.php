<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
 */

// $app->group(['prefix' => 'sistemas'], function () use ($app) {
// 	$app->get('/', 'SistemasController@index');
// 	$app->post('/', 'SistemasController@save');
// 	$app->get('/{id}', 'SistemasController@show');
// 	// $app->put('/{id}', 'SistemasController@update');
// 	// $app->delete('/{id}', 'SistemasController@delete');
// });

$router->get('/', function () use ($router) {
	return $router->app->version();
});

$router->get('/sistemas/list', 'SistemasController@list');
$router->post('/sistemas/search', 'SistemasController@search');
$router->post('/sistemas/create', 'SistemasController@create');
// $router->get('/get/sistemas/{id}', 'SistemasController@detail');
// $router->put('/put/sistemas/update', 'SistemasController@update');
// $router->delete('/delete/sistemas/{id}', 'SistemasController@delete');
