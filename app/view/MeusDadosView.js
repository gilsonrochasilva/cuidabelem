/*
 * File: app/view/IndentificacaoView.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CuidaBelem.view.MeusDadosView', {
    extend: 'Ext.Panel',
    xtype: 'meusDadosView',
    id: 'meusDadosView',

    requires: [
        'Ext.MessageBox'
    ],

    config: {
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
                id: 'formMeusDados',
                xtype: 'fieldset',
                width: '95%',
                items: [
                    {
                        xtype: 'hiddenfield',
                        itemId: 'idInteressado'
                    },
                    {
                        xtype: 'numberfield',
                        id: 'cpfMeusDados',
                        itemId: 'nrCpfCnpj',
                        label: 'CPF',
                        labelAlign: 'top',
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'nmInteressado',
                        label: 'Nome',
                        labelAlign: 'top',
                        required: true
                    },
                    {
                        xtype: 'emailfield',
                        itemId: 'dsEmail',
                        label: 'E-mail',
                        labelAlign: 'top',
                        placeHolder: 'email@exemplo.com.br',
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'dsEndereco',
                        label: 'Endereço',
                        labelAlign: 'top',
                        required: true
                    }
                ]
            },
            {
                id: 'btSalvarMeusDados',
                xtype: 'button',
                ui: 'confirm',
                width: '95%',
                text: 'Salvar'
            }
        ]
    },

    setInteressado: function(_interessado) {
        if(_interessado != null) {
            var formMeusDados = Ext.ComponentQuery.query("#formMeusDados")[0];

            formMeusDados.down("#idInteressado").setValue(_interessado.idInteressado);
            formMeusDados.down("#nrCpfCnpj").setValue(_interessado.nrCpfCnpj);
            formMeusDados.down("#nmInteressado").setValue(_interessado.nmInteressado);
            formMeusDados.down("#dsEmail").setValue(_interessado.dsEmail);
            formMeusDados.down("#dsEndereco").setValue(_interessado.dsEndereco);
        }
    },

    getInteressado : function() {
        var formMeusDados = Ext.ComponentQuery.query("#formMeusDados")[0];

        var interessado = Ext.create("CuidaBelem.model.TblInteressados");
        interessado.idInteressado = formMeusDados.down("#idInteressado").getValue();
        interessado.nrCpfCnpj = formMeusDados.down("#nrCpfCnpj").getValue();
        interessado.nmInteressado = formMeusDados.down("#nmInteressado").getValue();
        interessado.dsEmail = formMeusDados.down("#dsEmail").getValue();
        interessado.dsEndereco = formMeusDados.down("#dsEndereco").getValue();

        return interessado;
    },

    limpar : function() {
        var formMeusDados = Ext.ComponentQuery.query("#formMeusDados")[0];
        formMeusDados.down("#nrCpfCnpj").setValue(null);
        formMeusDados.down("#nmInteressado").setValue(null);
        formMeusDados.down("#dsEmail").setValue(null);
        formMeusDados.down("#dsEndereco").setValue(null);
    }

});