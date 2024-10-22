<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Categoria>
 */
class CategoriaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $nombresCategorias = [
            "Postimpresionismo",
            "Surrealismo",
            "Expresionismo",
            "Cubismo",
            "Fauvismo",
            "Rococó",
            "Realismo",
            "Barroco",
            "Neoclasicismo",
            "Romanticismo"
        ];

        return [
            "nombre" => $this->faker->randomElement($nombresCategorias),
            "descripcion" => $this->faker->sentence(),
            "activo" => $this->faker->boolean(),
        ];
    }
}
