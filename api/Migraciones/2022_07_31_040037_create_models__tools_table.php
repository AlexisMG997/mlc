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
        Schema::create('models__tools', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('modelDefaulId');
            $table->unsignedInteger('ToolId');

            $table->foreign('modelDefaulId')->references('id')->on('model_defaults');
            $table->foreign('ToolId')->references('id')->on('Tools');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('models__tools');
    }
};
