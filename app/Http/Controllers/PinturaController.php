<?php

namespace App\Http\Controllers;

use App\Models\Pintura;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Http\Requests\StorePinturaRequest;
use App\Http\Requests\UpdatePinturaRequest;

class PinturaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Pintura::paginate();
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePinturaRequest $request)
    {
        $pintura = Pintura::create($request->all());
        return response()->json(['pintura' => $pintura], Response::HTTP_CREATED);
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Pintura $pintura)
    {
        return response()->json(['pintura' => $pintura], Response::HTTP_OK);
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePinturaRequest $request, Pintura $pintura)
    {
        $pintura->update($request->all());
        return response()->json(['pintura' => $pintura], Response::HTTP_OK);
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pintura $pintura)
    {
        $pintura->delete();
        return response()->json(['pintura' => $pintura], Response::HTTP_ACCEPTED);
        //
    }
}
