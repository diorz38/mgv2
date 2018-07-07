@extends('layout.main')
    @section('main_css')
    @parent
    <!-- SLIDESHOW -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/modules/elasticslideshow/css/style.css') }}">
    <!-- END SLIDESHOW -->

    <!-- headline -->
    <!--<link rel="stylesheet" type="text/css" href="modules/accord/css/style.css">-->
    <!-- end headline -->

    <!-- other museum -->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/modules/sexytabs/css/style.css') }}">
    <!-- end other museum -->
    
    <link rel="stylesheet" type="text/css" media="all" href="{{ asset('assets/modules/movingbox/css/style.css') }}">
    <link rel="stylesheet" type="text/css" media="all" href="{{ asset('assets/modules/movingbox/css/owl.carousel.min.css') }}">
 
    <!--sheetslider-->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/modules/sheetslider/css/sheetslider.css') }}">
    <!--end sheetslider-->

    <!--map-->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/modules/leaflet/css/leaflet.css') }}">
    <!--end map-->
    @endsection

@section('content')
    <!-- Slideshow -->
    <div id="ei-slider" class="ei-slider">
        <ul class="ei-slider-large">
            <li>
                <img src="images/slider/1.jpg" alt="image01" />
                <div class="ei-title">
                    <h3>MUSEUM GEOLOGI</h3>
                </div>
            </li>
            <li>
                <img src="images/slider/2.jpg" alt="image02" />
                <div class="ei-title">
                    <h3>Sejarah Kehidupan</h3>
                </div>
            </li>
            <li>
                <img src="images/slider/3.jpg" alt="image03" />
                <div class="ei-title">
                    <h3>Geologi Indonesia</h3>
                </div>
            </li>
            <li>
                <img src="images/slider/4.jpg" alt="image04" />
                <div class="ei-title">
                    <h3>Sumber Daya Geologi</h3>
                </div>
            </li>
            <li>
                <img src="images/slider/5.jpg" alt="image05" />
                <div class="ei-title">
                    <h3>Manfaat Geologi</h3>
                </div>
            </li>
            <li>
                <img src="images/slider/6.jpg" alt="image06" />
                <div class="ei-title">
                    <h3>Bencana Geologi</h3>
                </div>
            </li>
            <li>
                <img src="images/slider/7.jpg" alt="image07" />
                <div class="ei-title">
                    <h3>Museum Geologi</h3>
                </div>
            </li>
        </ul>
        <!-- ei-slider-large -->
        <ul class="ei-slider-thumbs">
            <li class="ei-slider-element">Current</li>
            <li></li>
            <li><a href="#">Slide 1</a></li>
            <li><a href="#">Slide 2</a></li>
            <li><a href="#">Slide 3</a></li>
            <li><a href="#">Slide 4</a></li>
            <li><a href="#">Slide 5</a></li>
            <li><a href="#">Slide 7</a></li>
        </ul>
        <!-- ei-slider-thumbs -->
    </div>
    <!-- end slideshow -->


    <!--Highlight-->
    <div class="content-area home-area-1 recent-property" style="background-color: #f5f5fa; padding-top: 100px;padding-bottom: 10px;">
        <div class="container">
            <div class="row">
                <div class="sheetSlider sh--default">
                    <input id="s1" type="radio" name="slide1" checked/>
                    <input id="s2" type="radio" name="slide1" />
                    <input id="s3" type="radio" name="slide1" />
                    <input id="s4" type="radio" name="slide1" />
                    <input id="s5" type="radio" name="slide1" />
                    <div class="sh__content">

                        <!-- Slider Item -->
                        <div class="mycol-container">
                            <div class="mycol1">
                                <img src="images/highlight/MGB-00033165.jpg" />
                            </div>
                            <div class="mycol2">
                                <h3>Earth Day 2018</h3>
                                <h5 class="block-with-text">The Hitch Hikers Guide to the Galaxy has a few things to say on the subject of towels.
A towel, it says, is about the most massively useful thing an interstellar hitch hiker can have. Partly it has great practical value - you can wrap it around you for warmth as you bound across the cold moons of  Jaglan Beta; you can lie on it on the brilliant marble-sanded beaches of Santraginus V, inhaling the heady sea vapours; you can sleep under it beneath the stars which shine so redly on the desert world of Kakrafoon;  use it to sail a mini raft down the slow heavy river Moth; wet it for use in hand-to-hand-combat; wrap it round your head to ward off noxious fumes or to avoid the gaze of the Ravenous Bugblatter Beast of Traal (a mindboggingly stupid animal, it assumes that if you can't see it, it can't see you - daft as a bush, but very ravenous); you can wave your towel in emergencies as a distress signal, and of course dry yourself off with it if it still seems to be clean enough. More importantly, a towel has immense psychological value. For some reason, if a strag (strag: non-hitch hiker) discovers that a hitch hiker has his towel with him, he will automatically assume that he is also in possession of a toothbrush, face flannel, soap, tin of biscuits, flask, compass, map, ball of string, gnat spray, wet weather gear, space suit etc.</h5>
                                <p><a href="detil-highlight">Selengkapnya ></a></p>
                            </div>
                        </div>

                        <!-- Slider Item -->
                        <div class="sh__item">
                            <div class="mycol-container">
                                <div class="mycol1">
                                    <img src="images/highlight/MGB-00033166.jpg" />
                                </div>
                                <div class="mycol2">
                                    <h3>Koleksi Batuan Terbaru</h3>
                                    <h5 class="block-with-text">2Shedding light on the collection of paintings housed at the musée du quai Branly - Jacques Chirac.</h5>
                                    <p><a href="detil-highlight">Selengkapnya ></a></p>
                                </div>
                            </div>
                        </div>

                        <!-- Slider Item -->
                        <div class="sh__item">
                            <div class="mycol-container">
                                <div class="mycol1">
                                    <img src="images/highlight/MGB-00033167.jpg" />
                                </div>
                                <div class="mycol2">
                                    <h3>Cat under a carpet</h3>
                                    <h5 class="block-with-text">3Shedding light on the collection of paintings housed at the musée du quai Branly - Jacques Chirac.</h5>
                                    <p><a href="detil-highlight">Selengkapnya ></a></p>
                                </div>
                            </div>
                        </div>

                        <!-- Slider Item -->
                        <div class="sh__item">
                            <div class="mycol-container">
                                <div class="mycol1">
                                    <img src="images/highlight/MGB-00033168.jpg" />
                                </div>
                                <div class="mycol2">
                                    <h3>Watercolor landscape</h3>
                                    <h5 class="block-with-text">4Shedding light on the collection of paintings housed at the musée du quai Branly - Jacques Chirac. 4Shedding light on the collection of paintings housed at the musée du quai Branly - Jacques Chirac.</h5>
                                    <p><a href="detil-highlight">Selengkapnya ></a></p>
                                </div>
                            </div>
                        </div>

                        <!-- Slider Item -->
                        <div class="sh__item">
                            <div class="mycol-container">
                                <div class="mycol1">
                                    <img src="images/highlight/MGB-00033169.jpg" />
                                </div>
                                <div class="mycol2">
                                    <h3>Cute girl and cat</h3>
                                    <h5 class="block-with-text">5Shedding light on the collection of paintings housed at the musée du quai Branly - Jacques Chirac.</h5>
                                    <p><a href="detil-highlight">Selengkapnya ></a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- .sh__content -->

                    <!--botones-->
                    <div class="sh__btns">
                        <label class="trims" for="s1">Earth Day 2018 Earth Day 2018</label>
                        <label class="trims" for="s2">Koleksi Batuan Terbaru</label>
                        <label class="trims" for="s3">Cat under a carpet</label>
                        <label class="trims" for="s4">Watercolor landscape</label>
                        <label class="trims" for="s5">Cute girl and cat</label>
                    </div>
                    <!-- .sh__btns -->

                    <!--flechas-->
                    <div class="sh__arrows">
                        <label for="s1"></label>
                        <label for="s2"></label>
                        <label for="s3"></label>
                        <label for="s4"></label>
                        <label for="s5"></label>
                    </div>
                    <!-- .sh__arrows -->

                </div>
                
            </div>

            
    <!-- Koleksi -->
    <div class="content-area home-area-1 recent-property" style="background-color: #f5f5fa; padding-bottom: 10px;">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                    <!-- /.feature title -->
                    <h2 class="black">Koleksi</h2>
                    <!--
                    <h4>View the themed tours</h4>
                    -->
                    <p></p>

                </div>
            </div>
            <div class="row">
                <div class="collection-th">
                    <div class="col-sm-6 col-md-4 p0">
                        <div class="box-two collection-item">
                            <div class="item-thumb">
                                <img src="images/koleksi/batuan.jpg">
                                <div class="mymiddle">
                                    <h3>BATUAN</h3>
                                    <div class="mybutton">
                                        <a href="koleksi-batuan">Koleksi Selengkapnya</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-4 p0">
                        <div class="box-two collection-item">
                            <div class="item-thumb">
                                <img src="images/koleksi/mineral.jpg">
                                <div class="mymiddle">
                                    <h3>MINERAL</h3>
                                    <div class="mybutton">
                                        <a href="koleksi-mineral">Koleksi Selengkapnya</a>
                                    </div>                                   
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-4 p0">
                        <div class="box-two collection-item">
                            <div class="item-thumb">
                                <img src="images/koleksi/batumulia.jpg">
                                <div class="mymiddle">
                                    <h3>BATU MULIA</h3>
                                    <div class="mybutton">
                                        <a href="koleksi-batumulia">Koleksi Selengkapnya</a>
                                    </div>                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-4 p0">
                        <div class="box-two collection-item">
                            <div class="item-thumb">
                                <img src="images/koleksi/fosil.jpg">
                                <div class="mymiddle">
                                    <h3>FOSIL</h3>
                                    <div class="mybutton">
                                        <a href="koleksi-fosil">Koleksi Selengkapnya</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-4 p0">
                        <div class="box-two collection-item">
                            <div class="item-thumb">
                                <img src="images/koleksi/artefak.jpg">
                                <div class="mymiddle">
                                    <h3>ARTEFAK</h3>
                                    <div class="mybutton">
                                        <a href="koleksi-artefak">Koleksi Selengkapnya</a>
                                    </div>                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-4 p0">
                        <div class="box-two collection-item">
                            <div class="item-thumb">
                                <img src="images/koleksi/arsip.jpg">
                                <div class="mymiddle">
                                    <h3>ARSIP</h3>
                                    <div class="mybutton">
                                        <a href="koleksi-arsip">Koleksi Selengkapnya</a>
                                    </div>                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end koleksi -->

    <!-- Kegiatan area -->
    <div class="content-area home-area-1 recent-property" style="background-color: #fafafa; padding-bottom: 10px;">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                    <!-- /.feature title -->
                    <h2 class="black">Kegiatan</h2>
                    <p></p><br>
                </div>
            </div>
            <div class="row">
                <div class="collection-th">
                    <section class="sec-100px event">
                        <div class="container">
                            <!-- Event -->
                            <div class="row">

                                <!-- Event 1 -->
                                @foreach ($events as $event)
                                <div class="col-md-6">
                                    <ul>
                                        <!-- Image -->
                                        <li class="col-sm-6 no-padding"> <img class="img-responsive" src="{{ 'storage1/'.$event->image }}" alt="">
                                            <div class="date">{{ \Carbon\Carbon::parse($event->created_at)->format('d')}}
                                                <div class="tanggal">{{ \Carbon\Carbon::parse($event->created_at)->format('M Y')}}</div>
                                            </div>
                                        </li>
                                        <!-- Detail -->
                                        <li class="col-sm-6 no-padding">
                                            <div class="event-detail">
                                                <h4> {{ $event->getTranslatedAttribute('title') }} </h4>
                                                <h6><i class="fa fa-map-marker"></i>&nbsp; Bandung, Indonesia<br><i class="fa fa-clock-o"></i>&nbsp; 10.00-12.00 WIB</h6>
                                                <p class="block-with-text">{{ $event->getTranslatedAttribute('excerpt') }}</p>
                                                <p><a class="login-social" href="detil-kegiatan">Selengkapnya ></a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                @endforeach
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
    <!--======= END Kegiatan =========-->

    <!-- Berita area -->
    <div class="content-area home-area-1 recent-property" style="background-color: #f5f5fa; padding-top: 5px;padding-bottom: 50px;">
        <div class="demo">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                        <!-- /.feature title -->
                        <h2 class="black">Berita</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div id="news-slider" class="owl-carousel">
                                @foreach ($news as $n)
                                <div class="post-slide">
                                    <div class="post-content">
                                        <img src="{{ 'storage1/'.$n->image }}" alt="">
                                        <div class="post-date">
                                            <span class="date">{{ \Carbon\Carbon::parse($n->created_at)->format('d M Y')}}</span>
                                        </div>
                                        <h4 class="orange">
                                            {{ $n->getTranslatedAttribute('title') }}.
                                        </h4>
                                        <p class="post-description">
                                            {{ $n->getTranslatedAttribute('excerpt') }}
                                        </p>
                                        <p><a class="login-social" href="detil-berita">Selengkapnya></a></p>
                                    </div>
                                </div>
                                @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END berita area -->
    </div>
    </div>

    <!--Museum Kegeologian-->
    <section style="background:#FFF; padding-bottom: 55px;">

        <!--Other Museum area -->
        <div class="tab">
            <div class="row">
                <div class="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                    <!-- /.feature title -->
                    <h2 class="black">MUSEUM KEGEOLOGIAN</h2>
                    <p></p><br>
                </div>
            </div>
            <ul class="tabs">
                @foreach ($museums as $m)
                <li><a href="m-tsunami">{{$m->getTranslatedAttribute('name')}}</a></li>
                @endforeach
                {{-- <li><a href="m-pltd-apung">Museum PLTD Apung Aceh</a></li>
                <li><a href="m-kars-indonesia">Museum Kars Indonesia</a></li>
                <li><a href="m-geopark-batur">Museum Geopark Batur</a></li>
                <li><a href="m-gunungapi-merapi">Museum Gunungapi Merapi</a></li> --}}
            </ul>
            <!-- / tabs -->
            <div class="tab_content">
                <!-- / tabs_item -->
                @foreach ($museums as $museum)
                <div class="tabs_item">
                    <div class="row">
                        <div class="blog-lst col-md-12 pl0">
                            <section id="id-100" class="post single">
                                <div class="post-header single">                              
                                    <div class="img-float3"> 
                                        <img src="{{ asset('images/muzee_geo/tsunami/1.jpg') }}" alt="">                              
                                    </div>
                                </div>
                                <div id="post-content" class="text-float2">                                
                                    <h3>{{ $museum->getTranslatedAttribute('name')}}</h3>
                                    <p class="block-with-text">
                                         {{substr(strip_tags($museum->getTranslatedAttribute('desc')), 0, 200) }}
                                    </p>                                                          
                                   <p><a class="login-social" href="museums/{{$museum->id}}">Selengkapnya ></a></p>
                                </div>
                            </section>  
                        </div>                                 
                    </div>
                </div>
                @endforeach
            </div>
            <!-- / tab_content -->
        </div>
        <!-- / tab -->
        <!--END Other Museum area -->
        <!-- tab-content -->
    </section>
    <!--End Museum Kegeologian-->

    <!-- Reservation -->
    <div class="boy-sale-area">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-10 col-sm-offset-1 col-md-offset-0 col-xs-12">
                    <div class="asks-second">
                        <div id="osm-map"></div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-10 col-sm-offset-1 col-md-offset-0 col-xs-12">
                    <div class="asks-first">
                        <div class="asks-first-circle">
                            <span class="fa fa-calendar-check-o"></span>
                        </div>
                        <div class="asks-first-info">
                            <h5><b>JAM KUNJUNGAN</b></h5>
                            <p></p><p></p>
                            <h5 class="gold-bold">Senin-Kamis:</h5>
                            <h5 class="bawah">08:00 - 16:00 WIB</h5>
                            <h5 class="gold-bold">Sabtu-Minggu:</h5>
                            <h5 class="bawah">08:00 - 14:00 WIB</h5>
                            <h5 class="orange"><span class="fa fa-info-circle"></span>&nbsp;Tutup Setiap Jumat dan Hari Libur Nasional</h5>
                        </div>
                        <div class="asks-first-arrow">
                            <a href="reservasi.php"><span class="fa fa-angle-right"></span></a>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    <!-- END Reservation -->


@endsection

@section('main_js')
@parent
    <script type="text/javascript">
        window.onscroll = function() {
            myFunction()
        };

        var navbar = document.getElementById("nav-bar");
        var sticky = navbar.offsetTop;
        $('.navbar-brand img').attr('src', '{{ asset('assets/img/logomg-48.png') }}');
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("navbar-fixed-top");
                navbar.classList.add("navbar-default2");
                navbar.classList.add("navbar2");
            
                $('.navbar-brand img').attr('src', '{{ asset('assets/img/logo-white.png') }}');
            } else {
                navbar.classList.remove("navbar-fixed-top");
                navbar.classList.remove("navbar-default2");
                navbar.classList.remove("navbar2");
                
                $('.navbar-brand img').attr('src', '{{ asset('assets/img/logomg-48.png') }}');
            }
        };
    </script>

    <!-- slideshow -->
    <script src="{{ asset('assets/modules/elasticslideshow/js/jquery.eislideshow.js') }}"></script>
    <script src="{{ asset('assets/modules/elasticslideshow/js/jquery.easing.js') }}"></script>
    <script type="text/javascript">
        var $jnoc = jQuery.noConflict();
        $jnoc(function() {
                $jnoc('#ei-slider').eislideshow({
                    animation           : 'center',
                    autoplay            : true,
                    slideshow_interval  : 10000,
                    titlesFactor        : 0
                });
            });
    </script>
    <!-- end slideshow-->

    <!--museum kegeologian-->
    <script src="{{ asset('assets/modules/sexytabs/js/index.js') }}"></script>
    <!--end museum kegeologian-->

    <!--berita-->
    <script src="{{ asset('assets/modules/movingbox/js/jquery-1.12.0.min.js') }}"></script>
    <script src="{{ asset('assets/modules/movingbox/js/owl.carousel.min.js') }}"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $("#news-slider").owlCarousel({
                items : 3,
                itemsDesktop:[1199,2],
                itemsDesktopSmall:[980,2],
                itemsMobile : [700,1],
                pagination:false,
                navigation:true,
                navigationText:["",""],
                autoPlay:false
            });
        });
    </script>
    <!--end berita-->
    
    <!--map-->
    <script src="{{ asset('assets/modules/leaflet/js/leaflet.js') }}"></script>
    <script>
        // Where you want to render the map.
        var element = document.getElementById('osm-map');

        // Height has to be set. You can do this in CSS too.
        element.style = 'height:350px;';

        // Create Leaflet map on map element.
        var map = L.map(element);

        // Add OSM tile leayer to the Leaflet map.
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'}).addTo(map);

        // Target's GPS coordinates.
        var target = L.latLng('-6.900707766987326', '107.62148961424828');

        // Set map's center to target with zoom 14.
        map.setView(target, 17);

        // Place a marker on the same location.
        L.marker(target).addTo(map); 
        
        // Popup
        var popup = L.popup()
        .setLatLng([-6.900707766987326, 107.62148961424828])
        .setContent("<b>MUSEUM GEOLOGI</b><br>Jl. Diponegoro No. 57 Bandung 40122<br>Jawa Barat - Indonesia")
        .openOn(map);
    </script>
    <!-- end map -->
@endsection