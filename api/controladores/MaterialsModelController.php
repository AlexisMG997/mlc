<?php

namespace App\Http\Controllers;

use App\Models\materials_model;
use App\Http\Requests\Storematerials_modelRequest;
use App\Http\Requests\Updatematerials_modelRequest;

class MaterialsModelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Storematerials_modelRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Storematerials_modelRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\materials_model  $materials_model
     * @return \Illuminate\Http\Response
     */
    public function show(materials_model $materials_model)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\materials_model  $materials_model
     * @return \Illuminate\Http\Response
     */
    public function edit(materials_model $materials_model)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Updatematerials_modelRequest  $request
     * @param  \App\Models\materials_model  $materials_model
     * @return \Illuminate\Http\Response
     */
    public function update(Updatematerials_modelRequest $request, materials_model $materials_model)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\materials_model  $materials_model
     * @return \Illuminate\Http\Response
     */
    public function destroy(materials_model $materials_model)
    {
        //
    }
}
