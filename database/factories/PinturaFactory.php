<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Categoria;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pintura>
 */
class PinturaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "nombre" => $this->faker->name(),
            "descripcion" => $this->faker->text(),
            "precio" => $this->faker->randomFloat(2, 0, 999999.99),
            "cantidad" => $this->faker->randomNumber(),
            "fecha_creacion" => $this->faker->date(),
            "artista" => $this->faker->name(),
            "tecnica" => $this->faker->randomElement(["oleo", "acrilico", "acuarela", "carboncillo"]),
            "vendido" => $this->faker->boolean(),
            "coleccion" => $this->faker->word(),
            "dimenciones" => $this->faker->word(),
            "categoria_id" => Categoria::factory(),
        ];
    }
}
