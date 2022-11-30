<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class station extends Model
{
    use HasFactory;
    
    protected $table = 'stations';

    protected $primaryKey = 'id';

    //A model has an order

    public function instruction()
    {
        return $this->hasMany(instruction::class, 'station_id'); //Search order_id
    }
}
