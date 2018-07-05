    <script src="{{ asset('assets/js/float-panel.js') }}"></script>
    <script src="{{ asset('assets/js/jquery-1.11.1.min.js') }}"></script>
    <script src="{{ asset('assets/modules/movingbox/js/jquery-1.12.0.min.js') }}"></script>
    <script src="{{ asset('assets/modules/bootstrap/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/js/bootstrap-select.min.js') }}"></script>
    <script src="{{ asset('assets/js/bootstrap-hover-dropdown.js') }}"></script>
    <script src="{{ asset('assets/js/main.js') }}"></script>
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
