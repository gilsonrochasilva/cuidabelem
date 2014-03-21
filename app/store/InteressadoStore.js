/**
 * Created by GilsonRocha on 18/03/14.
 */
Ext.define('CuidaBelem.store.InteressadoStore', {
    extend : 'Ext.data.Store',

    mainUrl : 'http://localhost:8080/gdocprocessos/ws',

    requires : [
        'CuidaBelem.model.TblInteressados'
    ],

    config : {
        storeId : 'InteressadoStore',
        model : 'CuidaBelem.model.TblInteressados'
    },

    buscar : function(nrCpfCnpj) {
        var proxy = this.getProxy();
        proxy.url = this.mainUrl + '/interessado/buscar';
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