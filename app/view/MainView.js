Ext.define('CuidaBelem.view.MainView', {
    extend      : 'Ext.Container',
    xtype       : 'mainView',
    fullscreen  : true,
    id          : 'mainView',
    
    requires : [
        'CuidaBelem.view.HomeView',
        'CuidaBelem.view.MeusDadosView',
        'CuidaBelem.view.SolicitacaoView'
    ],

    config: {

        layout: {
            type: 'card'
        },
        
        items : [
            { xtype : 'homeView' },
            { xtype : 'meusDadosView' },
            { xtype : 'solicitacaoView' }
        ]
    },
    
    avancar : function(posicao) {
        if (typeof(posicao) === "undefined") {
            posicao = 1;
        }
        
        var selecionado = this.indexOf(this.getActiveItem());
        this.animateActiveItem((selecionado + posicao), {type : 'slide', direction : 'left'});
    },

    voltar : function(posicao) {
        if (typeof(posicao) === "undefined") {
            posicao = 1;
        }
        
        var selecionado = this.indexOf(this.getActiveItem());
        this.animateActiveItem((selecionado - posicao), {type : 'slide', direction : 'right'});
    }
});