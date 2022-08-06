<?php

namespace App\Http\Controllers;

use App\Models\instruction_station;
use App\Http\Requests\Storeinstruction_stationRequest;
use App\Http\Requests\Updateinstruction_stationRequest;

class InstructionStationController extends Controller
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
     * @param  \App\Http\Requests\Storeinstruction_stationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Storeinstruction_stationRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\instruction_station  $instruction_station
     * @return \Illuminate\Http\Response
     */
    public function show(instruction_station $instruction_station)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\instruction_station  $instruction_station
     * @return \Illuminate\Http\Response
     */
    public function edit(instruction_station $instruction_station)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Updateinstruction_stationRequest  $request
     * @param  \App\Models\instruction_station  $instruction_station
     * @return \Illuminate\Http\Response
     */
    public function update(Updateinstruction_stationRequest $request, instruction_station $instruction_station)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\instruction_station  $instruction_station
     * @return \Illuminate\Http\Response
     */
    public function destroy(instruction_station $instruction_station)
    {
        //
    }
}
