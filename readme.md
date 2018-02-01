# NSO example package with a simple webui

## About
This NSO package contain a simple webui that demonstrates how the JSON-RPC API can be utilized to fetch the NSO version.

### Package contents
* __webui/webui.json__ Required for the package to be recognised by the new NSO webui and a link to the package webui will be visible on the ApplicationHUB.
* __webui/index.html__ Required entrypoint for the package webui, where the user will end up when clicking on the link in the ApplicationHUB.
* __webui/script.html__ Simple Javascript to peform a request to the NSO JSON-RPC.
* __webui/style.html__ CSS Styles.

## Installation
Put the package contents in the NSO `/packages/example-webui` folder.
Use the webui _nso-host/webui-one/ConfigurationEditor/ncs:packages/reload_ action to reload the NSO packages.
The example-webui should now be accessible from the ApplicationHUB, _nso-host/webui-one/_ or directly at _nso-host/example-webui_

## Browser support
Use a modern web browser like the latest version of Chrome, FireFox, Edge, or Safari.