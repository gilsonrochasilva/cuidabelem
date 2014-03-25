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
            }
        ],

        proxy : {
            type                : 'ajax',
            url                 : 'http://10.1.3.49:8080/gdocprocessos/ws/processos/abrirprocesso',
            //url                 : 'http://localhost:8080/gdocprocessos/ws/processos/abrirprocesso',
            //url                 : 'http://www.belem.pa.gov.br/gttrans/ws/multa/consulta',

            actionMethods: 'POST',

            reader : {
                reader	: 'json',
                root	: ''
            }
        }
    }
});