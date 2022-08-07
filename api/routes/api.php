<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\orderController;
use App\Http\Controllers\Api\stationController;
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(orderController::class)->group(function () {
    Route::get('/order', 'index');
    Route::get('/order/{id}', 'show');
    Route::put('/order/{id}', 'update');
});

Route::controller(stationController::class)->group(function () {
    Route::get('/station', 'index');
    Route::get('/station/{id}', 'show');
});


