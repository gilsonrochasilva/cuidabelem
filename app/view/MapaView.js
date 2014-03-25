/*
 * File: app/view/HomeView.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CuidaBelem.view.MapaView', {
    extend: 'Ext.Container',
    xtype: 'mapaView',
    id: 'mapaView',

    marcador : null,

    config: {

        layout: {
            pack: 'start',
            type: 'vbox',
            align: 'center'
        },

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Cuida Belém',
                items: [
                    {
                        id: 'btVoltarMapa',
                        xtype: 'button',
                        ui: 'back',
                        text: 'Voltar'
                    }
                ]
            },
            {
                xtype : 'container',
                width : '97%',
                margin : 5,

                layout : {
                    align: 'center',
                    type: 'hbox'
                },

                items : [
                    {
                        xtype : 'searchfield',
                        width : '75%',
                        placeHolder: 'Ex: José Malcher, Belém'
                    },
                    {
                        xtype: 'spacer',
                        width: '5%'
                    },
                    {
                        xtype : 'button',
                        text: 'Buscar'
                    }
                ]
            },
            {
                html : '<div class="x-form-fieldset-instructions">Toque no mapa para marcar o local.</div>',
                margin: '0 0 5px 0'
            },
            {
                xtype: 'map',
                height: '100%',
                width: '100%'
            },
            {
                xtype : 'button',
                text: 'Salvar',
                ui : 'confirm',
                docked: 'bottom'
            }
        ]
    },

    alterarCoordenadas : function(latitude, longitude) {
        alert(latitude + ' ' + longitude);
        var mapObj = this.down('map');
        var gMap = mapObj.getMap();
        var latLng = new google.maps.LatLng(latitude, longitude);

        if(marcador != null) {
            marcador.setMap(null);
        }

        marcador = new google.maps.Marker({
            position: latLng,
            animation: google.maps.Animation.DROP,
            map: gMap
        });

        gMap.setMapCenter(latLngCoordinates);
    }
});