<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSistemasTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('sistemas', function (Blueprint $table) {
			$table->increments('id');
			$table->string('descricao', 100);
			$table->string('sigla', 10);
			$table->string('email', 100)->nullable();
			$table->string('url', 50)->nullable();
			$table->boolean('status')->default(1);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('sistemas');
	}
}
