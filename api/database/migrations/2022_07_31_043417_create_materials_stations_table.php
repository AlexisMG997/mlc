<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('materials_stations', function (Blueprint $table) {
            $table->increments('id');
            
            $table->unsignedInteger('StationId');
            $table->unsignedInteger('MaterialId');

            $table->foreign('StationId')->references('id')->on('stations');
            $table->foreign('MaterialId')->references('id')->on('materials');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('materials_stations');
    }
};
