<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\station;
use Illuminate\Support\Facades\DB;

class stationController extends Controller
{
   
    public function index()
    {
        $station = station::all();
        return $station;
    }
    
    public function show($id)
    {
        $check = DB::table('stations')
        ->where('id', $id)
        ->get();
        
        if ($check == "[]"){ 
            $response["status"] = 202;
            $response["msg"] = "La estación no existe";      
            return response()->json($response);
        }else{

            $station = station::with('instruction')->where('id', $id)->get();
            return $station;
            $instruction = station::find($id)->instruction;
            return $instruction;
        }
    }


}
