<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\order;
use App\Models\modelDefault;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class orderController extends Controller
{
    
    public function index()
    {
        $orders = order::all();
        return $orders;
    }

    public function store(Request $request)
    {
        
    }


    public function show($id)
    {
        $order = order::with('modelDefault')->where('id', $id)->get();
        return $order;

        $model = order::find($id)->modelDefault;
        return $model;

    }

    public function update(Request $request, $id)
    {
        $order = order::findOrFail($request->id);

        $order->quantity = $request->quantity;
        $order->goodUnits = $request->goodUnits;
        $order->scrap = $request->scrap;
        $order->save();
        return $order;
    }

    public function destroy($id)
    {
        
    }
}
