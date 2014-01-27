Ext.define('CuidaBelem.controller.SolicitacaoController', {
    extend : 'Ext.app.Controller',
    
    config: {
        refs: {
            mainView : "#mainView",
            btVoltarSolicitacao : "#btVoltarSolicitacao"
        },
        control: {
            btVoltarSolicitacao : {
                tap : 'voltarParaHome'
            }
        }
    },

    voltarParaHome : function () {
        this.getMainView().voltar(2);
    }
});