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
        model : 'CuidaBelem.model.TblInteressados',
        mainUrl : 'http://localhost:8080/gdocprocessos/ws'
    },

    buscar : function(nrCpfCnpj) {
        this.setProxy({
            type                : 'ajax',
            //url                 : 'http://10.1.3.49:8080/gttrans/ws/multa/consulta',
            //url                 : 'http://localhost:8080/gdocprocessos/ws/interessado/buscar',
            url                 : this.getMainUrl() + '/interessado/buscar',
            //url                 : 'http://www.belem.pa.gov.br/gttrans/ws/multa/consulta',

            reader : {
                reader	: 'json',
                root	: ''
            }
        });
        var proxy = this.getProxy();
        //proxy.url = this.getMainUrl() + '/interessado/buscar';
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