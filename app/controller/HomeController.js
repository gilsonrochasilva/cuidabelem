Ext.define('CuidaBelem.controller.HomeController', {
    extend : 'Ext.app.Controller',
    
    config: {
        refs: {
            mainView : "#mainView",
            btMeusDados : "#btMeusDados",
            btComoUsar : "#btComoUsar",
            btSobre : "#btSobre",
            listSolicitacoes: '#listSolicitacoes',
            meusDadosView: '#meusDadosView'
        },
        control: {
            btMeusDados : {
                tap : 'abrirMeusDados'
            },

            btComoUsar : {
                tap : 'abrirComoUsar'
            },

            btSobre : {
                tap : 'abrirSobre'
            },

            listSolicitacoes : {
                select : 'novaSolicitacao'
            }
        }
    },
    
    launch: function() {
        var servicosStore = Ext.getStore('ServicosStore');
        servicosStore.load();
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
        var _this = this;

        var interessadoLocalStore = Ext.getStore('InteressadoLocalStore');
        interessadoLocalStore.load({
            callback: function(records, operation, success) {
                if(records.length != 0) {
                    _this.getMeusDadosView().setInteressado(records[0].data);
                } else {
                    _this.getMeusDadosView().setInteressado(null);
                }
            },
            scope: this
        });

        Ext.Viewport.hideMenu('left');
        this.getMainView().avancar(1);
    },

    abrirComoUsar : function () {
        Ext.Viewport.hideMenu('left');
        this.getMainView().avancar(3);
    },

    abrirSobre : function () {
        Ext.Viewport.hideMenu('left');
        this.getMainView().avancar(4);
    },

    novaSolicitacao: function(view, record) {
        Ext.Viewport.hideMenu('left');
        this.getMainView().avancar(2);
    }
});