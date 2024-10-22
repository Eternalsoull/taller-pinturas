<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriasTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('categorias', function (Blueprint $table) {
            $table->id(); // Campo auto-incremental
            $table->string('nombre', 100); // Cadena de texto
            $table->text('descripcion')->nullable(); // Texto largo, opcional
            $table->boolean('activo')->default(true); // Booleano
            $table->decimal('descuento', 5, 2)->default(0); // Decimal
            $table->timestamps(); // Campos de fechas (created_at, updated_at)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categorias');
    }
}
