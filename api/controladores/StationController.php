<?php

namespace App\Http\Controllers;

use App\Models\station;
use App\Http\Requests\StorestationRequest;
use App\Http\Requests\UpdatestationRequest;

class StationController extends Controller
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
     * @param  \App\Http\Requests\StorestationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorestationRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\station  $station
     * @return \Illuminate\Http\Response
     */
    public function show(station $station)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\station  $station
     * @return \Illuminate\Http\Response
     */
    public function edit(station $station)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatestationRequest  $request
     * @param  \App\Models\station  $station
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatestationRequest $request, station $station)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\station  $station
     * @return \Illuminate\Http\Response
     */
    public function destroy(station $station)
    {
        //
    }
}
