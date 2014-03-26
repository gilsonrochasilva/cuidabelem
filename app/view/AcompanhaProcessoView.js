/**
 * Created by fernandosantos on 26/03/14.
 */
Ext.define('CuidaBelem.view.AcompanhaProcessoView', {
    extend: 'Ext.Panel',
    xtype: 'acompanhaProcessoView',
    id: 'acompanhaProcessoView',

    requires: [
        'Ext.MessageBox'
    ],

    config: {
        id: 'acompanhaProcessoView',
        layout: {
            align: 'center',
            type: 'vbox'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Meus Dados',
                items: [
                    {
                        id: 'btVoltarMeusDados',
                        xtype: 'button',
                        ui: 'back',
                        text: 'Voltar'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                width: '95%',
                id: 'fdAcompanhaProcesso',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Servico',
                        labelAlign: 'top',
                        itemId: 'nmServico'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Processo',
                        labelAlign: 'top',
                        itemId: 'nrProcesso'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Tipo do Processo',
                        labelAlign: 'top',
                        itemId: 'nmTipoProcesso'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Interessado',
                        labelAlign: 'top',
                        itemId: 'nmInteressado'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Situação',
                        labelAlign: 'top',
                        itemId: 'stProcesso'
                    },
                    {
                        xtype: 'textareafield',
                        height: '120px',
                        label: 'Instrução Inicial',
                        labelAlign: 'top',
                        itemId: 'dsProcesso'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Processo Aberto (Dias)',
                        labelAlign: 'top',
                        itemId: 'tempoProcessoDias'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Data Abertura do Processo',
                        labelAlign: 'top',
                        itemId: 'dtAberturaProcesso'
                    },
                    {
                        xtype: 'textareafield',
                        height: '120px',
                        label: 'Endereço',
                        labelAlign: 'top',
                        itemId: 'enderecoProcesso'
                    },
                    {
                        xtype: 'hiddenfield',
                        itemId: 'idProcesso'
                    },
                    {
                        xtype: 'hiddenfield',
                        itemId: 'latitude'
                    },
                    {
                        xtype: 'hiddenfield',
                        itemId: 'longitude'
                    }
                ]
            }
        ]
    },

    setProcesso: function(_processo) {
        if(_processo != null) {
            var formProcesso = Ext.ComponentQuery.query("#fdAcompanhaProcesso")[0];

            formProcesso.down("#nmServico").setValue(_processo.nmServico);
            formProcesso.down("#nrProcesso").setValue(_processo.nrProcesso);
            formProcesso.down("#nmTipoProcesso").setValue(_processo.nmTipoProcesso);
            formProcesso.down("#nmInteressado").setValue(_processo.nmInteressado);
            formProcesso.down("#stProcesso").setValue(_processo.stProcesso);
            formProcesso.down("#dsProcesso").setValue(_processo.dsProcesso);
            formProcesso.down("#tempoProcessoDias").setValue(_processo.tempoProcessoDias);
            formProcesso.down("#dtAberturaProcesso").setValue(_processo.dtAberturaProcesso);
            formProcesso.down("#enderecoProcesso").setValue(_processo.enderecoProcesso);
            formProcesso.down("#idProcesso").setValue(_processo.idProcesso);
            formProcesso.down("#latitude").setValue(_processo.latitude);
            formProcesso.down("#longitude").setValue(_processo.longitude);
        }
    }



});
