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

    solicitar : function(idinteressado, idtipoprocesso, instrucao, latitude, longitude, endereco, foto) {
        this.setProxy({
            type                : 'ajax',
            url                 : window.rootUrl +'/ws/processos/abrirprocesso',

            actionMethods: 'POST',
            reader : {
                reader	: 'json',
                root	: ''
            }
        });

        var proxy = this.getProxy();
        proxy.setExtraParam('idinteressado', idinteressado);
        proxy.setExtraParam('idtipoprocesso', idtipoprocesso);
        proxy.setExtraParam('instrucao', instrucao);
        proxy.setExtraParam('latitude', latitude);
        proxy.setExtraParam('longitude', longitude);
        proxy.setExtraParam('endereco', endereco);
        proxy.setExtraParam('foto', foto);

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