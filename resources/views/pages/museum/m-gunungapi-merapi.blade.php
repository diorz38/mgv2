@extends('layout.main')

@section('main_css')
    @parent

    <link type="text/css" href="{{ asset('assets/modules/sheetslider/css/sheetslider.css') }}" rel="stylesheet">
@endsection

@section('content')
    <!-- AREA KONTEN -->
    <div class="page-head">
        <div class="container">
            <div class="row">
                <div class="page-head-content">
                    <h1 class="page-title">Museum Gunungapi Merapi</h1>
                </div>
            </div>
        </div>
    </div>
<!--Slide-->
    <div class="content-area home-area-1 recent-property" style="background-color: #f5f5fa; padding-top: 20px;padding-bottom: 0;">
        <div class="container">
            
            <div class="row">
                <div class="sheetSlider sh--default" style="background-color: #929292;">
                    <input id="s1" type="radio" name="slide1" checked/>
                    <input id="s2" type="radio" name="slide1" />
                    <input id="s3" type="radio" name="slide1" />
                    <input id="s4" type="radio" name="slide1" />
                    <input id="s5" type="radio" name="slide1" />
                    <div class="sh__content">

                        <!-- Slider Item -->
                        <div class="mycol-container">
                            <div class="mycol1">
                                <img src="images/muzee_geo/tsunami/1.jpg" />
                            </div>
                            <div class="mycol2" style="background-color: #929292;">
                                <h2>Filosofi Museum</h2>
                                <h5 class="block-with-text2">Desain dan pembangunan Museum Aceh dengan konsep ???Rumoh Aceh as Escape Building??? mempunyai beragam filosofi.</h5>
                            </div>
                        </div>

                        <!-- Slider Item -->
                        <div class="sh__item">
                            <div class="mycol-container">
                                <div class="mycol1">
                                    <img src="images/muzee_geo/tsunami/2.jpg" />
                                </div>
                                <div class="mycol2" style="background-color: #929292;">
                                    <h2>Sea Waves</h2>
                                    <h5 class="block-with-text2">Denah bangunan merupakan analogi dari episenter sebuah gelombang laut sebagai pengingat akan tsunami.</h5>
                                </div>
                            </div>
                        </div>

                        <!-- Slider Item -->
                        <div class="sh__item">
                            <div class="mycol-container">
                                <div class="mycol1">
                                    <img src="images/muzee_geo/tsunami/3.jpg" />
                                </div>
                                <div class="mycol2" style="background-color: #929292;">
                                    <h2>Escape Building</h2>
                                    <h5 class="block-with-text2">Design Museum Tsunami ini berbentuk bukit penyelamatan sebagai antisipasi terhadap bahaya tsunami di masa yang akan datang.</h5>
                                </div>
                            </div>
                        </div>

                        <!-- Slider Item -->
                        <div class="sh__item">
                            <div class="mycol-container">
                                <div class="mycol1">
                                    <img src="images/muzee_geo/tsunami/4.jpg" />
                                </div>
                                <div class="mycol2" style="background-color: #929292;">
                                    <h2>Public Park</h2>
                                    <h5 class="block-with-text2">Museum Tsunami ini juga merupakan taman terbuka publik yang dapat diakses dan difungsikan setiap saat oleh masyarakat, sebagai respon terhadap konteks urban.</h5>
                                </div>
                            </div>
                        </div>

                        <!-- Slider Item -->
                        <div class="sh__item">
                            <div class="mycol-container">
                                <div class="mycol1">
                                    <img src="images/muzee_geo/tsunami/5.jpg" />
                                </div>
                                <div class="mycol2" style="background-color: #929292;">
                                    <h2>The Light of God (Hablumminallah)</h2>
                                    <h5 class="block-with-text2">Di dalam bangunan Museum Tsunami ini terdapat ruang berbentuk sumur silinder yang menyorotkan cahaya ke atas sebagai simbol hubungan manusia dengan Tuhannya.</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- .sh__content -->

                    <!--botones-->
                    <div class="sh__btns">
                        <label class="trims" for="s1">Filosofi Museum</label>
                        <label class="trims" for="s2">Sea Waves</label>
                        <label class="trims" for="s3">Escape Building</label>
                        <label class="trims" for="s4">Public Park</label>
                        <label class="trims" for="s5">The Light of God (Hablumminallah)</label>
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
        </div>
    </div>
    <!--End Slide-->

    <div class="content-area blog-page padding-top-40" style="background-color: #f5f5fa; padding-bottom: 55px;">
        <div class="container">



            

            

            

            <p>Museum Tsunami Aceh dibangun sebagai media untuk mengenang kembali musibah gempa bumi dan tsunami yang terjadi di Aceh pada 26 Desember 2004 yang mengakibatkan kurang lebih 127.720 orang meninggal, 93.285 orang dinyatakan hilang, dan 635.384
                orang kehilangan tempat tinggal. Museum ini dibangun di atas lahan seluas ??10.000 m2 yang terletak di Jalan Sultan Iskandar Muda No.3 Blang Padang Banda Aceh - Indonesia 23243, persisnya di bekas kantor Dinas Peternakan Aceh sebelah pemakaman
                kuburan Belanda (Kerkhoff) dan menghabiskan dana ?? 66.445.421.000 dalam proses pembangunannya. Museum ini diinisiasi atas prakarsa Badan Rehabilitasi dan Rekonstruksi (BRR) NAD-Nias sebagai penyandang anggaran bangunan dan Kementerian
                Energi dan Sumber Daya Mineral (ESDM) sebagai penyandang anggaran perencanaan, studi Isi, penyediaan koleksi museum dan pedoman pengelolaan museum. Sedangkan Posisi Pemerintah Aceh sebagai penyedia lahan dan pengelola museum, Pemerintah
                Kota Banda Aceh beserta Ikatan Arsitek Indonesia cabang Aceh membantu penyediaan sarana dan prasarana lingkungan museum dan membantu penyelenggaraan sayembara pra rencana pembangunan museum.</p>
            <p>Museum Tsunami Aceh dibangun sebagai media untuk mengenang kembali musibah gempa bumi dan tsunami yang terjadi di Aceh pada 26 Desember 2004 yang mengakibatkan kurang lebih 127.720 orang meninggal, 93.285 orang dinyatakan hilang, dan 635.384
                orang kehilangan tempat tinggal. Museum ini dibangun di atas lahan seluas ??10.000 m2 yang terletak di Jalan Sultan Iskandar Muda No.3 Blang Padang Banda Aceh - Indonesia 23243, persisnya di bekas kantor Dinas Peternakan Aceh sebelah pemakaman
                kuburan Belanda (Kerkhoff) dan menghabiskan dana ?? 66.445.421.000 dalam proses pembangunannya. Museum ini diinisiasi atas prakarsa Badan Rehabilitasi dan Rekonstruksi (BRR) NAD-Nias sebagai penyandang anggaran bangunan dan Kementerian
                Energi dan Sumber Daya Mineral (ESDM) sebagai penyandang anggaran perencanaan, studi Isi, penyediaan koleksi museum dan pedoman pengelolaan museum. Sedangkan Posisi Pemerintah Aceh sebagai penyedia lahan dan pengelola museum, Pemerintah
                Kota Banda Aceh beserta Ikatan Arsitek Indonesia cabang Aceh membantu penyediaan sarana dan prasarana lingkungan museum dan membantu penyelenggaraan sayembara pra rencana pembangunan museum.</p>
            <p>Museum Tsunami Aceh dibangun sebagai media untuk mengenang kembali musibah gempa bumi dan tsunami yang terjadi di Aceh pada 26 Desember 2004 yang mengakibatkan kurang lebih 127.720 orang meninggal, 93.285 orang dinyatakan hilang, dan 635.384
                orang kehilangan tempat tinggal. Museum ini dibangun di atas lahan seluas ??10.000 m2 yang terletak di Jalan Sultan Iskandar Muda No.3 Blang Padang Banda Aceh - Indonesia 23243, persisnya di bekas kantor Dinas Peternakan Aceh sebelah pemakaman
                kuburan Belanda (Kerkhoff) dan menghabiskan dana ?? 66.445.421.000 dalam proses pembangunannya. Museum ini diinisiasi atas prakarsa Badan Rehabilitasi dan Rekonstruksi (BRR) NAD-Nias sebagai penyandang anggaran bangunan dan Kementerian
                Energi dan Sumber Daya Mineral (ESDM) sebagai penyandang anggaran perencanaan, studi Isi, penyediaan koleksi museum dan pedoman pengelolaan museum. Sedangkan Posisi Pemerintah Aceh sebagai penyedia lahan dan pengelola museum, Pemerintah
                Kota Banda Aceh beserta Ikatan Arsitek Indonesia cabang Aceh membantu penyediaan sarana dan prasarana lingkungan museum dan membantu penyelenggaraan sayembara pra rencana pembangunan museum.</p>
            <p>Museum Tsunami Aceh dibangun sebagai media untuk mengenang kembali musibah gempa bumi dan tsunami yang terjadi di Aceh pada 26 Desember 2004 yang mengakibatkan kurang lebih 127.720 orang meninggal, 93.285 orang dinyatakan hilang, dan 635.384
                orang kehilangan tempat tinggal. Museum ini dibangun di atas lahan seluas ??10.000 m2 yang terletak di Jalan Sultan Iskandar Muda No.3 Blang Padang Banda Aceh - Indonesia 23243, persisnya di bekas kantor Dinas Peternakan Aceh sebelah pemakaman
                kuburan Belanda (Kerkhoff) dan menghabiskan dana ?? 66.445.421.000 dalam proses pembangunannya. Museum ini diinisiasi atas prakarsa Badan Rehabilitasi dan Rekonstruksi (BRR) NAD-Nias sebagai penyandang anggaran bangunan dan Kementerian
                Energi dan Sumber Daya Mineral (ESDM) sebagai penyandang anggaran perencanaan, studi Isi, penyediaan koleksi museum dan pedoman pengelolaan museum. Sedangkan Posisi Pemerintah Aceh sebagai penyedia lahan dan pengelola museum, Pemerintah
                Kota Banda Aceh beserta Ikatan Arsitek Indonesia cabang Aceh membantu penyediaan sarana dan prasarana lingkungan museum dan membantu penyelenggaraan sayembara pra rencana pembangunan museum.</p>
        </div>

    </div>

    <!-- END AREA KONTEN -->
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
