/**
 * Created by GilsonRocha on 18/03/14.
 */
Ext.define('CuidaBelem.store.InteressadoStore', {
    extend : 'Ext.data.Store',

    requires : [
        'CuidaBelem.model.TblInteressados'
    ],

    config : {
        storeId : 'InteressadoStore',
        model : 'CuidaBelem.model.TblInteressados'
    },

    buscar : function(nrCpfCnpj) {
        this.setProxy({
            type                : 'ajax',
            url                 : window.rootUrl +'/ws/interessado/buscar',

            reader : {
                reader	: 'json',
                root	: ''
            }
        });
        var proxy = this.getProxy();
        proxy.setExtraParam('nrCpfCnpj', nrCpfCnpj);

        Ext.Viewport.mask({ xtype: 'loadmask', message: "Carregando..." });

        this.load(function(records, operation, success) {
            Ext.Viewport.unmask();
            if(!success) {
                Ext.Msg.alert('Alerta', 'Erro ao tentar fazer a consulta. Por favor, verifique sua conexão com a internet.', Ext.emptyFn);
            }
        }, this);
    }
});