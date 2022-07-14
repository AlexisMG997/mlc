<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class productTest extends Model
{
    use HasFactory;
    protected $fillable = ['AirPressure', 'time','ProcessNumber'];
}
