Ext.define('CuidaBelem.controller.MapaController', {
    extend : 'Ext.app.Controller',
    
    config: {
        refs: {
            mainView : "#mainView",
            btVoltarMapa : "#btVoltarMapa",
            btBuscarMapa : "#btBuscarMapa",
            mapaView : '#mapaView'
        },
        control: {
            btVoltarMapa : {
                tap : 'voltarParaSolicitacao'
            },

            btBuscarMapa : {
                tap : 'buscar'
            }
        }
    },

    launch : function() {
        var mapObj = this.getMapaView().down('map');
        var gMap = mapObj.getMap();
        var _this = this;

        google.maps.event.addListener(gMap, 'click', function(event) {
            var marker = _this.getMapaView().getMarcador();
            marker.setPosition(event.latLng);
            _this.getMainView().desabilitarBotao(false);
        });

        var markers = [];

        // Create the search box and link it to the UI element.
        var input = /** @type {HTMLInputElement} */(
            document.getElementById('tfBuscaMapa'));
        gMap.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        var searchBox = new google.maps.places.SearchBox(
            /** @type {HTMLInputElement} */(input));

        // [START region_getplaces]
        // Listen for the event fired when the user selects an item from the
        // pick list. Retrieve the matching places for that item.
        google.maps.event.addListener(searchBox, 'places_changed', function() {
            var places = searchBox.getPlaces();

            for (var i = 0, marker; marker = markers[i]; i++) {
                marker.setMap(null);
            }

            // For each place, get the icon, place name, and location.
            markers = [];
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0, place; place = places[i]; i++) {
                var image = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };

                // Create a marker for each place.
                var marker = new google.maps.Marker({
                    map: gMap,
                    icon: image,
                    title: place.name,
                    position: place.geometry.location
                });

                markers.push(marker);

                bounds.extend(place.geometry.location);
            }

            gMap.fitBounds(bounds);
        });

        // Bias the SearchBox results towards places that are within the bounds of the
        // current map's viewport.
        google.maps.event.addListener(gMap, 'bounds_changed', function() {
            var bounds = gMap.getBounds();
            searchBox.setBounds(bounds);
        });
    },

    voltarParaSolicitacao : function () {
        this.getMainView().voltar(3);
    },

    buscar : function() {
        this.getMapaView().alterarCoordenadas(-1.4528032, -48.4863029);
    }
});