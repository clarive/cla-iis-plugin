# IIS plugin

<img src="https://cdn.jsdelivr.net/gh/clarive/cla-iis-plugin/public/icon/iis.svg?sanitize=true" alt="IIS Plugin" title="IIS Plugin" width="120" height="120">

IIS plugin will allow you to launch IIS commands for your web servers from a Clarive instance.

## What is IIS

Internet Information Services (IIS) is an extensible web server created by Microsoft for use with the Windows NT family.
IIS supports HTTP, HTTPS, FTP, FTPS, SMTP and NNTP.

## Requirements

IIS is needed in the server in order for it to work properly.

## Installation

To install the plugin, place the cla-iis-plugin folder inside the `$CLARIVE_BASE/plugins`
directory in a Clarive instance.

### IIS task

The various parameters are:

- **Server (variable name: iis_server)** - Choose the server where you wish to execute the command.
- **User (user)** - User which will be used to connect to the server.
- **Command (command)** - Here you will have different commands to launch with the service or write a custom one.
   - **Start IIS ("/start")** - Starts IIS service.
   - **Stop IIS ("/stop")** - Stops IIS service.
   - **Restart IIS ("/restart")** - Restarts IIS service.
   - **Check IIS status ("/status")** - Check IIS service status.
   - **Custom command ("custom")** - Write custom command.
- **Custom command or arguments (custom_args)** -Here you can write arguments for the selected command or write the commands you want to perform.

**Only Clarive EE**

- **Errors and output** - These two fields are related to manage control errors. Options are:
   - **Fail and output error** - Search for configurated error pattern in script output. If found, an error message is displayed in monitor showing the match.
   - **Warn and output warn** - Search for configurated warning pattern in script output. If found, an error message is displayed in monitor showing the match.
   - **Custom** - In case combo box errors is set to custom a new form is showed to define the behavior with these fields:
   - **OK** - Range of return code values for the script to have succeeded. No message will be displayed in monitor.
   - **Warn** - Range of return code values to warn the user. A warn message will be displayed in monitor.
   - **Error** - Range of return code values for the script to have failed. An error message will be displayed in monitor.

## How to use

### In Clarive EE

Once the plugin is placed in its folder, you can find this service in the palette in the section of generic service and can be used like any other palette op.

Op Name: **IIS task**

Example:

```yaml
    Server: IIS-Server
    Command: Custom
    Custom command or arguments: /restart
``` 

### In Clarive SE

#### Rulebook

If you want to use the plugin through the Rulebook, in any `do` block, use this ops as examples to configure the different parameters:

Example:

```yaml
do:
   - iis_task:
       iis_server: 'build'     # Required. Use the mid set to the resource you created
       user: 'clarive_user'
       command: "custom"       # Required   
       custom_args: ["/restart"]
``` 

##### Outputs

###### Success

The service will return the console output for the command.

###### Possible configuration failures

**Task failed**

You will get the error from the console output.

**Variable required**

```yaml
Error in rulebook (compile): Required argument(s) missing for op "iis_task": "command"
```

Make sure you have all required variables defined.

**Not allowed variable**

```yaml
Error in rulebook (compile): Argument `User` not available for op "iis_task"
```

Make sure you are using the correct paramaters (make sure you are writing the variable names correctly).

## More questions?

Feel free to join **[Clarive Community](https://community.clarive.com/)** to resolve any of your doubts.
