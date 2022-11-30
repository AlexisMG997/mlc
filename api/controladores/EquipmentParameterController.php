<?php

namespace App\Http\Controllers;

use App\Models\equipment_parameter;
use App\Http\Requests\Storeequipment_parameterRequest;
use App\Http\Requests\Updateequipment_parameterRequest;

class EquipmentParameterController extends Controller
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
     * @param  \App\Http\Requests\Storeequipment_parameterRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Storeequipment_parameterRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\equipment_parameter  $equipment_parameter
     * @return \Illuminate\Http\Response
     */
    public function show(equipment_parameter $equipment_parameter)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\equipment_parameter  $equipment_parameter
     * @return \Illuminate\Http\Response
     */
    public function edit(equipment_parameter $equipment_parameter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Updateequipment_parameterRequest  $request
     * @param  \App\Models\equipment_parameter  $equipment_parameter
     * @return \Illuminate\Http\Response
     */
    public function update(Updateequipment_parameterRequest $request, equipment_parameter $equipment_parameter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\equipment_parameter  $equipment_parameter
     * @return \Illuminate\Http\Response
     */
    public function destroy(equipment_parameter $equipment_parameter)
    {
        //
    }
}
