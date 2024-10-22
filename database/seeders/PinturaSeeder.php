<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Pintura;

class PinturaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Utiliza el factory para crear 100 registros en la tabla pinturas
        Pintura::factory()->count(100)->create();
    }
}
