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
                name: 'coordenadaLatitude',
                type: Ext.data.Types.NUMBER
            },
            {
                name: 'coordenadaLongitude',
                type: Ext.data.Types.NUMBER
            }
        ]

    }
});