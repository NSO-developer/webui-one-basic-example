# NSO example package with a simple webui

## About
This NSO package contain a simple webui that demonstrates how the JSON-RPC API can be utilized.
Show the running NSO Version.
Show a similar menu as the Cisco Short Cut Menu.
Show a similar logout menu as Cisco webui one.
All the similarity to the Cisco Webui is copied and separated from the Ciso Webui not in any way linked.

## Package contents
* __webui/webui.json__ Required for the package to be recognised by the new NSO webui and a link to the package webui will be visible on the ApplicationHUB.
* __webui/index.html__ Required entrypoint for the package webui, where the user will end up when clicking on the link in the ApplicationHUB.
* __webui/script.html__ Simple Javascript to peform a request to the NSO JSON-RPC.
* __webui/style.html__ CSS Styles.

## Requirements
* NSO version 4.5+
* A modern version of Chrome or Firefox

## Installation
Put the package contents in the NSO `/packages/webui-one-basic-example` folder.

__Reload packages using cli or webui.__
* CLI: start ncs_cli
  * run _request packages reload_
* WEBUI: In your browser go to http://NSO-HOST/webui-one/ConfigurationEditor/ncs:packages/reload
  * Click "Run reload action"

__You have to restart NSO__
* Restart NSO

The example-webui should now be accessible from the ApplicationHUB, _nso-host/webui-one/_ or directly at _nso-host/custom/webui-one-basic-example_

## Browser support
Use a modern web browser like the latest version of Chrome, FireFox, Edge, or Safari.
