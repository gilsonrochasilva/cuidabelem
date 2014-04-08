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
            btFotoGaleria : '#btFotoGaleria',
            btTirarFoto : '#btTirarFoto'

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
            },

            btTirarFoto : {
                tap : 'tirarFoto'
            }
        }
    },

    voltarParaHome : function () {
        this.getMainView().voltar(2);
    },

    salvarSolicitacao: function() {

        var interessadoLocalStore = Ext.getStore('InteressadoLocalStore');
        interessadoLocalStore.addListener('load', this.handlerInteressado, this, {
            single: true,
            delay: 100
        });
        interessadoLocalStore.load();
    },

    handlerInteressado : function(_this, records, successful, operation, eOpts ) {
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
            formSolicitacaoInstrucao.down("#foto").getValue());

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

    tirarFoto : function () {
        var _this = this;

        var captureSuccess = function(mediaFiles) {
            Ext.Viewport.mask({ xtype: 'loadmask', message: "Carregando..." });

            var i, mediaFile, len;

            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                mediaFile = mediaFiles[i];
            }

            var onResolveSuccess = function(fileEntry) {
                fileEntry.file(function(file) {
                    var reader = new FileReader();
                    reader.onloadend = function (evt) {
                        //alert(evt.target.result);
                        _this.getSolicitacaoView().setFoto(evt.target.result);
                        Ext.Viewport.unmask();
                    };

                    reader.readAsDataURL(file);
                }, function (error) {
                    Ext.Viewport.unmask();
                    alert("File Entry Error: " + error.code);
                });
            }

            var onFail = function (error) {
                Ext.Viewport.unmask();
                alert("Resolve Error: " + error.code);
            }

            var path = mediaFile.fullPath;
            var indexOfPathSeparator = path.indexOf("/");
            var newPath = path.substring(indexOfPathSeparator, path.length);
            newPath = "file://" + newPath;

            window.resolveLocalFileSystemURI(newPath, onResolveSuccess, onFail);
        };

         // capture error callback
        var captureError = function(error) {
            navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        };

        try {
            // start image capture
            navigator.device.capture.captureImage(captureSuccess, captureError, { limit : 1 });
        } catch(e) {
            alert(e.message)
        }


    },

    abrirGaleria: function() {
        var _this = this;
        //_this.getSolicitacaoView().actions.hide();

        var onSuccess = function(imageData) {
            alert(imageData);

            Ext.Viewport.mask({ xtype: 'loadmask', message: "Carregando..." });

            var onResolveSuccess = function(fileEntry) {
                fileEntry.file(function(file) {
                    var reader = new FileReader();
                    reader.onloadend = function (evt) {
                        //alert(evt.target.result);
                        _this.getSolicitacaoView().setFoto(evt.target.result);
                        Ext.Viewport.unmask();
                    };

                    reader.readAsDataURL(file);
                }, function (error) {
                    Ext.Viewport.unmask();
                    alert("File Entry Error: " + error.code);
                });
            }

            var onFail = function (error) {
                Ext.Viewport.unmask();
                alert("Resolve Error: " + error.code);
            }

            var path = imageData;
            var indexOfPathSeparator = path.indexOf("/");
            var newPath = path.substring(indexOfPathSeparator, path.length);
            newPath = "file://" + newPath;

            window.resolveLocalFileSystemURI(newPath, onResolveSuccess, onFail);
        };

        var onFail = function(message) {
            Ext.Msg.alert('Alerta', message, Ext.emptyFn);
        };

        var options = {
            quality: 50,
            sourceType : navigator.camera.PictureSourceType.CAMERA,
            destinationType : navigator.camera.DestinationType.FILE_URI,
            encodingType: navigator.camera.EncodingType.JPEG,
            saveToPhotoAlbum: true
        }

        navigator.camera.getPicture(onSuccess, onFail, options);
    }
});