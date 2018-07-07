<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Traits\Resizable;
use TCG\Voyager\Traits\Translatable;


class MuseumDetil extends Model
{
    use Translatable,
        Resizable;

    protected $translatable = ['title', 'body'];

    protected $guarded = [];
    
}
