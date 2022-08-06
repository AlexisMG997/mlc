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
        Schema::create('models_stations', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('StationId');
            $table->unsignedInteger('ModelDefaultId');

            $table->foreign('StationId')->references('id')->on('stations');
            $table->foreign('ModelDefaultId')->references('id')->on('model_defaults');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('models_stations');
    }
};
