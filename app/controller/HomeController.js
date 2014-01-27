Ext.define('CuidaBelem.controller.HomeController', {
    extend : 'Ext.app.Controller',
    
    config: {
        refs: {
            mainView : "#mainView",
            btMeusDados : "#btMeusDados",
            listSolicitacoes: '#listSolicitacoes'
        },
        control: {
            btMeusDados : {
                tap : 'abrirMeusDados'
            },

            listSolicitacoes : {
                select : 'novaSolicitacao'
            }
        }
    },
    
    launch: function() {
        /*var me = this;

        document.addEventListener("backbutton",
            function () {
                var selecionado = me.getMainView().indexOf(me.getMainView().getActiveItem());*/
                /**
                 * 0 - Home
                 * 1 - Pesquisa
                 * 2 - Resultado Completo
                 * 3 - Resultado Simples
                 * 4 - Detalhe da Autuação
                 * 5 - Envio de e-mail
                 */
                /*if(selecionado == 1) {
                    me.getMainView().voltar();
                } else if(selecionado == 2) {
                    me.getMainView().voltar();
                } else if(selecionado == 3) {
                    me.getMainView().voltar(2);
                } else if(selecionado == 4) {
                    me.getMainView().voltar();
                } else if(selecionado == 5) {
                    me.getMainView().voltar();
                }
            }
        , false);
        */
    },

    abrirMeusDados : function () {
        Ext.Viewport.hideMenu('left');
        this.getMainView().avancar(1);
    },

    novaSolicitacao: function(view, record) {
        Ext.Viewport.hideMenu('left');
        this.getMainView().avancar(2);
    }
});