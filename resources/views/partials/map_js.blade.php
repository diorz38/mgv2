            @section('map_js')
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