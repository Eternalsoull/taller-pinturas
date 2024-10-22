<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePinturaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "nombre" => ["sometimes", "string", "max:255"],
            "descripcion" => ["nullable", "string", "max:500"],
            "precio" => ["sometimes", "numeric", "min:0"],
            "cantidad" => ["sometimes", "integer", "min:0"],
            "fecha_creacion" => ["sometimes", "date"],
            "artista" => ["sometimes", "string", "max:255"],
            "tecnica" => ["sometimes", "in:oleo,acrilico,acuarela,carboncillo"],
            "vendido" => ["sometimes", "boolean"],
            "coleccion" => ["nullable", "string", "max:255"],
            "dimenciones" => ["sometimes", "string", "max:255"],
            "categoria_id" => ["sometimes", "exists:categorias,id"]
        ];
    }
}
