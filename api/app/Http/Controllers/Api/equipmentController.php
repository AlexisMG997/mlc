<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\equipment;

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
        $equipment = equipment::with('parameters')->where('id', $id)->get();
        return $equipment;

        $parameter = equipment::find($id)->parameter;
        return $parameter;
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
