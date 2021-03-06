/**
 * Created by fernandosantos on 21/03/14.
 */
Ext.define('CuidaBelem.model.Servico', {
    extend: 'Ext.data.Model',
    config:{
        fields: [
            {
                name: 'idServico',
                type: Ext.data.Types.INTEGER
            },
            {
                name: 'nmServico',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dsServico',
                type: Ext.data.Types.STRING
            },
            {
                name: 'cdTipoprocesso',
                type: Ext.data.Types.INTEGER
            },
            {
                name: 'dsImagem',
                type: Ext.data.Types.STRING
            }
        ],

        proxy : {
            type                : 'ajax',
            url                 : window.rootUrl+'/ws/servicos/listar',

            reader : {
                reader	: 'json',
                root	: ''
            }
        }
    }
});
