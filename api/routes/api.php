<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\orderController;
use App\Http\Controllers\Api\stationController;
use App\Http\Controllers\Api\materialController;
use App\Http\Controllers\Api\equipmentController;
use App\Http\Controllers\api\orderLogController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(orderController::class)->group(function () {
    Route::get('/order', 'index');
    Route::get('/order/{id}', 'show');
    Route::put('/order/{id}', 'update');
    Route::get('/scrapTotal', 'scrapTotal');
    Route::get('/GoodUnitsTotal', 'GoodUnitsTotal');
    Route::get('/quantityTotal', 'quantityTotal');
});

Route::controller(stationController::class)->group(function () {
    Route::get('/station', 'index');
    Route::get('/station/{id}', 'show');
});

Route::controller(materialController::class)->group(function () {
    Route::get('/material', 'index');
});

Route::controller(equipmentController::class)->group(function () {
    Route::get('/equipment/{id}', 'show');
});

Route::controller(orderLogController::class)->group(function () {
    Route::get('/orderLogs', 'index');
});



