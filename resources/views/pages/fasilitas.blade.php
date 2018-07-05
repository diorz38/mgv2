@extends('layout.main')

 @section('main_css')
    @parent

    <link type="text/css" href="{{ asset('assets/modules/accord/css/style.css') }}" rel="stylesheet">
@endsection

@section('content')
    <!-- AREA KONTEN -->
    <div class="content-area home-area-1 recent-property" style="background-color:#f5f5fa; padding-top:20px; padding-bottom:10px;">
        <div class="row">
                <div class="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
                    <!-- /.feature title -->
                    <h2 class="black">Fasilitas Museum Geologi</h2>
                    <p>Selain ruang peragaan dan ruang dokumentasi Museum Geologi mempunyai fasilitas-fasilitas lain yang dapat dimanfaatkan oleh pengunjung.</p>
                </div>
            </div>
        <div class="row margin-b-30">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="box london">
                    <div class="box-icon">
                        <img src="images/fasilitas/auditorium.jpg" alt="Image" class="img-responsive">
                    </div>
                    <div class="info float-container">
                        <div class="col-sm-12 london-title">
                            <h3>AUDITORIUM</h3>
                            
                        </div>
                        <p>Salah satu fasilitas Museum Geologi yang bisa pengunjung dapatkan selama berada di Museum Geologi adalah Auditorium. Kegiatan yang dilaksanakan di Auditorium adalah pemutaran film, ceramah, seminar, dan kegiatan lainnya yang berhubungan dengan pendidikan. Kapasitas Auditorium sebanyak 200 orang. Pemutaran film yang berdurasi + 20 menit bisa pengunjung dapatkan sesuai dengan jadwal yang telah ditentukan.</p>
                        
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="box paris">
                    <div class="box-icon">
                        <img src="images/fasilitas/edukasi.jpg" alt="Image" class="img-responsive">
                    </div>
                    <div class="info float-container">
                        <div class="col-sm-12 london-title paris-title">
                            <h3>RUANG EDUKASI</h3>
                            
                        </div>
                        <p>Selain Auditorium ada juga ruang edukasi yang bisa pengunjung manfaatkan. Kegiatan yang dilaksanakan di ruang edukasi adalah ceramah dan diskusi. Kapasitas ruang edukasi sebanyak + 40 orang. Pemanfaatan ruang edukasi harus ada pemberitahuan sebelumnya (tidak bisa mendadak).</p>
                        
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="box london">
                    <div class="box-icon">
                        <img src="images/fasilitas/pojokbaca.jpg" alt="Image" class="img-responsive">
                    </div>
                    <div class="info float-container">
                        <div class="col-sm-12 london-title">
                            <h3>POJOK BACA</h3>
                            
                        </div>
                        <p>Salah satu fasilitas pengunjung, untuk membaca buku tentang kegeologian. Terletak di sebelah timur laut hall lantai 1.</p>
                        
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="box paris">
                    <div class="box-icon">
                        <img src="images/fasilitas/lift.jpg" alt="Image" class="img-responsive">
                    </div>
                    <div class="info float-container">
                        <div class="col-sm-12 london-title paris-title">
                            <h3>LIFT</h3>
                         
                        </div>
                        <p>Museum Geologi menyiapkan lift khusus dan kursi roda untuk para penyandang disabilitas dan Lansia. Lift ini disiapkan untuk memudahkan disabilitas dan Lansia untuk akses dari Ruang peragaan lantai satu menuju ruang peragaan lantai dua.</p>
                        
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="box london">
                    <div class="box-icon">
                        <img src="images/fasilitas/masjid.jpg" alt="Image" class="img-responsive">
                    </div>
                    <div class="info float-container">
                        <div class="col-sm-12 london-title">
                            <h3>MASJID</h3>
                      
                        </div>
                        <p>Bagi para pengunjung Museum Geologi yang beragama Islam dan ingin melaksanakan sholat, Museum Geologi menyediakan masjid yang berada di sekitar Museum Geologi. masjid tersebut dapat menampung pengunjung sebanyak + 700 orang.</p>
                        
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="box paris">
                    <div class="box-icon">
                        <img src="images/fasilitas/toilet.jpg" alt="Image" class="img-responsive">
                    </div>
                    <div class="info float-container">
                        <div class="col-sm-12 london-title paris-title">
                            <h3>TOILET</h3>
                
                        </div>
                        <p>Fasilitas yang tidak kalah penting adalah toilet. Toilet pria dapat menampung 18 orang dalam satu waktu sementara toilet wanita dapat menampung 11 orang. Toilet ini terletak di sekitar ruang peraga lantai satu dan Auditorium.</p>
                        
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="box london">
                    <div class="box-icon">
                        <img src="images/fasilitas/taman.jpg" alt="Image" class="img-responsive">
                    </div>
                    <div class="info float-container">
                        <div class="col-sm-12 london-title">
                            <h3>TAMAN PENGGALIAN FOSIL</h3>
                        
                        </div>
                        <p>Taman ini merupakan sarana bermain anak-anak berupa kolam pasir yang di dalamnya terdapat replika fosil vertebrata. Melalui sarana ini anak-anak secara interaktif dapat mempraktekkan proses pencarian, penggalian, dan rekonstruksi fosil. Taman ini terletak disebelah timur taman siklus batuan.</p>
                        
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="box paris">
                    <div class="box-icon">
                        <img src="images/fasilitas/store.jpg" alt="Image" class="img-responsive">
                    </div>
                    <div class="info float-container">
                        <div class="col-sm-12 london-title paris-title">
                            <h3>GEO MUSEUM STORE</h3>
                            
                        </div>
                        <p>Salah satu fasilitas pengunjung untuk mendapatkan aneka ragam cenderamata, foto 3D bertema kegeologian. Terletak di sebelah barat halaman Museum Geologi.</p>
                        
                    </div>
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
