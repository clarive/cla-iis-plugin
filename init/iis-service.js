var reg = require("cla/reg");

reg.register('service.iis.task', {
    name: _('IIS task'),
    icon: '/plugin/cla-iis-plugin/icon/iis.svg',
    form: '/plugin/cla-iis-plugin/form/iis-service-form.js',
    rulebook: {
        moniker: 'iis_task',
        description: _('Executes a Gradle compilation'),
        required: ['iis_server', 'command'],
        allow: ['iis_server', 'command', 'custom_args', 'user', 'errors'],
        mapper: {
            'iis_server':'iisServer',
            'custom_args': 'custom'
        },
        examples: [{
            iis_task: {
                iis_server: 'iis_server-resource',
                user: 'clarive_user',
                command: "custom",
                custom_args:["/restart"]
            }  
        }]
    },
    handler: function(ctx, params) {

        var reg = require('cla/reg');
        var fs = require('cla/fs');
        var log = require('cla/log');

        var server = params.iisServer;
        var path = params.path;
        var errors = params.errors || 'fail';
        var command = params.command;
        var customParams = params.custom;
        var user = params.user || "";
        var fullCommand = "";

        if (server == "") {
            log.fatal(_("No server selected"));
        }

        function remoteCommand(params, command, server, errors, user) {
            var output = reg.launch('service.scripting.remote', {
                name: _('IIS task'),
                config: {
                    errors: errors,
                    server: server,
                    user: user,
                    path: command,
                    output_error: params.output_error,
                    output_warn: params.output_warn,
                    output_capture: params.output_capture,
                    output_ok: params.output_ok,
                    meta: params.meta,
                    rc_ok: params.rcOk,
                    rc_error: params.rcError,
                    rc_warn: params.rcWarn
                }
            });
            return output;
        }

        if (command == "custom") {
            fullCommand = "iisreset " + customParams.join(" ");
        } else if (command == "") {
            log.fatal(_("No option selected"));
        } else {
            fullCommand = "iisreset " + command + " " + customParams.join(" ");
        }

        log.info(_("Starting IIS task"));
        var response = remoteCommand(params, fullCommand, server, errors, user);
        log.info(_("IIS task finished"));
        return response.output;
    }
});