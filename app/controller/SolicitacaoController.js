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
            btTirarFoto: '#btTirarFoto'

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

            btTirarFoto: {
                tap: 'tirarFoto'
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
        /*var onSuccess = function(position) {
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
        // lat: -1.4528032
        // lng: -48.4863029
        navigator.geolocation.getCurrentPosition(onSuccess, onError);*/

        _this.getMapaView().alterarCoordenadas(-1.4528032, -48.4863029);
        _this.getMainView().avancar(3);

    },

    tirarFoto : function (){

        navigator.camera.getPicture(function(imageData){
                this.getSolicitacaoView().setFoto(imageData);

            //do something with the foto
        },
        this.onFail,
        {
            quality: 50, allowEdit: true,
            destinationType: destinationType.DATA_URL
        });
    },
    onFail: function onFail(message) {
        Ext.Msg.alert('Alerta', message, Ext.emptyFn);
    }


});