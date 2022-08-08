<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\station;
class stationController extends Controller
{
   
    public function index()
    {
        $station = station::all();
        return $station;
    }

    
    public function store(Request $request)
    {
        //
    }

    
    public function show($id)
    {
        $station = station::with('instruction')->where('id', $id)->get();
        return $station;

        $instruction = station::find($id)->instruction;
        return $instruction;
    }

   
    public function update(Request $request, $id)
    {
        //
    }

    
    public function destroy($id)
    {
        //
    }
}
