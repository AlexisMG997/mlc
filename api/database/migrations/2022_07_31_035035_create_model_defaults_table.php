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
        Schema::create('model_defaults', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',30);
            $table->string('description', 100);
            $table->string('typeOfProduct', 40);

            $table->unsignedInteger('ordersId');

            $table->foreign('ordersId')->references('id')->on('orders');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('model_defaults');
    }
};
