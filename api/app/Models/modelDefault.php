<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modelDefault extends Model
{
    use HasFactory;

    protected $table = 'model_defaults';

    protected $primaryKey = 'id';

    protected $fillable = ['name','description','typeOfProduct'];

    public function order(){
        return $this->belongsTo(order::class, 'id');
    }
}
