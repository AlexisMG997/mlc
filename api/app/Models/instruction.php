<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class instruction extends Model
{
    use HasFactory;
    
    protected $table = 'instructions';

    protected $primaryKey = 'id';

    //A model has an order

    public function station()
    {
        return $this->belongsTo(station::class, 'id'); //Search order_id
    }
}
