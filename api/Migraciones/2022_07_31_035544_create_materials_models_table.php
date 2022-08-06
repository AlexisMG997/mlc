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
        Schema::create('materials_models', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('modelDefaulId');
            $table->unsignedInteger('materialsId');

            $table->foreign('modelDefaulId')->references('id')->on('model_defaults');
            $table->foreign('materialsId')->references('id')->on('orders');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('materials_models');
    }
};
