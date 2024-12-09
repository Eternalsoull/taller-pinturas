<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Categoria>
 */
class CategoriaFactory extends Factory
{
    /**
     * Una lista de nombres de categorías predefinidas.
     */
    protected static $nombresCategorias = [
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

    /**
     * Índice para rastrear el nombre actual.
     */
    protected static $index = 0;

    /**
     * Define el estado por defecto del modelo.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Verifica si el índice supera la cantidad de nombres disponibles.
        if (self::$index >= count(self::$nombresCategorias)) {
            throw new \Exception('Se han generado más categorías de las disponibles en el array.');
        }

        // Obtiene el nombre basado en el índice actual.
        $nombre = self::$nombresCategorias[self::$index];

        // Incrementa el índice para la próxima llamada.
        self::$index++;

        return [
            "nombre" => $nombre,
            "descripcion" => $this->faker->sentence(),
            "activo" => $this->faker->boolean(),
        ];
    }
}
