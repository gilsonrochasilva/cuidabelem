Ext.define('CuidaBelem.controller.SolicitacaoController', {
    extend : 'Ext.app.Controller',
    
    config: {
        refs: {
            mainView : "#mainView",
            btVoltarSolicitacao : "#btVoltarSolicitacao",
            btSalvarSolicitacao: "#btSalvarSolicitacao",
            solicitacaoView: "#solicitacaoView",
            btMapaSolicitacao : '#btMapaSolicitacao'

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
        proxy.setExtraParam('idinteressado', records[0].data.idInteressado);
        proxy.setExtraParam('idtipoprocesso', formSolicitacao.down("#cdTipoProcesso").getValue());
        proxy.setExtraParam('instrucao', formSolicitacaoInstrucao.down("#instrucao").getValue());
        proxy.setExtraParam('latitude', formSolicitacao.down("#latitude").getValue());
        proxy.setExtraParam('longitude', formSolicitacao.down("#longitude").getValue());
        proxy.setExtraParam('endereco', formSolicitacao.down("#endereco").getValue());

        Ext.Viewport.mask({ xtype: 'loadmask', message: "Carregando..." });

        salvarSolicitacaoStore.load(function(records, operation, success) {
            Ext.Viewport.unmask();
            if(!success) {
                Ext.Msg.alert('Alerta', 'Erro ao tentar fazer a consulta. Por favor, verifique sua conexão com a internet.', Ext.emptyFn);
            }else{
                Ext.Msg.alert('Sucesso', 'Solicitação salva com sucesso!', Ext.emptyFn);
            }
        }, this);
    },

    abrirMapa : function() {
        //this.getMainView().avancar(3);

        Ext.device.Geolocation.getCurrentPosition({
            success: function(position) {
                Ext.Msg.alert('Sucesso', position.coords.latitude + ' ' + position.coords.longitude, Ext.emptyFn());
            },
            failure: function() {
                Ext.Msg.alert('Erro', 'Para usar esta função o GPS precisa estar ligado.', Ext.emptyFn());
            },
            scope: this,
            allowHighAccuracy: true
        });
    }

});