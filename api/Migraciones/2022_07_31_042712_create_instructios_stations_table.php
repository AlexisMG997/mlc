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
        Schema::create('instructios_stations', function (Blueprint $table) {
            $table->increments('id');
            
            $table->unsignedInteger('StationId');
            $table->unsignedInteger('InstructionId');

            $table->foreign('StationId')->references('id')->on('stations');
            $table->foreign('InstructionId')->references('id')->on('Instructions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('instructios_stations');
    }
};
