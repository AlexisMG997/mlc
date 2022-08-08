<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class equipment extends Model
{
    use HasFactory;

    use HasFactory;
    
    protected $table = 'equipment';

    protected $primaryKey = 'id';

    //A model has an order
    public $timestamps = false;
    public function parameters()
    {
        return $this->hasMany(parameter::class); 
    }
}
