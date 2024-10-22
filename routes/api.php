<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::apiResource('pinturas', \App\Http\Controllers\PinturaController::class)
    ->middleware('auth:sanctum');

Route::apiResource('categorias', \App\Http\Controllers\CategoriaController::class)
    ->middleware('auth:sanctum');

Route::post('register', [\App\Http\Controllers\AuthController::class, 'register']);

Route::post('login', [\App\Http\Controllers\LoginController::class, 'login']);