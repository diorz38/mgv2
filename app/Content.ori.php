<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;


class Content extends Model
{
    use Translatable;
        // Resizable,
        // HasRelationships;

    protected $translatable = ['title', 'excerpt', 'body', 'slug' ];
    
}
