<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class orderLog extends Model
{
    use HasFactory;
    
    protected $table = 'orderlogs';

    protected $primaryKey = 'id';

}