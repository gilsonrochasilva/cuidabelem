/**
 * Created by fernandosantos on 21/03/14.
 */
Ext.define('CuidaBelem.store.ServicosStore',{
    extend: 'Ext.data.Store',
    requires:[
        'CuidaBelem.model.Servico'
    ],
    config:{
        storeId: 'ServicosStore',
        model: 'CuidaBelem.model.Servico'
    }

});
