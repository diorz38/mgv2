<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// MAIN PAGE ROUTES
// Route::get('/', function () {
//     return view('front');

// });
Route::get('/', 'FrontController@index');

Route::get('/museums/{id}', 'MuseumsController@show');

// PAGES ROUTES
Route::get('/sejarah', function () {
    // return view('site');
    return view('pages.sejarah');
});

Route::get('/organisasi', function () {
    // return view('site');
    return view('pages.organisasi');
});

Route::get('/fasilitas', function () {
    // return view('site');
    return view('pages.fasilitas');
});

Route::get('/tugasfungsi', function () {
    // return view('site');
    return view('pages.tugasfungsi');
});

Route::get('/aku-ingin-tahu', function () {
    // return view('site');
    return view('pages.aku-ingin-tahu');
});

Route::get('/dibalik-layar', function () {
    // return view('site');
    return view('pages.dibalik-layar');
});

Route::get('/aku-punya-cerita', function () {
    // return view('site');
    return view('pages.aku-punya-cerita');
});

Route::get('/koleksi-batuan', function () {
    // return view('site');
    return view('pages.koleksi-batuan');
});

Route::get('/koleksi-mineral', function () {
    // return view('site');
    return view('pages.koleksi-mineral');
});

Route::get('/koleksi-batumulia', function () {
    // return view('site');
    return view('pages.koleksi-batumulia');
});

Route::get('/koleksi-fosil', function () {
    // return view('site');
    return view('pages.koleksi-fosil');
});

Route::get('/koleksi-artefak', function () {
    // return view('site');
    return view('pages.koleksi-artefak');
});

Route::get('/koleksi-arsip', function () {
    // return view('site');
    return view('pages.koleksi-arsip');
});

Route::get('/r-simpan-koleksi', function () {
    // return view('site');
    return view('pages.r-simpan-koleksi');

});

Route::get('/manajemen-koleksi', function () {
    // return view('site');
    return view('pages.manajemen-koleksi');

});

Route::get('/p-tetap', function () {
    // return view('site');
    return view('pages.pameran-tetap');

});
Route::get('/p-temporer', function () {
    // return view('site');
    return view('pages.pameran-temporer');

});
Route::get('/p-keliling', function () {
    // return view('site');
    return view('pages.pameran-temporer');

});

Route::get('/artikel', function () {
    // return view('site');
    return view('pages.artikel');

});

Route::get('/video', function () {
    // return view('site');
    return view('pages.video');

});

Route::get('/ebook', function () {
    // return view('site');
    return view('pages.ebook');

});

Route::get('/katalog', function () {
    // return view('site');
    return view('pages.katalog');

});

Route::get('/penelitian-ilmiah', function () {
    // return view('site');
    return view('pages.penelitian-ilmiah');

});

// MUSEUM
Route::get('/m-tsunami', function () {
    // return view('site');
    return view('pages.museum.m-tsunami');
});
Route::get('/m-pltd-apung', function () {
    // return view('site');
    return view('pages.museum.m-pltd-apung');
});
Route::get('/m-kars-indonesia', function () {
    // return view('site');
    return view('pages.museum.m-kars-indonesia');
});
Route::get('/m-geopark-batur', function () {
    // return view('site');
    return view('pages.museum.m-geopark-batur');
});
Route::get('/m-gunungapi-merapi', function () {
    // return view('site');
    return view('pages.museum.m-gunungapi-merapi');
});

Route::get('/detil-highlight', function () {
    // return view('site');
    return view('pages.detil-highlight');
});

Route::get('/detil-kegiatan', function () {
    // return view('site');
    return view('pages.kegiatan');
});

Route::get('/detil-berita', function () {
    // return view('site');
    return view('pages.berita.berita');
});

Route::get('/sample', function () {
    return view('themes.pages.home');
});


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
