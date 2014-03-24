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
        var interessadoLocalStore = Ext.getStore('InteressadoLocalStore');
        interessadoLocalStore.removeAll(true);
        interessadoLocalStore.add({idInteressado : interessado.idInteressado, nrCpfCnpj : interessado.nrCpfCnpj, nmInteressado : interessado.nmInteressado, dsEmail : interessado.dsEmail, dsEndereco : interessado.dsEndereco});
        interessadoLocalStore.sync();

        Ext.Msg.alert('Mensagem', 'Salvo com sucesso.', Ext.emptyFn);
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
        this.getMeusDadosView().setInteressado(records[0].data);
    }
});