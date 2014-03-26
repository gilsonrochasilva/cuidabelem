/**
 * Created by GilsonRocha on 14/03/14.
 */
Ext.define('CuidaBelem.model.TblInteressados', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'idInteressado',
                type: Ext.data.Types.INTEGER
            },
            {
                name: 'nrCpfCnpj',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nmInteressado',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dsEndereco',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dsEmail',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nrEndereco',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dsBairro',
                type: Ext.data.Types.STRING
            },
            {
                name: 'nmCidade',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dsUf',
                type: Ext.data.Types.STRING
            },
            {
                name: 'dsComplemento',
                type: Ext.data.Types.STRING
            },
            {
                name: 'vlSenha',
                type: Ext.data.Types.STRING
            }
        ]
/*
        proxy : {
            type                : 'ajax',
            //url                 : 'http://10.1.3.49:8080/gdocprocessos/ws/interessado/buscar',
            url                 : 'http://localhost:8080/gdocprocessos/ws/interessado/buscar',
            //url                 : 'http://www.belem.pa.gov.br/gttrans/ws/multa/consulta',

            reader : {
                reader	: 'json',
                root	: ''
            }
        }
        */
    }

});