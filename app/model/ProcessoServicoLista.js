/**
 * Created by fernandosantos on 25/03/14.
 */
Ext.define('CuidaBelem.model.ProcessoServicoLista', {
    extend: 'Ext.data.Model',
    config:{
        fields: [
            {
                name: 'idProcesso',
                type: Ext.data.Types.INTEGER
            },
            {
                name: 'nrProcesso',
                type: Ext.data.Types.INTEGER
            },
            {
                name: 'nrAno',
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
                name: 'dtAberturaProcesso',
                type: Ext.data.Types.STRING
            }
        ],

        proxy : {
            type                : 'ajax',
            url                 :  window.rootUrl+'/ws/processos/listar',
            
            reader : {
                reader	: 'json',
                root	: ''
            }
        }
    }
});