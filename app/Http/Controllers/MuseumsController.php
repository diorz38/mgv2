<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Museum;

class MuseumsController extends Controller
{

    public function show($id)
        {
            $museum = Museum::findOrFail($id);

            // dd($museum);

            return view('pages.museums', compact('museum'));
        }
}