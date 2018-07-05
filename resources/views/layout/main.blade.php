<!DOCTYPE html>

<html class="no-js" lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>{{setting('site.title')}}</title>
    <meta name="description" content="{{setting('site.description')}}">
    <meta name="author" content="setting('site.title')">
    <meta name="keyword" content="museum geologi, museum, muzee, musee, asia, south east asia, indonesia, jawa barat, bandung, wisata, budaya, geologi, koleksi, batuan, mineral, batu mulia, fosil, artefak, arsip, tsunami, kars, gunungapi, geopark, sejarah, dinosaurus, informasi, asia tenggara, rock, geology, geological, fossil, dinosaur, history, information, collection, data, pameran, exhibition, kegiatan, event, scientific, research, penelitian, bumi, earth, evolusi, evolution, tour, tourism, aceh, batur, merapi, belajar, jelajah, store, esdm, diponegoro, kementerian, cultural, reservasi, reservation, tiket, ticket, kehidupan, sumber daya, manfaat, bencana, art deco, heritage, menalda van schouwenburg, gouvernment bedrijven, gedung sate, gasibu, geologische museum, dienst van het mijnwezen, dienst van den mijnbouw, kogyoo zimusho, chishitsu chosasho, laboratorium paleontologi dan kimia, pusat djawatan tambang dan geologi, badan geologi, kementerian energi dan sumber daya mineral">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- FAVICON -->
    <link rel="shortcut icon" href="{{ asset('assets/img/index.png') }}" />
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <link rel="shortcut icon" href="{{ asset('assets/img/index.png') }}" type="image/x-icon">
    <link rel="icon" href="{{ asset('assets/img/index.png" type="image/x-icon') }}">

    @section('main_css')
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/normalize.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/font-awesome.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/fonts/proxima/fonts.min.css') }}">

    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,800" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Palanquin+Dark" rel="stylesheet">
    {{-- <link href="https://fonts.googleapis.com/css?family=Amaranth" rel="stylesheet">  --}}

    <link rel="stylesheet" type="text/css" href="{{ asset('assets/modules/bootstrap/css/bootstrap.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/style.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/responsive.css') }}">
    @show
    


</head>

<body>
    <!--back to top-->
    <div id="backtop"><i class="fa fa-chevron-circle-up"></i></div>
    <!--end back to top-->
    <div id="preloader">
        <div id="status">&nbsp;</div>
    </div>
    <!-- Body content -->

    <!--top header-->
    <div class="header-connect">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-sm-8  col-xs-12">
                    <div class="header-half header-social">
                        <ul class="list-inline">
                            <a href="#">EN</a> &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                            <li><a href="https://www.facebook.com/groups/60256428517/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                            &nbsp;&nbsp;&nbsp;
                            <li><a href="https://twitter.com/geomuzee" target="_blank"><i class="fa fa-twitter"></i></a></li>
                            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                            <li><a href="reservasi.php"><i class="fa fa-ticket"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-2 col-md-offset-5  col-sm-3 col-sm-offset-1  col-xs-12">
                    <div class="header-half header-call">
                        <div class="form">
                            <form role="search" method="get" id="searchform" action="">
                                <input type="text" placeholder="Cari" id="s" name="s" value="">
                                <input type="submit" value="" id="searchsubmit">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End top header -->

            @include('partials.menus')

            @yield('content')

        <!--End Highlight-->

            @include('partials.footer')
            @section('main_js')
                <script src="{{ asset('assets/js/float-panel.js') }}"></script>
                <script src="{{ asset('assets/js/jquery-1.11.1.min.js') }}"></script>
                <script src="{{ asset('assets/modules/bootstrap/js/bootstrap.min.js') }}"></script>
                <script src="{{ asset('assets/js/bootstrap-select.min.js') }}"></script>
                <script src="{{ asset('assets/js/bootstrap-hover-dropdown.js') }}"></script>
                <script src="{{ asset('assets/js/main.js') }}"></script>
                @show

</body>
</html>