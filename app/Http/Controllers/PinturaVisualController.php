<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePinturaRequest;
use App\Mail\StorePinturaMail;
use App\Models\Pintura;
use App\Models\Categoria;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;





class PinturaVisualController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Pinturas/Index', [
            'pinturas' => Pintura::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Pinturas/Create', [
            'categorias' => categoria::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePinturaRequest $request)
    {
        // Log::info('Store method called');
        // Log::info($request->all());
        $pintura = Pintura::create($request->validated());
        Mail::to($request->user())->send(new StorePinturaMail($pintura));
        return redirect()->route('pinturas.index');
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $pintura = Pintura::where('slug', $slug)->firstOrFail();
        return Inertia::render('Pinturas/Show', [
            'pintura' => $pintura
        ]);
    }



    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $pintura = Pintura::findOrFail($id);
        return Inertia::render('Pinturas/Edit', [
            'pintura' => $pintura,
            'categorias' => categoria::all(),
        ]);
    }

    

    /**
     * Update the specified resource in storage.
     */
    public function update(StorePinturaRequest $request, $id)
    {
        $pintura = Pintura::findOrFail($id);
        $pintura->update($request->validated());
        return redirect()->route('pinturas.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $pintura = Pintura::find($id);
    
        if ($pintura) {
            $pintura->delete();
            return redirect()->route('pinturas.index')->with('success', 'Pintura eliminada correctamente.');
        }
    
        return redirect()->route('pinturas.index')->with('error', 'No se pudo encontrar la pintura.');
    }
}
