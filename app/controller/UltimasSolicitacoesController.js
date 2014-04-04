Ext.define('CuidaBelem.controller.UltimasSolicitacoesController', {
    extend : 'Ext.app.Controller',
    
    config: {
        refs: {
            mainView : "#mainView",
            homeView: "#homeView"
        },
        control: {

        }
    },

    launch : function() {
        this.carregar();
    },

    carregar : function() {
        var interessadoLocalStore = Ext.getStore('InteressadoLocalStore');
        interessadoLocalStore.addListener('load', this.handlerInteressado, this, {
            single: true,
            delay: 100
        });
        interessadoLocalStore.load();
    },

    handlerInteressado : function(_this, records, successful, operation, eOpts ) {
        var ultimasSolicitacoesStore = Ext.getStore('UltimasSolicitacoesStore');
        ultimasSolicitacoesStore.addListener('load', this.handlerAtualizarMapa, this, {
            single: true,
            delay: 100
        });

        ultimasSolicitacoesStore.listar(records[0].data.idInteressado);
    },

    handlerAtualizarMapa : function(_this, records, successful, operation, eOpts ) {
        var mapObj = this.getHomeView().down('map');
        var gMap = mapObj.getMap();
        var _this = this;
        var markers = [];

        var places = records;

        for (var i = 0, marker; marker = markers[i]; i++) {
            marker.setMap(null);
        }

        markers = [];
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0, place; place = places[i]; i++) {

            var latLng = new google.maps.LatLng(place.data.coordenadaLatitude, place.data.coordenadaLongitude);

            // Create a marker for each place.
            var marker = new google.maps.Marker({
                map: gMap,
                //title: place.name,
                position: latLng
            });

            markers.push(marker);
            bounds.extend(latLng);
        }

        //gMap.fitBounds(bounds);
    }
});