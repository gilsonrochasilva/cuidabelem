/**
 * Created by fernandosantos on 26/03/14.
 */
Ext.define('CuidaBelem.store.AcompanhaProcessoStore', {
    extend : 'Ext.data.Store',

    requires : [
        'CuidaBelem.model.TblProcessos'
    ],

    config : {
        storeId : 'AcompanhaProcessoStore',
        model : 'CuidaBelem.model.TblProcessos'

    },

    buscarProcesso : function(idProcesso) {
        this.setProxy({
            type                : 'ajax',
            url                 : window.rootUrl + '/ws/processos/acompanhar',

            reader : {
                reader	: 'json',
                root	: ''
            }
        });
        var proxy = this.getProxy();
        proxy.setExtraParam('idprocesso', idProcesso);

        Ext.Viewport.mask({ xtype: 'loadmask', message: "Carregando..." });

        this.load(function(records, operation, success) {
            Ext.Viewport.unmask();
            if(!success) {
                Ext.Msg.alert('Alerta', 'Erro ao tentar fazer a consulta. Por favor, verifique sua conexão com a internet.', Ext.emptyFn);
            }
        }, this);
    }
});
