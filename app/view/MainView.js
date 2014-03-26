Ext.define('CuidaBelem.view.MainView', {
    extend      : 'Ext.Container',
    xtype       : 'mainView',
    fullscreen  : true,
    id          : 'mainView',
    
    requires : [
        'CuidaBelem.view.HomeView',
        'CuidaBelem.view.MeusDadosView',
        'CuidaBelem.view.ComoUsarView',
        'CuidaBelem.view.SobreView',
        'CuidaBelem.view.SolicitacaoView',
        'CuidaBelem.view.MapaView',
        'CuidaBelem.view.AcompanhaProcessoView'
    ],

    config: {

        height: '100%',

        layout: {
            type: 'card'
        },
        
        items : [
            { xtype : 'homeView' },
            { xtype : 'meusDadosView' },
            { xtype : 'solicitacaoView' },
            { xtype : 'comoUsarView' },
            { xtype : 'sobreView' },
            { xtype : 'mapaView' },
            { xtype : 'acompanhaProcessoView'}
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