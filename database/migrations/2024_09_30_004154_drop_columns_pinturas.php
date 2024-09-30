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
        Schema::table('pinturas', function (Blueprint $table) {
            //
            $table->dropColumn(['descripcion', 'vendido']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pinturas', function (Blueprint $table) {
            //
            $table->text('descripcion')->nullable();
            $table->boolean('vendido')->default(false);
        });
    }
};
