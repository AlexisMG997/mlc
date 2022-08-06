<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\order;
use Illuminate\Http\Request;

class orderController extends Controller
{
    
    public function index()
    {
        $orders = order::all();
        return $orders;
        //'initialDate','finalDate','finalDate','quantity','goodUnits'
    }

    public function store(Request $request)
    {
        
    }


    public function show($id)
    {
        $order = order::find($id);
        return $order;
    }

    public function update(Request $request, $id)
    {
        
    }

    public function destroy($id)
    {
        
    }
}
