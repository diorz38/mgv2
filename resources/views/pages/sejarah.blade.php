@extends('layout.main') 

@section('main_css') 
@parent

    <!-- sejarah -->
    <link rel="stylesheet" href="modules/history/assets/css/main.css">
    <!-- end sejarah-->
@endsection 

@section('content')

    <!-- AREA KONTEN -->
        <div class="content-area blog-page padding-top-40" style="background-color: #f5f5fa; padding-bottom: 55px;">
            <section id="main">
                <div class="inner">

                <!-- One -->
                    <section id="one" class="wrapper style1">

                        <div class="image fit flush">
                            <img src="images/sejarah/pic02.jpg" alt="" />
                        </div>
                        <header class="special">
                            <h2>SEJARAH MUSEUM GEOLOGI</h2>
                            
                        </header>
                        <div class="content">
                            <p class="dahulu">Gedung Museum Geologi dibangun dengan arsitektur bergaya Art Deco. Gaya arsitektur ini lahir setelah Perang Dunia I dan berakhir sebelum Perang Dunia II. Arsitektur bergaya Art Deco di Indonesia dikenal melalui bangunan-bangunan peninggalan zaman Kolonial Belanda. Pada masa itu, Pemeritah Belanda banyak mendatangkan para arsitek andal dari negaranya untuk membangun dan menata gedung-gedung di kota Bandung, termasuk Museum Geologi.</p>
                            <p class="dahulu">Gedung Museum Geologi dibangun pada 1928 dan diresmikan pada 1929 bertepatan dengan Kongres Ilmu Pengetahuan Pasifik yang ke IV. Gedung Museum Geologi dibangun berdasarkan rancangan arsitektur karya seorang arsitek Belanda, Ir. H. Menalda van Schouwenburg.</p>
                        </div>
                    </section>

                <!-- Two -->
                    

                <!-- Three -->
                    <section id="three" class="wrapper">
                        <div class="spotlight alt">
                            <div class="image flush"><img src="images/sejarah/pic06.jpg" alt="" /></div>
                            <div class="inner">
                                <h3>Masa Penjajahan Belanda</h3>
                                <p>Berdirinya gedung Museum Geologi sangat erat kaitannya dengan sejarah penyelidikan geologi di Indonesia yang telah dimulai sejak 1850-an. Pada masa itu, survei-survei dan penelitian-penelitian geologi Indonesia dilakukan oleh Dienst van het Mijnwezen yang berkedudukan di Bogor (1852-1866). Pada 1866 -1924, lembaga ini pindah ke Jakarta. Kemudian pada 1924 pindah ke Bandung yang kantornya menempati gedung Gouvernment Bedrijven (sekarang Gedung Sate).</p>
                                <p>Mulai 1922 penelitian geologi semakin meningkat sehingga contoh batuan, mineral dan fosil yang dikumpulkan dari berbagai wilayah Indonesia semakin banyak. Akhirnya dibangunlah gedung yang diperuntukkan bagi Laboratorium dan Museum Geologi di Rembrandt Straat Bandung yang sekarang disebut Jl. Diponegoro, Bandung.</p><p>Pada 16 Mei 1929 bertepatan dengan Kongres Ilmu Pengetahuan Pasifik yang ke IV, Museum Geologi diresmikan dengan nama Geologische Museum yang merupakan unit kerja dari ???Dienst van het Mijnwezen??? yang berganti nama menjadi ???Dienst van den Mijnbouw???. Pameran pada waktu itu sangatlah sederhana, dimana berbagai koleksi Museum Geologi disimpan di dalam lemari kaca. Setiap koleksi dilengkapi label yang menginformasikan nomor koleksi, nama koleksi, tempat koleksi ditemukan, dan kolektornya.
                                </p>

                                
                            </div>
                        </div>
                        <div class="spotlight">
                            <div class="image flush"><img src="images/sejarah/pic07.jpg" alt="" /></div>
                            <div  class="inner">
                                <h3>Masa Pendudukan Jepang</h3>
                                <p>Pada masa Pendudukan Jepang (1942-1945), lembaga ???Dienst van den Mijnbouw??? diganti namanya menjadi ???Kogyoo Zimusho??? yang kemudian berganti lagi namanya menjadi ???Chishitsu Chosasho???. Museum Geologi pada masa itu merupakan bagian dari Laboratorium Paleontologi dan Kimia dari lembaga tersebut.</p>
                            </div>
                        </div>
                        <div class="spotlight alt">
                            <div class="image flush"><img src="images/sejarah/pic08.jpg" alt="" /></div>
                            <div class="inner">
                                <h3>Masa Sekarang</h3>
                                <p>Setelah Indonesia merdeka pada 1945, pengelolaan Museum Geologi berada di bawah Pusat Djawatan Tambang dan Geologi (PDTG, 1945-1950). Institusi ini berganti nama menjadi Djawatan Pertambangan Republik Indonesia (1950-1952), berganti nama lagi menjadi Djawatan Geologi (1952-1956), Pusat Djawatan Geologi (1956-1957), Djawatan Geologi (1957-1963), Direktorat Geologi (1963-1978), dan Pusat Penelitian dan Pengembangan Geologi (1978-2002).</p>
                                <p>
                                    Pada 2003 Museum Geologi menjadi Unit Pelaksana Teknis Museum Geologi (UPT MG) di bawah Pusat Survei Geologi, Badan Geologi, Kementerian Energi dan Sumber Daya Mineral (KESDM). Pada 2013, berdasarkan Permen ESDM No. 12 Tahun 2013, Museum Geologi menjadi Unit Pelaksana Teknis Museum Geologi (UPT MG), di bawah Badan Geologi, KESDM. Sejak 2017, Museum Geologi berada di bawah Sekretariat Badan Geologi, Badan Geologi, KESDM.
                                </p>
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
    <!--END global-->

@endsection
