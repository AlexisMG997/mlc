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
        Schema::create('tools_stations', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('StationId');
            $table->unsignedInteger('ToolId');

            $table->foreign('StationId')->references('id')->on('stations');
            $table->foreign('ToolId')->references('id')->on('tools');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tools_stations');
    }
};
