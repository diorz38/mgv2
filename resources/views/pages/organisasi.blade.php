@extends('layout.main') 

@section('main_css') 
@parent
@endsection

@section('content')

<!-- AREA KONTEN -->
<div class="content-area home-area-1 recent-property" style="background-color: #f5f5fa; padding-top: 10px;padding-bottom: 50px;">
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                <h2 class="black">Organisasi</h2> 
                
                <img src="images/organisasi/strukorg.jpg" style="width: 100%;
    height: auto;">
            
            </div>       
        </div>
    </div>
</div>

<!-- end AREA KONTEN -->

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

@endsection
