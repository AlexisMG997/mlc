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
        Schema::create('model_default__equipment', function (Blueprint $table) {
            $table->increments('id');
            
            $table->unsignedInteger('modelDefaulId');
            $table->unsignedInteger('EquipmentId');

            $table->foreign('modelDefaulId')->references('id')->on('parameters');
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
        Schema::dropIfExists('model_default__equipment');
    }
};
