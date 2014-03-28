/**
 * Created by fernandosantos on 25/03/14.
 */
Ext.define('CuidaBelem.store.MinhasSolicitacoesStore',{
    extend: 'Ext.data.Store',
    requires:[
        'CuidaBelem.model.ProcessoServicoLista'
    ],
    config:{
        storeId: 'MinhasSolicitacoesStore',
        model: 'CuidaBelem.model.ProcessoServicoLista'
    }

});