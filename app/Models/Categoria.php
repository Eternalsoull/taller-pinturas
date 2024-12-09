<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Categoria extends Model
{
    use HasFactory;

    // Campos que pueden ser asignados masivamente
    protected $fillable = [
        'nombre',
        'descripcion',
        'activo',
        'descuento'
    ];

    public function pinturas()
    {
        return $this->hasMany(Pintura::class);
    }

    // Método boot para generar el slug automáticamente
    protected static function boot()
    {
        parent::boot();

        // Generar el slug antes de crear o actualizar un registro
        static::saving(function ($categoria) {
            // Si el nombre cambia, actualizamos el slug
            $categoria->slug = Str::slug($categoria->nombre);

            // Asegurarse de que el slug sea único (opcional)
            $originalSlug = $categoria->slug;
            $count = Categoria::where('slug', 'LIKE', "$originalSlug%")->count();

            // Si ya existe un slug igual, agregar un número para hacerlo único
            if ($count > 0) {
                $categoria->slug = $originalSlug . '-' . ($count + 1);
            }
        });
    }
    
}
