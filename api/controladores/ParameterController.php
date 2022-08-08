<?php

namespace App\Http\Controllers;

use App\Models\parameter;
use App\Http\Requests\StoreparameterRequest;
use App\Http\Requests\UpdateparameterRequest;

class ParameterController extends Controller
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
     * @param  \App\Http\Requests\StoreparameterRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreparameterRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\parameter  $parameter
     * @return \Illuminate\Http\Response
     */
    public function show(parameter $parameter)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\parameter  $parameter
     * @return \Illuminate\Http\Response
     */
    public function edit(parameter $parameter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateparameterRequest  $request
     * @param  \App\Models\parameter  $parameter
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateparameterRequest $request, parameter $parameter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\parameter  $parameter
     * @return \Illuminate\Http\Response
     */
    public function destroy(parameter $parameter)
    {
        //
    }
}
