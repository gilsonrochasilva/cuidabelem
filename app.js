//@require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({
    name: 'CuidaBelem',
            
    viewport: {
        autoMaximize: true
    },
            
    requires: [
        'Ext.MessageBox'
    ],
            
    views: [
        'MainView'
    ],
            
    controllers: [
        'HomeController',
        'MeusDadosController',
        'ComoUsarController',
        'SobreController',
        'SolicitacaoController'
    ],
            
    models: [
        'InteressadoLocal',
        'TblInteressados',
        'Servico',
        'TblProcessos'
    ],
            
    stores: [
        'InteressadoLocalStore',
        'InteressadoStore',
        'ServicosStore',
        'SalvarSolicitacaoStore'
    ],
            
    isIconPrecomposed: true,
    
    launch: function() {
        //Date Translation
        Ext.Date.monthNames = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ];

        Ext.Date.defaultFormat = 'd/m/Y';

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.create('CuidaBelem.view.MainView', {fullscreen: true});

        //Dismiss the splash screen
        //navigator.splashscreen.hide();
    },
            
    onUpdated: function() {
        Ext.Msg.confirm(
                "Application Update",
                "This application has just successfully been updated to the latest version. Reload now?",
                function(buttonId) {
                    if (buttonId === 'yes') {
                        window.location.reload();
                    }
                }
        );
    }
});