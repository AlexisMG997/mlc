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
    }

    public function update(Request $request, $id)
    {
        
    }

    public function destroy($id)
    {
        
    }
}
