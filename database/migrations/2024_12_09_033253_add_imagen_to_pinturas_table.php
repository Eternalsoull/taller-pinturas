<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::table('pinturas', function (Blueprint $table) {
        $table->string('imagen')->nullable(); // Campo para la URL de la imagen
    });
}

public function down()
{
    Schema::table('pinturas', function (Blueprint $table) {
        $table->dropColumn('imagen');
    });
}
};
