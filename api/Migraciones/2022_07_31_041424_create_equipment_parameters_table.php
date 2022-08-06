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
        Schema::create('equipment_parameters', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('EquipmentId');
            $table->unsignedInteger('ParametersId');

            $table->foreign('EquipmentId')->references('id')->on('equipment');
            $table->foreign('ParametersId')->references('id')->on('parameters');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('equipment_parameters');
    }
};
