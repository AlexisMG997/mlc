<?php

namespace App\Http\Controllers;

use App\Models\tool;
use App\Http\Requests\StoretoolRequest;
use App\Http\Requests\UpdatetoolRequest;

class ToolController extends Controller
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
     * @param  \App\Http\Requests\StoretoolRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoretoolRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\tool  $tool
     * @return \Illuminate\Http\Response
     */
    public function show(tool $tool)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\tool  $tool
     * @return \Illuminate\Http\Response
     */
    public function edit(tool $tool)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatetoolRequest  $request
     * @param  \App\Models\tool  $tool
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatetoolRequest $request, tool $tool)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\tool  $tool
     * @return \Illuminate\Http\Response
     */
    public function destroy(tool $tool)
    {
        //
    }
}
