<?php

namespace App\Http\Controllers;

use App\Models\ModelDefault;
use App\Http\Requests\StoreModelDefaultRequest;
use App\Http\Requests\UpdateModelDefaultRequest;

class ModelDefaultController extends Controller
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
     * @param  \App\Http\Requests\StoreModelDefaultRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreModelDefaultRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ModelDefault  $modelDefault
     * @return \Illuminate\Http\Response
     */
    public function show(ModelDefault $modelDefault)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ModelDefault  $modelDefault
     * @return \Illuminate\Http\Response
     */
    public function edit(ModelDefault $modelDefault)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateModelDefaultRequest  $request
     * @param  \App\Models\ModelDefault  $modelDefault
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateModelDefaultRequest $request, ModelDefault $modelDefault)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ModelDefault  $modelDefault
     * @return \Illuminate\Http\Response
     */
    public function destroy(ModelDefault $modelDefault)
    {
        //
    }
}
