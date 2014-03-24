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
    }

});