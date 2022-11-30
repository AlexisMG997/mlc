<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\equipment;
use Illuminate\Support\Facades\DB;

class equipmentController extends Controller
{

    public function index()
    {
        //
    }

  
    public function store(Request $request)
    {
        //
    }


    public function show($id)
    {

        $check = DB::table('equipment')
        ->where('id', $id)
        ->get();
        
        if ($check == "[]"){ 
            $response["status"] = 202;
            $response["msg"] = "El equipamiento no existe";      
            return response()->json($response);
        }else{
            $equipment = equipment::with('parameters')->where('id', $id)->get();
            return $equipment;
            $parameter = equipment::find($id)->parameter;
            return $parameter;
        }
       
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
