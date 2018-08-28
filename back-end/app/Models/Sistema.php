<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sistema extends Model {
	protected $table = 'sistemas';
	protected $primaryKey = 'cod_sistema';
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'cod_sistema',
		'descricao',
		'email',
		'url',
		'status',
	];
}