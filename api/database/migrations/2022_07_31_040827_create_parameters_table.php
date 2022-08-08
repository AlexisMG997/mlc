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
        Schema::create('parameters', function (Blueprint $table) {
            $table->increments('id');
            $table->string('parameterName',20);
            $table->string('unitOfMeasure',20);
            $table->integer('valueMaximum');
            $table->integer('valueMinimum');

            $table->unsignedInteger('equipment_id');
            $table->foreign('equipment_id')->references('id')->on('equipment');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('parameters');
    }
};
