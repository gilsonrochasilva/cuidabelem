/**
 * Created by fernandosantos on 21/03/14.
 */
Ext.define('CuidaBelem.model.Servico', {
    extend: 'Ext.data.Model',
    config:{
        fields: [
            {
                name: 'nome',
                type: Ext.data.Types.STRING
            },
            {
                name: 'descricao',
                type: Ext.data.Types.STRING
            },
            {
                name: 'cdTipoProcesso',
                type: Ext.data.Types.INTEGER
            }
        ],

        proxy : {
            type                : 'ajax',
            //url                 : 'http://10.1.3.49:8080/gttrans/ws/multa/consulta',
            url                 : 'http://localhost:8080/gdocprocessos/ws/servicos/listar',
            //url                 : 'http://www.belem.pa.gov.br/gttrans/ws/multa/consulta',

            reader : {
                reader	: 'json',
                root	: ''
            }
        }
    }
});
