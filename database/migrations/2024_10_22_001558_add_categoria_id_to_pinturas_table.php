<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCategoriaIdToPinturasTable extends Migration
{
    public function up(): void
{
    Schema::table('pinturas', function (Blueprint $table) {
        // Permitir valores nulos para la columna categoria_id
        $table->foreignId('categoria_id')->nullable()->constrained()->onDelete('cascade');
    });
}


    public function down(): void
    {
        Schema::table('pinturas', function (Blueprint $table) {
            $table->dropForeign(['categoria_id']);
            $table->dropColumn('categoria_id');
        });
    }
}
