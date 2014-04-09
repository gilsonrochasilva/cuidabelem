Ext.define('CuidaBelem.controller.MeusDadosController', {
    extend : 'Ext.app.Controller',
    
    config: {
        refs: {
            mainView : '#mainView',
            meusDadosView : '#meusDadosView',
            btVoltarMeusDados : '#btVoltarMeusDados',
            btSalvarMeusDados : '#btSalvarMeusDados',
            formMeusDados : '#formMeusDados',
            cpfMeusDados : '#cpfMeusDados'
        },
        control: {
            btVoltarMeusDados : {
                tap : 'voltarParaHome'
            },

            btSalvarMeusDados : {
                tap : 'salvar'
            },

            cpfMeusDados : {
                blur : 'carregarPorCpf'
            }
        }
    },

    salvar : function() {
        var _this = this;
        var interessado = this.getMeusDadosView().getInteressado();

        var interessadoStore = Ext.getStore('InteressadoStore');
        interessadoStore.addListener('load', this.handlerSalvar, this, {
            single: true,
            delay: 100
        });

        interessadoStore.salvar(interessado);
    },

    handlerSalvar : function (_this, records, successful, operation, eOpts ) {
        if(successful) {
            this.getMeusDadosView().setInteressado(records[0].data);
            var interessado = this.getMeusDadosView().getInteressado();

            var interessadoLocalStore = Ext.getStore('InteressadoLocalStore');
            interessadoLocalStore.removeAll(true);
            interessadoLocalStore.add({idInteressado : interessado.idInteressado, nrCpfCnpj : interessado.nrCpfCnpj, nmInteressado : interessado.nmInteressado, dsEmail : interessado.dsEmail, dsEndereco : interessado.dsEndereco});
            interessadoLocalStore.sync();

            Ext.Viewport.unmask();

            Ext.Msg.alert('Mensagem', 'Salvo com sucesso.', Ext.emptyFn);
            
            this.refreshListaMinhasSolicitacos(interessado.idInteressado);
        } else {
            Ext.Viewport.unmask();
            Ext.Msg.alert('Alerta', 'Erro ao tentar salvar. Por favor, verifique sua conexão com a internet.', Ext.emptyFn);
        }
    },

    voltarParaHome : function () {
        this.getMainView().voltar(1);
    },

    carregarPorCpf : function() {
        var cpf = this.getCpfMeusDados().getValue();
        var interessadoStore = Ext.getStore('InteressadoStore');
        interessadoStore.addListener('load', this.handlerBucarPorCpf, this, {
            single: true,
            delay: 100
        });

        interessadoStore.buscar(cpf);
    },

    handlerBucarPorCpf : function (_this, records, successful, operation, eOpts ) {
        if(records[0].data.idInteressado == null) {
            records[0].data.idInteressado = 0;
            records[0].data.nrCpfCnpj = this.getCpfMeusDados().getValue();
        }

        this.getMeusDadosView().setInteressado(records[0].data);
    },

    refreshListaMinhasSolicitacos: function (idInteressado){
        this.getApplication().getController('HomeController').carregarMinhasSolicitacoes();
        this.getApplication().getController('UltimasSolicitacoesController').carregar();
    }
});