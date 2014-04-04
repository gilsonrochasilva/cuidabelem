/**
 * Created by fernandosantos on 24/03/14.
 */
Ext.define('CuidaBelem.store.UltimasSolicitacoesStore',{
    extend: 'Ext.data.Store',
    requires:[
        'CuidaBelem.model.TblProcessos'
    ],
    config:{
        storeId: 'UltimasSolicitacoesStore',
        model: 'CuidaBelem.model.TblProcessos'
    },

    listar : function(idinteressado) {

        this.setProxy({
            type : 'ajax',
            url  : window.rootUrl +'/ws/processos/ultimasSolicitacoes',

            reader : {
                reader : 'json',
                root   : ''
            }
        });

        var proxy = this.getProxy();
        proxy.setExtraParam('idinteressado', idinteressado);

        this.load(function(records, operation, success) {
            if(!success) {
                Ext.Msg.alert('Alerta', 'Erro ao tentar fazer a consulta. Por favor, verifique sua conexão com a internet.', Ext.emptyFn);
            }
        }, this);
    }
});