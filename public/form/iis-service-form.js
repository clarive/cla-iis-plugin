(function(params) {

    var data = params.data;

    var iisServerCombo = Cla.ui.ciCombo({
        name: 'iisServer',
        class: 'generic_server',
        fieldLabel: _('Server'),
        value: data.iisServer || '',
        allowBlank: false,
        with_vars: 1
    });

    var commandComboBox = Cla.ui.comboBox({
        name: 'command',
        fieldLabel: _('Command'),
        data: [
            ['/start',_('Start IIS')],
            ['/stop',_('Stop IIS')],
            ['/restart',_('Restart IIS')],
            ['/status',_('Check IIS status')],
            ['custom',_('Custom command')]
        ],
        value: data.command || '/start',
        allowBlank: false,
        anchor: '100%',
        singleMode: true
    });

    var customParams = Cla.ui.arrayGrid({
            fieldLabel: _('Custom commands or arguments'),
            name: 'custom',
            value: data.custom,
            description: _('Custom commands or arguments'),
            default_value: '.'
    });


    var errorBox = Cla.ui.errorManagementBox({
        errorTypeName: 'errors',
        errorTypeValue: data.errors || 'fail',
        rcOkName: 'rcOk',
        rcOkValue: data.rcOk,
        rcWarnName: 'rcWarn',
        rcWarnValue: data.rcWarn,
        rcErrorName: 'rcError',
        rcErrorValue: data.rcError,
        errorTabsValue: data
    })

    var panel = Cla.ui.panel({
        layout: 'form',
        items: [
            iisServerCombo,
            commandComboBox,
            customParams,
            errorBox
        ]
    });

    return panel;
})