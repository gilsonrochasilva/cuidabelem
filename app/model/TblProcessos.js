/**
 * Created by fernandosantos on 24/03/14.
 */
Ext.define('CuidaBelem.model.TblProcessos', {
    extend: 'Ext.data.Model',
    config:{
        fields: [
            {
                name: 'idInteressado',
                type: Ext.data.Types.INTEGER
            },
            {
                name : 'nmServico',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nrProcesso',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nmTipoProcesso',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nmInteressado',
                type: Ext.data.Types.STRING
            },
            {
                name: 'stProcesso',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dsProcesso',
                type: Ext.data.Types.STRING
            },
            {
                name: 'tempoProcessoDias',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dtAberturaProcesso',
                type: Ext.data.Types.STRING
            },
            {
                name: 'enderecoProcesso',
                type: Ext.data.Types.STRING
            },
            {
                name: 'idProcesso',
                type: Ext.data.Types.INTEGER
            },
            {
                name: 'latitude',
                type: Ext.data.Types.INTEGER
            },
            {
                name: 'longitude',
                type: Ext.data.Types.INTEGER
            }
        ],

        proxy : {
            type                : 'ajax',
            //url                 : 'http://10.1.3.49:8080/gdocprocessos/ws/processos/abrirprocesso',
            url                 : 'http://localhost:8080/gdocprocessos/ws/processos/abrirprocesso',
            //url                 : 'http://www.belem.pa.gov.br/gttrans/ws/multa/consulta',

            actionMethods: 'POST',

            reader : {
                reader	: 'json',
                root	: ''
            }
        }
    }
});