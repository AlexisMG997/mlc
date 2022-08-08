<?php

namespace App\Http\Controllers;

use App\Models\material;
use App\Http\Requests\StorematerialRequest;
use App\Http\Requests\UpdatematerialRequest;

class MaterialController extends Controller
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
     * @param  \App\Http\Requests\StorematerialRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorematerialRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\material  $material
     * @return \Illuminate\Http\Response
     */
    public function show(material $material)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\material  $material
     * @return \Illuminate\Http\Response
     */
    public function edit(material $material)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatematerialRequest  $request
     * @param  \App\Models\material  $material
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatematerialRequest $request, material $material)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\material  $material
     * @return \Illuminate\Http\Response
     */
    public function destroy(material $material)
    {
        //
    }
}
