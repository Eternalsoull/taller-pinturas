<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        'dimenciones'
    ];
}
