<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Pintura extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'descripcion',
        'precio',
        'cantidad',
        'fecha_creacion',
        'artista',
        'tecnica',
        'vendido',
        'coleccion',
        'dimenciones',
        'categoria_id',
        'imagen'
    ];

    public function categoria()
    {
        return $this->belongsTo(Categoria::class); 
    }
    
    // Método boot para generar el slug automáticamente
    protected static function boot()
    {
        parent::boot();

        // Generar el slug antes de crear o actualizar un registro
        static::saving(function ($pintura) {
            // Si el nombre cambia, actualizamos el slug
            $pintura->slug = Str::slug($pintura->nombre);

            // Asegurarse de que el slug sea único (opcional)
            $originalSlug = $pintura->slug;
            $count = Pintura::where('slug', 'LIKE', "$originalSlug%")->count();

            // Si ya existe un slug igual, agregar un número para hacerlo único
            if ($count > 0) {
                $pintura->slug = $originalSlug . '-' . ($count + 1);
            }
        });
    }
}
