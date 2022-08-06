<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\orderController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(orderController::class)->group(function () {
    Route::get('/order', 'index');
    Route::get('/order/{id}', 'show'); 
});

