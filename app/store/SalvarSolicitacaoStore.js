/**
 * Created by fernandosantos on 24/03/14.
 */
Ext.define('CuidaBelem.store.SalvarSolicitacaoStore',{
    extend: 'Ext.data.Store',
    requires:[
        'CuidaBelem.model.TblProcessos'
    ],
    config:{
        storeId: 'SalvarSolicitacaoStore',
        model: 'CuidaBelem.model.TblProcessos'
    },

    solicitar : function(idinteressado, idtipoprocesso, instrucao, latitude, longitude, endereco) {
        this.setProxy({
            type                : 'ajax',
            //url                 : 'http://10.1.3.49:8080/gttrans/ws/multa/consulta',
            url                 : 'http://localhost:8080/gdocprocessos/ws/processos/abrirprocesso',
            //url                 : 'http://www.belem.pa.gov.br/gttrans/ws/multa/consulta',

            actionMethods: 'POST',
            reader : {
                reader	: 'json',
                root	: ''
            }
        });

        var proxy = this.getProxy();
        proxy.setExtraParam('idinteressado', records[0].data.idInteressado);
        proxy.setExtraParam('idtipoprocesso', formSolicitacao.down("#cdTipoProcesso").getValue());
        proxy.setExtraParam('instrucao', formSolicitacaoInstrucao.down("#instrucao").getValue());
        proxy.setExtraParam('latitude', formSolicitacao.down("#latitude").getValue());
        proxy.setExtraParam('longitude', formSolicitacao.down("#longitude").getValue());
        proxy.setExtraParam('endereco', formSolicitacao.down("#endereco").getValue());

        Ext.Viewport.mask({ xtype: 'loadmask', message: "Carregando..." });

        this.load(function(records, operation, success) {
            Ext.Viewport.unmask();
            if(!success) {
                Ext.Msg.alert('Alerta', 'Erro ao tentar fazer a consulta. Por favor, verifique sua conexão com a internet.', Ext.emptyFn);
            }else{
                Ext.Msg.alert('Sucesso', 'Solicitação salva com sucesso!', Ext.emptyFn);
            }
        }, this);
    }
});