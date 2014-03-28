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

    voltarParaSolicitacao : function () {
        this.getMainView().voltar(3);
    },

    buscar : function() {
        this.getMapaView().alterarCoordenadas(-1.4528032, -48.4863029);
    }
});