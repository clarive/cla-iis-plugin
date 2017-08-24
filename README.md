
# IIS plugin

IIS plugin will allow you to launch IIS commands for your web servers from a Clarive instance.

## What is IIS

Internet Information Services (IIS) is an extensible web server created by Microsoft for use with the Windows NT family.
IIS supports HTTP, HTTPS, FTP, FTPS, SMTP and NNTP.

## Requirements

IIS is needed in order for it to work properly.

## Installation

To install the plugin, place the cla-iis-plugin folder inside the `CLARIVE_BASE/plugins`
directory in a Clarive instance.

## How to use

Once the plugin is correctly installed and the Clarive instance is restarted, you will have a new palette service called 'IIS task'.

### IIS task service:

This palette service will let you choose the option that you wish to perform with IIS.
The various parameters from the palette service are:

- **Server** - Choose the server where you wish to execute the code.
- **Command** - Here you will have different commands to launch with the service or write a custom one.
- **Custom command or arguments** -Here you can write arguments for the selected command or write the commands you want to perform.
- **Errors and output** - These two fields are related to manage control errors. Options are:
   - **Fail and output error** - Search for configurated error pattern in script output. If found, an error message is displayed in monitor showing the match.
   - **Warn and output warn** - Search for configurated warning pattern in script output. If found, an error message is displayed in monitor showing the match.,
   - **Custom** - In case combo box errors is set to custom a new form is showed to define the behavior with these fields:
   - **OK** - Range of return code values for the script to have succeeded. No message will be displayed in monitor.
   - **Warn** - Range of return code values to warn the user. A warn message will be displayed in monitor.
   - **Error** - Range of return code values for the script to have failed. An error message will be displayed in monitor.


Configuration example:

    Server: IIS-Server
    Command: Custom
    Custom command or arguments: /restart
    Errors: fail

The service will return the console output for the command.

## Variables:

In order to use some comboboxes or texfields options from some services, you will need to use variables created in the Variable Resource from Clarive so you can use them more time on an easier way than repeating it every time.

There are different Variables types (value, CI, textArea, array, etc), all of the in the Resource Variable. The CI type is usefull for the ciComboBoxes, as you will not be able to manually write them into the combobox, but yes in the texfields.

The CI variable should be created with the following parameters:

- **Type -** CI. 
- **CI Role -** Select the Role of the CI class you have in the comboBox. 
- **CI CLASS -** Select the specific CI Class it will use, usually the same class as the comboBox where you want to make it appear.
