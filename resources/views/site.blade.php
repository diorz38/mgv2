@include('site.head')
@include('site.toolbar')
@include('site.toolbar_mobile')   
   <body>
      <div id="wrap" class="wrap-global">
@include('site.header_banner')
@include('site.breadecrumb')
               <!--CONTENT -->
               <div id="c200490">
                  <section class="collections">
                     <h2>
                        Collections
                     </h2>
                     <h3>
                        View the themed tours
                     </h3>
                     <div class="parcours">
                        <div class="parcours-container">
                           <figure class="" role="group">
                              <a data-template="journey" class="ir" href="/en/list-of-themed-tours/view-a-parcours/parcours-type/Parcours/parcours-action/show/parcours/pavillon-des-sessions/">
                              <img alt="Pavillon des Sessions" src="/fileadmin/_processed_/csm_2383_640x889_3942dea260.jpg" width="290" height="390" />
                              </a>
                              <figcaption>
                                 <p>Pavillon des Sessions</p>
                              </figcaption>
                           </figure>
                           <figure class="" role="group">
                              <a data-template="journey" class="ir" href="/en/list-of-themed-tours/view-a-parcours/parcours-type/Parcours/parcours-action/show/parcours/masques/">
                              <img alt="Masks" src="/fileadmin/_processed_/csm_14973-640x889-2_d49c4036fd.jpg" width="290" height="390" />
                              </a>
                              <figcaption>
                                 <p>Masks</p>
                              </figcaption>
                           </figure>
                           <figure class="last" role="group">
                              <a data-template="journey" class="ir" href="/en/list-of-themed-tours/view-a-parcours/parcours-type/Parcours/parcours-action/show/parcours/parures/">
                              <img alt="Adornment" src="/fileadmin/_processed_/csm_5102-640x889-ok_a192f426ea.jpg" width="290" height="390" />
                              </a>
                              <figcaption>
                                 <p>Adornment</p>
                              </figcaption>
                           </figure>
                        </div>
                     </div>
                  </section>
               </div>
               <div id="c200490">
                  <section class="collections">
                     <h2>
                        Events
                     </h2>
                     <h3>
                        View the events
                     </h3>
                  </section>
               </div>
               <div id="c198783">
                  <section class="concerts automatic_list_page">
                     <section class="affiche">
                        <div class="items">
                           <article class="push ">
                              <figure role="group">
                                 <img alt="Cinema" src="images/csm_Cinema-MD_450x385_d26145e9f7.jpg" width="450" height="385">
                                 <figcaption>
                                    <div class="ctn">
                                       <h3>Cinema</h3>                                       
                                       <a data-content="Read more" class="bt-green" href="#">
                                       Read more
                                       </a>
                                    </div>
                                 </figcaption>
                              </figure>
                           </article>
                           <article class="push first">
                              <figure role="group">
                                 <img alt="Les Ombres Restaurant" src="images/csm_Vignette_Ombres_450x385_368a40defe.jpg" width="450" height="385">
                                 <figcaption>
                                    <div class="ctn">
                                       <h3>Les Ombres Restaurant</h3>
                                       <a data-content="Read more" class="bt-green" href="#">
                                       Read more
                                       </a>
                                    </div>
                                 </figcaption>
                              </figure>
                           </article>
                           <article class="push ">
                              <figure role="group">
                                 <img alt="Café Branly" src="images/csm_Vignette_Cafe_Branly_horizontal_0369a3f4c8.jpg" width="450" height="385">
                                 <figcaption>
                                    <div class="ctn">
                                       <h3>Café Branly</h3>
                                       <a data-content="Read more" class="bt-green" href="#">
                                       Read more
                                       </a>
                                    </div>
                                 </figcaption>
                              </figure>
                           </article>
                           <article class="push first">
                              <figure role="group">
                                 <img alt="Panoramic Terrace" src="images/csm_Vignette_Terrasse_4ecf4bba44.jpg" width="450" height="385">
                                 <figcaption>
                                    <div class="ctn">
                                       <h3>Panoramic Terrace</h3>
                                       <a data-content="Read more" class="bt-green" href="#">
                                       Read more
                                       </a>
                                    </div>
                                 </figcaption>
                              </figure>
                           </article>
                        </div>
                     </section>
                  </section>
               </div>
               <!--END CONTENT -->
            </div>
@include('site.museum_menu')
@include('site.footer')
      <script type="text/javascript">
        $("input[name='search-filed']").keypress(function(e){
          if(e.which==13){
            $("input[name='search-button']").click();
          }
        })
     </script>
      <script type="text/javascript">
         var SAEL = SAEL || {};
         SAEL.lang = {"wording.":{"bienvenue_dans":"Welcome to","explorer_collection":"explore collections","decouvrez":"Discover","nos_parcours":"our exhibition tours","dateFormat":"mm\/dd\/yy","monthNames":"January,February,March,April,May,June,July,August,September,October,November,December","dayNamesShort":"Sun,Mon,Tue,Wed,Thu,Fri,Sat"}};
      </script>
      <script src="js/detect.js" type="text/javascript"></script>
      <script src="js/cookies.js" type="text/javascript"></script>
      <script src="js/tools.js" type="text/javascript"></script>
      <script type="text/javascript">
         /*TS_inlineFooter*/
               $(document).ready( function(){
                  window.CONF = new APP.Conf({
                     baseUrl : "/",
                     lng : "gb",
                     env : "production",
                     section : "edito",
                     template : "page",
                     wording : {
                        bienvenue_dans : SAEL.lang['wording.']['bienvenue_dans'],
                        explorer_collection : SAEL.lang['wording.']['explorer_collection'],
                        decouvrez : SAEL.lang['wording.']['decouvrez'],
                        nos_parcours : SAEL.lang['wording.']['nos_parcours'],
                        dateFormat : SAEL.lang['wording.']['dateFormat'],
                        monthNames : SAEL.lang['wording.']['monthNames'].split(','),
                        dayNamesShort : SAEL.lang['wording.']['dayNamesShort'].split(','),
                     }
                  });
                  var quaibranly = new APP.Core();
               });
         
         /*]]>*/
      </script>
      <!--END FOOTER-->
      <script type="text/javascript" src="js/jquery.eislideshow.js"></script>
      <script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
      <script type="text/javascript">
         $(function() {
             $('#ei-slider').eislideshow({
            animation         : 'center',
            autoplay       : true,
            slideshow_interval   : 10000,
            titlesFactor      : 0
             });
         });
      </script>
      <script src="js/mobile2017-min.js"></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js'></script>
      <script src="js/musslider.js"></script>
   </body>
</html>
