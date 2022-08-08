<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class parameter extends Model
{
    use HasFactory;
    
    protected $table = 'parameters';

    protected $primaryKey = 'id';

    //A model has an order

    public function equipment()
    {
        return $this->belongsTo(equipment::class, 'equipment_id'); //Search order_id
    }
}
