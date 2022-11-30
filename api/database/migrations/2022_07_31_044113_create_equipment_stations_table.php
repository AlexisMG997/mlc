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
        Schema::create('equipment_stations', function (Blueprint $table) {
            $table->increments('id');
            
            $table->unsignedInteger('StationId');
            $table->unsignedInteger('EquipmentId');

            $table->foreign('StationId')->references('id')->on('stations');
            $table->foreign('EquipmentId')->references('id')->on('equipment');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('equipment_stations');
    }
};
