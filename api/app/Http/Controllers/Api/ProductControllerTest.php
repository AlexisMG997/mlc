<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\productTest;

class ProductControllerTest extends Controller
{
    public function index()
    {
        $productTests = productTest::all();
        return $productTests;
    }
    public function store(Request $request)
    {
    }

    public function show($id)
    {
    }

    public function update(Request $request, $id)
    {
    }

    public function destroy($id)
    {

    }
}
