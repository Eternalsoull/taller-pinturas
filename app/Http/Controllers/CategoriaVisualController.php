<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class CategoriaVisualController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Categorias/Index', [
            'categorias' => Categoria::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Categorias/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
        ]);

        Log::info('Store method called');
        Log::info($request->all());
        Categoria::create($request->all());
        return redirect()->route('categorias.index');
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $categoria = Categoria::where('slug', $slug)->firstOrFail();
        return Inertia::render('Categorias/Show', [
            'categoria' => $categoria
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $categoria = Categoria::findOrFail($id);
        return Inertia::render('Categorias/Edit', [
            'categoria' => $categoria
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
        ]);

        $categoria = Categoria::findOrFail($id);
        $categoria->update($request->all());
        return redirect()->route('categorias.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $categoria = Categoria::find($id);
    
        if ($categoria) {
            $categoria->delete();
            return redirect()->route('categorias.index')->with('success', 'Categoría eliminada correctamente.');
        }
    
        return redirect()->route('categorias.index')->with('error', 'No se pudo encontrar la categoría.');
    }
}