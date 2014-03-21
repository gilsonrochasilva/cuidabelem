/**
 * Created by GilsonRocha on 14/03/14.
 */
Ext.define('CuidaBelem.model.InteressadoLocal', {
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
        ],

        proxy: {
            type: 'localstorage',
            id  : 'InteressadoLocalProxy'
        }
    }
});
