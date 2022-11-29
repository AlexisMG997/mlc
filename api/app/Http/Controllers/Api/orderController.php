<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\order;
use App\Models\modelDefault;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\orderLog;

class orderController extends Controller
{
    
    public function index()
    {
        $orders = order::all();
        return $orders;
    }

    public function scrapTotal()
    {
        $scrap = DB::table("orders")
            ->select(DB::raw("SUM(scrap) as scrapTotal"))
            ->get();
        return $scrap;
    }
    public function GoodUnitsTotal()
    {
        $GoodUnits = DB::table("orders")
            ->select(DB::raw("SUM(goodUnits) as goodUnitsTotal"))
            ->get();
        return $GoodUnits;
    }
    public function quantityTotal()
    {
        $quantity = DB::table("orders")
            ->select(DB::raw("SUM(quantity) as quantityTotal"))
            ->get();
        return $quantity;
    }


    public function show($id)
    {
        $check = DB::table('orders')
        ->where('id', $id)
        ->get();
        
        if ($check == "[]"){ 
            $response["status"] = 202;
            $response["msg"] = "La orden no existe";      
            return response()->json($response);
        }else{
            $order = order::with('modelDefault')->where('id', $id)->get();
            $model = order::find($id)->modelDefault;
            return $order;
            return $model;
        }
    }

    public function update(Request $request, $id)
    {
        $order = order::findOrFail($request->id);
        $order->goodUnits = $request->goodUnits;
        $order->scrap = $request->scrap;
        
        $order->save();
        return $order;
    }

    public function orderLog()
    {
        $orderLogs = orderLog::all();
        return $orderLogs;
    }

}
