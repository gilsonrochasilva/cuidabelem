Ext.define('CuidaBelem.controller.MapaController', {
    extend : 'Ext.app.Controller',
    
    config: {
        refs: {
            mainView : "#mainView",
            btVoltarMapa : "#btVoltarMapa"
        },
        control: {
            btVoltarMapa : {
                tap : 'voltarParaSolicitacao'
            }
        }
    },

    voltarParaSolicitacao : function () {
        this.getMainView().voltar(3);
    }
});