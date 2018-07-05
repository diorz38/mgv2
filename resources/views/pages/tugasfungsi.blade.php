@extends('layout.main')

 @section('main_css')
    @parent

    <link href="{{ asset('assets/modules/history/assets/css/main.css') }}" rel="stylesheet">
@endsection

@section('content')

    <!-- AREA KONTEN -->
        <div class="content-area blog-page padding-top-40" style="background-color: #f5f5fa; padding-bottom: 55px;">
            <section id="main">
                <div class="inner">

                <!-- One -->
                    <section id="one" class="wrapper style1">

                        
                        <header class="special" style="background-color: #f5f5fa;">
                            <h2>TUGAS & FUNGSI</h2>
                            
                        </header>
                        
                    </section>

                <!-- Two -->
                    

                <!-- Three -->
                    <section id="three" class="wrapper">
                        
                        <div class="spotlight">
                            <div class="image flush"><img src="images/tugasfungsi/01.jpg" alt="" /></div>
                            <div  class="inner">
                                
                                <H5 style="text-align: justify;">Berdasarkan Peraturan Menteri ESDM No. 12 Tahun 2013 bahwa Museum geologi merupakan Unit pelaksana Teknis di lingkungan Badan Geologi yang berada di bawah dan bertanggung jawab langsung kepada Kepala Badan Geologi.</H5><p></p>
<h4>TUGAS</h4>
<p>
Melaksanakan pengelolaan, penelitian, pengembangan, konservasi, peragaan dan penyebarluasan informasi koleksi geologi.</p>

<h4>FUNGSI</h4>
<p>
Dalam melaksanakan tugasnya, Museum Geologi menyelenggarakan fungsi:
</P>

    <ol style="list-style-type: lower-latin;line-height: 16px;text-align: justify;"> 
<li>Penyusunan rencana dan program serta pengelolaan kerja sama.
<li>Pelaksanaan pengelolaan koleksi.
<li>Pelaksanaan penelitian, pengembangan, dan konservasi koleksi Geologi.
<li>Pelaksanaan peragaan dan pameran koleksi geologi.
<li>Pelaksanaan bimbingan edukasi dan penyebarluasan informasi koleksi geologi.
<li>Pengelolaan sarana dan prasarana dan Pelaksanaan ketatausahaan, kepegawaian, keuangan, dan rumah tangga.
</ol>
                            </div>
                        </div>
                        
                    </section>

                </div>
            </section>
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
