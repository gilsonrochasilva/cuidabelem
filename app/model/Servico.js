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
                name: 'cdTipoProcesso',
                type: Ext.data.Types.INTEGER
            },
            {
                name: 'dsImagem',
                type: Ext.data.Types.STRING
            }
        ],

        proxy : {
            type                : 'ajax',
            //url                 : 'http://10.1.3.49:8080/gdocprocessos/ws/servicos/listar',
            url                 : 'http://localhost:8080/gdocprocessos/ws/servicos/listar',
            //url                 : 'http://www.belem.pa.gov.br/gttrans/ws/multa/consulta',

            reader : {
                reader	: 'json',
                root	: ''
            }
        }
    }
});
