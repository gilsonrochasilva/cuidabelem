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
        model : 'CuidaBelem.model.TblProcessos',
        mainUrl : 'http://localhost:8080/gdocprocessos/ws'
    },

    buscar : function(idProcesso) {
        this.setProxy({
            type                : 'ajax',
            //url                 : 'http://10.1.3.49:8080/gttrans/ws/multa/consulta',
            //url                 : 'http://localhost:8080/gdocprocessos/ws/interessado/buscar',
            url                 : this.getMainUrl() + '/processos/acompanhar',
            //url                 : 'http://www.belem.pa.gov.br/gttrans/ws/multa/consulta',

            reader : {
                reader	: 'json',
                root	: ''
            }
        });
        var proxy = this.getProxy();
        //proxy.url = this.getMainUrl() + '/interessado/buscar';
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
