Ext.define('CuidaBelem.controller.MeusDadosController', {
    extend : 'Ext.app.Controller',
    
    config: {
        refs: {
            mainView : "#mainView",
            btVoltarMeusDados : "#btVoltarMeusDados"
        },
        control: {
            btVoltarMeusDados : {
                tap : 'voltarParaHome'
            }
        }
    },

    voltarParaHome : function () {
        this.getMainView().voltar(1);
    }
});