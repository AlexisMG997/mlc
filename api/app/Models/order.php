<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order extends Model
{
    use HasFactory;
    
    protected $table = 'orders';

    protected $primaryKey = 'id';

    //A model has an order
    protected $fillable = ['quantity', 'goodUnits', 'scrap'];
    public $timestamps = false;
    public function modelDefault()
    {
        return $this->hasOne(modelDefault::class, 'ordersId'); 
    }

}
