<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PinturaVisualController;
use App\Http\Controllers\CategoriaVisualController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Pintura;
use App\Models\Categoria;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'pinturas' => pintura::all(),
        'categorias' => categoria::all()

    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Rutas protegidas por autenticación
Route::middleware('auth')->group(function () {
    Route::resource('pinturas', PinturaVisualController::class);
    Route::delete('/pinturas/{id}', [PinturaVisualController::class, 'destroy'])->name('pinturas.destroy');

    Route::resource('categorias', CategoriaVisualController::class);
    Route::delete('/categorias/{id}', [CategoriaVisualController::class, 'destroy'])->name('categorias.destroy');
});

require __DIR__.'/auth.php';