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
        $order = order::with('modelDefault')->where('id', $id)->get();
        return $order;

        $model = order::find($id)->modelDefault;
        return $model;
    }

    public function update(Request $request, $id)
    {
        $order = order::findOrFail($request->id);
        $order->goodUnits = $request->goodUnits;
        $order->scrap = $request->scrap;
        
        $order->save();
        $orderLog = [
            'date' => now(),
            'origin' => 'local.order',
            'message' => 'Se ha actualizado la orden número',
            'orderNum' => $id
        ];
        DB::table('orderLogs')->insert($orderLog);
        return $order;
        
    }

}
