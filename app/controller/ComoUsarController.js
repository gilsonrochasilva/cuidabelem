Ext.define('CuidaBelem.controller.ComoUsarController', {
    extend : 'Ext.app.Controller',
    
    config: {
        refs: {
            mainView : "#mainView",
            btVoltarComoUsar : "#btVoltarComoUsar"
        },
        control: {
            btVoltarComoUsar : {
                tap : 'voltarParaHome'
            }
        }
    },

    voltarParaHome : function () {
        this.getMainView().voltar(3);
    }
});