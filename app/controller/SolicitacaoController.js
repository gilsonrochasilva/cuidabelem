Ext.define('CuidaBelem.controller.SolicitacaoController', {
    extend : 'Ext.app.Controller',
    
    config: {
        refs: {
            mainView : "#mainView",
            btVoltarSolicitacao : "#btVoltarSolicitacao",
            btSalvarSolicitacao: "#btSalvarSolicitacao",
            solicitacaoView: "#solicitacaoView",
            btMapaSolicitacao : '#btMapaSolicitacao',
            mapaView : '#mapaView',
            btFotoGaleria : '#btFotoGaleria'

        },
        control: {
            btVoltarSolicitacao : {
                tap : 'voltarParaHome'
            },

            btSalvarSolicitacao: {
                tap: 'salvarSolicitacao'
            },

            btMapaSolicitacao : {
                tap : 'abrirMapa'
            },

            btFotoGaleria : {
                tap : 'abrirGaleria'
            }
        }
    },

    voltarParaHome : function () {
        this.getMainView().voltar(2);
    },

    salvarSolicitacao: function(){
        var interessadoLocalStore = Ext.getStore('InteressadoLocalStore');
        interessadoLocalStore.addListener('load', this.handlerInteressado, this, {
            single: true,
            delay: 100
        });
        interessadoLocalStore.load();
    },
    handlerInteressado : function(_this, records, successful, operation, eOpts ){
        var salvarSolicitacaoStore = Ext.getStore('SalvarSolicitacaoStore');
        var proxy = salvarSolicitacaoStore.getProxy();
        var formSolicitacao = Ext.ComponentQuery.query("#idSolicitacaoFieldset")[0];
        var formSolicitacaoInstrucao = Ext.ComponentQuery.query("#formSolicitacaoInstrucao")[0];

        salvarSolicitacaoStore.solicitar(records[0].data.idInteressado,
            formSolicitacao.down("#cdTipoProcesso").getValue(),
            formSolicitacaoInstrucao.down("#instrucao").getValue(),
            formSolicitacao.down("#latitude").getValue(),
            formSolicitacao.down("#longitude").getValue(),
            formSolicitacao.down("#endereco").getValue(),
            formSolicitacao.down("#foto").getValue());

        Ext.Viewport.mask({ xtype: 'loadmask', message: "Carregando..." });

    },

    abrirMapa : function() {
        var _this = this;
        var onSuccess = function(position) {
            // Latitude: position.coords.latitude
            // Longitude: position.coords.longitude
            // Altitude: position.coords.altitude
            // Accuracy: position.coords.accuracy
            // Altitude Accuracy: position.coords.altitudeAccuracy
            // Heading: position.coords.heading
            // Speed: position.coords.speed
            // Timestamp: position.timestamp

            _this.getMapaView().alterarCoordenadas(position.coords.latitude, position.coords.longitude);
            _this.getMainView().avancar(3);
        };
        var onError = function onError(error) {
            Ext.Msg.alert('Alerta', 'Não foi possível recuperar sua localização. ' + error.message, Ext.emptyFn);
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);

        // lat: -1.4528032
        // lng: -48.4863029
        //_this.getMapaView().alterarCoordenadas(-1.4528032, -48.4863029);
        //_this.getMainView().avancar(3);

    },

    tirarFoto : function (){
        var _this = this;


        /*function onSuccess(imageData){
            _this.getSolicitacaoView().setFoto(imageData);
            Ext.Msg.alert('Alerta', 'passando', Ext.emptyFn);
        };

        function onFail(message){
            Ext.Msg.alert('Alerta', message, Ext.emptyFn);
        };

        var options = {
            quality: 50,
            sourceType : navigator.camera.PictureSourceType.CAMERA,
            destinationType : navigator.camera.DestinationType.DATA_URL,
            encodingType: navigator.camera.EncodingType.JPEG,
            saveToPhotoAlbum: true
        }

        navigator.camera.getPicture(onSuccess, onFail, options);
        Ext.Msg.alert('Alerta', 'passou do metodo', Ext.emptyFn);*/


    },

    abrirGaleria: function() {
        var captureSuccess = function(mediaFiles) {
            var i, path, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                path = mediaFiles[i].fullPath;
                //console.log(path);
            }
        };

        // capture error callback
        var captureError = function(error) {
            console.log('erro');
            navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        };

        try {
            // start image capture
            navigator.device.capture.captureImage(captureSuccess, captureError, { limit : 1 });
        } catch(e) {
            alert(e.message)
        }
    }
});