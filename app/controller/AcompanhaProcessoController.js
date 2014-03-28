/**
 * Created by fernandosantos on 28/03/14.
 */
Ext.define('CuidaBelem.controller.AcompanhaProcessoController', {
    extend : 'Ext.app.Controller',

    config: {
        refs: {
            btVoltarAcompanhar : "#btVoltarAcompanhar",
            mainView : "#mainView"
        },
        control: {
            btVoltarAcompanhar : {
                tap : 'voltarParaHome'
            }
        }
    },

    voltarParaHome : function () {
        this.getMainView().voltar(6);
    },

    buscar : function() {
        this.getMapaView().alterarCoordenadas(-1.4528032, -48.4863029);
    }
});
