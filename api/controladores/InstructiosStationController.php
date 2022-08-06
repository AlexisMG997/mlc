<?php

namespace App\Http\Controllers;

use App\Models\instructios_station;
use App\Http\Requests\Storeinstructios_stationRequest;
use App\Http\Requests\Updateinstructios_stationRequest;

class InstructiosStationController extends Controller
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
     * @param  \App\Http\Requests\Storeinstructios_stationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Storeinstructios_stationRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\instructios_station  $instructios_station
     * @return \Illuminate\Http\Response
     */
    public function show(instructios_station $instructios_station)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\instructios_station  $instructios_station
     * @return \Illuminate\Http\Response
     */
    public function edit(instructios_station $instructios_station)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Updateinstructios_stationRequest  $request
     * @param  \App\Models\instructios_station  $instructios_station
     * @return \Illuminate\Http\Response
     */
    public function update(Updateinstructios_stationRequest $request, instructios_station $instructios_station)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\instructios_station  $instructios_station
     * @return \Illuminate\Http\Response
     */
    public function destroy(instructios_station $instructios_station)
    {
        //
    }
}
