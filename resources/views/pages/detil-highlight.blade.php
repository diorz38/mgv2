@extends('layout.main')

@section('main_css')
    @parent
@endsection

@section('content')

<!-- AREA KONTEN -->      
<!-- Highlight -->
<div class="content-area blog-page padding-top-40" style="background-color: #f5f5fa; padding-bottom: 55px;">
            
            <div class="container">
                <div class="row">
                    <div class="blog-lst col-md-12 pl0">
                        <section id="id-100" class="post single">

                            <div class="post-header single">
                                
                                
                              
                                <div class="img-float3"> 
                                    <img src="images/kegiatan/1.jpg" alt="">
                                    <div class=""></div>

                                </div>
                            </div> 

                            <div id="post-content" class="text-float2">
                                
                                 <h2 class="wow fadeInLeft animated orange">Let???s Celebrate 25th Museum Day</h2>
                                    
                                       <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada
                                        tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.
                                    </p>
                                

                               

                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                                    ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                    <li>Aliquam tincidunt mauris eu risus.</li>
                                </ul>
                               </p>
                                <p>
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                                    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros
                                    eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
                                </p>
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

    
    <!--======= END Highlight =========-->
            
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
