<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Content;
use App\Data_type;

class FrontController extends Controller
{
    public function index()
    {
      $events = Content::where('category_id', 2)->orderBy('created_at', 'desc')->take(2)->get();
      $news = Content::where('category_id', 1)->orderBy('created_at', 'desc')->get();

    //   return dd($Events);
      return view('front', compact('events','news'));
   }
}
