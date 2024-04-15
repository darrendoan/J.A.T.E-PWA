# J.A.T.E-PWA

# Description
This another challenge issued by the USYD Coding Bootcamp where we were required to finish off sample code in order to make this work. This assignment is pretty much a simple text edidtor web app that can be used offline as a PWA. J.A.T.E also implements several other data persistence techinques which serve as a redundancy in the case that one of the options is not supported by browser. It also runs in the browser aswell as a standalone app that you can install on a computer or a phone. 

This app was built using starter code, provided by the USYD Coding Bootcamp, which uses `CodeMirror` and `idb`. 

The primary purpose (and motivation) of the app is to apply knowledge of:

 - Service Workers
 - Progressive Web Apps (PWAs); and
 - IndexedDB instances

This project taught me the essential principles of Progressive Web Applications. I learned how to bundle various modules and their dependencies, generate the bundle, and cache resources for network retrieval. Additionally, I gained experience in making the app installable on devices, enabling it to function as a standalone application.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

## Installation
### Live Build
You can access a deployed copy of the web app via Render [here] 

## Usage 
The use of this app is pretty straightforward. It's a text editor so just type whatever you want into the editor. If your internet dies or your house blows up fear not! this app can save your work so that next time you open it, your work will still be there. 

## Credits
### Runtimes and Libraries
Runtime
- [Node.js](https://nodejs.org/en)

Libraries and Modules
- [Express.js](https://expressjs.com/)
- [Webpack](https://webpack.js.org/)
- [webpack-cli](https://www.npmjs.com/package/webpack-cli)
- [Workbox](https://developer.chrome.com/docs/workbox)
- [Babel](https://babeljs.io/)
- [idb](https://www.npmjs.com/package/idb)
- [concurrently](https://www.npmjs.com/package/concurrently)

Plugins and Loaders
- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)
- [webpack-pwa-manifest](https://www.npmjs.com/package/webpack-pwa-manifest)
- [workbox-webpack-plugin](https://www.npmjs.com/package/workbox-webpack-plugin)
- [babel-loader](https://www.npmjs.com/package/babel-loader)
- [css-loader](https://www.npmjs.com/package/css-loader)
- [style-loader](https://www.npmjs.com/package/style-loader)
- [http-server](https://www.npmjs.com/package/http-server)

Additional Resources
- [CodeMirror](https://codemirror.net/)

Starting code was provided by University of Sydney and edX as part of the Full Stack Coding Bootcamp.

