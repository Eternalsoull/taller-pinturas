<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pinturas', function (Blueprint $table) {
            $table->id(); // Columna ID primaria, entero sin signo auto incremental
            $table->string('nombre', 100); // Nombre de la pintura, con una longitud máxima de 100 caracteres
            $table->text('descripcion')->nullable(); // Descripción opcional de la pintura
            $table->decimal('precio', 8, 2); // Precio con precisión de 8 dígitos y 2 decimales
            $table->integer('cantidad')->unsigned(); // Cantidad de pinturas en stock, sin signo
            $table->date('fecha_creacion'); // Fecha de creación de la pintura
            $table->string('artista', 50); // Nombre del artista, con una longitud máxima de 50 caracteres
            $table->enum('tecnica', ['oleo', 'acrilico', 'acuarela', 'carboncillo']); // Técnica de la pintura
            $table->boolean('vendido')->default(false); // Indica si la pintura ha sido vendida o no
            $table->timestamps(); // Timestamps para created_at y updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pinturas');
    }
};
