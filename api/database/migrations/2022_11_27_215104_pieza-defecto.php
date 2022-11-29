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
        Schema::create('Units', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('status');

            $table->unsignedInteger('ordersId');
            $table->foreign('ordersId')->references('id')->on('orders');

            $table->unsignedInteger('StationId');
            $table->foreign('StationId')->references('id')->on('stations');
            $table->timestamps();
        });

        Schema::create('Defects', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('code');
            $table->string('tittle',100);

            $table->unsignedInteger('UnitId');
            $table->foreign('UnitId')->references('id')->on('Units');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Units');
        Schema::dropIfExists('Defects');
    }
};
