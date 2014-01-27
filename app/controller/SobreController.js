Ext.define('CuidaBelem.controller.SobreController', {
    extend : 'Ext.app.Controller',
    
    config: {
        refs: {
            mainView : "#mainView",
            btVoltarSobre : "#btVoltarSobre"
        },
        control: {
            btVoltarSobre : {
                tap : 'voltarParaHome'
            }
        }
    },

    voltarParaHome : function () {
        this.getMainView().voltar(4);
    }
});