@extends('layout.main')

@section('main_css')
    @parent
    <link type="text/css" media="all" href="{{ asset('assets/modules/movingbox/css/owl.carousel.min.css') }}" rel="stylesheet">
    <link type="text/css" media="all" href="{{ asset('assets/modules/movingbox/css/style.css') }}" rel="stylesheet">
@endsection

@section('content')

<!-- AREA KONTEN -->    
<!-- Berita utama -->
<div class="content-area blog-page padding-top-40" style="background-color: #f5f5fa; padding-bottom: 55px;">
            <div class="container">
                <div class="row">
                    <div class="blog-lst col-md-12 pl0">
                        <section id="id-100" class="post single">

                            <div class="post-header single">
                                <div class="">
                                    <h5>20 June 2013</h5>
                                    
                                    <h2 class="wow fadeInLeft animated">FASHIN NOW 2016</h2>
                                    <div class="title-line wow fadeInRight animated"></div>
                                </div>
                                <div class="row wow fadeInRight animated">
                                    
                                    
                                </div>
                                <hr>
                                <div class="img-float2"> 
                                    <img src="images/berita/thumb01.jpg" alt="Example blog post alt">
                                    
                                    <blockquote><strong><p>Pellentesque habitant morbi tristique</strong> 
                                    senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.</p></blockquote><hr>
                                </div>
                            </div> 

                            <div id="post-content" class="post-body single wow fadeInLeft animated">
                                
                                
                                                             
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada
                                        tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.
                                    </p>
                                

                                <h3>Header Level 3</h3>

                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                                    ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                    <li>Aliquam tincidunt mauris eu risus.</li>
                                </ul>
                               
                                <p>
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros
                                    eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
                                </p>

                            </div>
                             

                        </section> 


                        
                    </div>                                 
                </div>

            </div>
        </div>
<!-- end berita utama -->

<!-- Berita Lain area -->
    <div class="content-area home-area-1 recent-property" style="background-color: #FFF; padding-top: 5px;padding-bottom: 50px;">
        <div class="demo">
        <div class="container">
            
            <div class="row">
                <div class="col-md-12">
                    <div id="news-slider" class="owl-carousel">
                        <div class="post-slide">
                            
                            <div class="post-content">
                                <img src="images/berita/thumb01.jpg" alt="">
                            <div class="post-date">
                                <span class="date">15 Feb 2018</span>
                                
                            </div>
                                <h4 class="orange">
                                    Lorem ipsum dolor sit amet, consectetur.
                                </h4>

                                <p class="post-description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum porro quisquam repellendus tempora? Pariatur.
                                </p>
                                <p><a class="login-social" href="berita.html">Selengkapnya ></a></p>
                            </div>

                        </div>

                        <div class="post-slide">
                            
                            <div class="post-content">
                                <img src="images/berita/thumb02.jpg" alt="">
                            <div class="post-date">
                                <span class="date">17 Jan 2018</span>
                               
                            </div>
                                <h4 class="orange">
                                    Lorem ipsum dolor sit amet, consectetur.
                                </h4>

                                <p class="post-description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum porro quisquam repellendus tempora? Pariatur.
                                </p>
                                <p><a class="login-social" href="berita.html">Selengkapnya ></a></p>
                            </div>
                        </div>

                        <div class="post-slide">
                            
                            <div class="post-content">
                                <img src="images/berita/thumb03.jpg" alt="">
                            <div class="post-date">
                                <span class="date">18 Des 2017</span>
                                
                            </div>
                                <h4 class="orange">
                                    Lorem ipsum dolor sit amet, consectetur.
                                </h4>

                                <p class="post-description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum porro quisquam repellendus tempora? Pariatur.
                                </p>
                                <p><a class="login-social" href="berita.html">Selengkapnya ></a></p>
                            </div>
                        </div>

                        <div class="post-slide">
                            
                            <div class="post-content">
                                <img src="images/berita/thumb02.jpg" alt="">
                            <div class="post-date">
                                <span class="date">19 Des 2017</span>
                                
                            </div>
                                <h4 class="orange">
                                    Lorem ipsum dolor sit amet, consecteturtttt.
                                </h4>

                                <p class="post-description">
                                    LLLLLorem ipsum dolor sit amet, consectetur adipisicing elit. Cum earum porro quisquam repellendus tempora? Pariatur.
                                </p>
                                <p><a class="login-social" href="berita.html">Selengkapnya ></a></p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
   
        </div>
    </div>
    <!-- END berita lain area -->
            
<!-- AREA KONTEN -->                               
@endsection

@section('main_js')
@parent
    <script type="text/javascript">
        window.onscroll = function() {
            myFunction()
        };

        var navbar = document.getElementById("nav-bar");
        var sticky = navbar.offsetTop;
        $('.navbar-brand img').attr('src', 'assets/img/logomg-48.png');
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("navbar-fixed-top");
                navbar.classList.add("navbar-default2");
                navbar.classList.add("navbar2");
                $('.navbar-brand img').attr('src', 'assets/img/logo-white.png');
            } else {
                navbar.classList.remove("navbar-fixed-top");
                navbar.classList.remove("navbar-default2");
                navbar.classList.remove("navbar2");
                $('.navbar-brand img').attr('src', 'assets/img/logomg-48.png');
            }
        };
    </script>

    <script type="text/javascript" src="modules/movingbox/js/jquery-1.12.0.min.js"></script>
    <script type="text/javascript" src="modules/movingbox/js/owl.carousel.min.js"></script>

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
@endsection
