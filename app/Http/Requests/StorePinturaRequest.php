<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePinturaRequest extends FormRequest
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
            "nombre" => ["required", "string", "max:255"],
            "descripcion" => ["required", "string", "max:500"],
            "precio" => ["required", "numeric"],
            "cantidad" => ["required", "integer"],
            "fecha_creacion" => ["required", "date"],
            "artista" => ["required", "string", "max:255"],
            "tecnica" => ["required", "string", "max:255"],
            "vendido" => ["required", "boolean"],
            "coleccion" => ["required", "string", "max:255"],
            "dimenciones" => ["required", "string", "max:255"],
            "categoria_id" => ["required", "exists:categorias,id"],
            'imagen' => 'nullable|string|max:2048'
            //
        ];
    }
}
