# Trotter Frontend

### Dependencies
[react](https://facebook.github.io/react/)

[redux](http://redux.js.org/)

[react-redux](https://github.com/rackt/react-redux)

[react-router](https://github.com/rackt/react-router)

[redux-simple-router](https://github.com/reactjs/react-router-redux)

[bootstrap](https://http://getbootstrap.com/)

[bootstrap-sass-loader](https://github.com/shakacode/bootstrap-loader)

[webpack](https://webpack.github.io/)

[superagent](https://github.com/visionmedia/superagent)

[leaflet](https://github.com/Leaflet/Leaflet)

[react-leaflet](https://github.com/PaulLeCam/react-leaflet)

For a full list of dependencies, see "package.json".


### Module Bundler
[Webpack](https://webpack.github.io/) (requires npm)

Webpack is dependent on Node. To set up a node development environment that works on Windows please follow the steps described [here](https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#configuring-your-windows-development-environment).

### Deploying

`npm run build` will build all assets using the `webpack.prod.config.js` file. This file is currently set up for debug, but should be toggled
to run webpack in production mode, which will minify, remove console.logs etc.  
`npm run build` will build all assets to the `/static/` folder.  

#### Before building

Ensure that the environment flag in `src/config/index.js` is set to production, this will fix routing for the application according to the
`basePath` value inside the `production.config.js` folder. This will describe to the application what paths prefix the root of the application.  

**Example:**  
Trotter is deployed on `http://dev.kartena.se/trotter/` and will serve the frontend from `/trotter/`. Normally, the frontend assumes it's being served on `/`, so we change the basePath from `/` to `/trotter/`.


#### After building  
To deploy to a server, simply copy the `/static/`, `/img/` `/index.html` files to the server. It's recommended to delete these folders from the target location first, since each file compiled with webpack will be given a unique identifier. **NOTE**: when deploying to production/live environment, the `index.html` file has to be modified to load the `bundle.js` from `static/bundle.js` and **NOT** `/static/bundle.js`. Sadly we don't have any way of knowing which environment we are in, inside the .html file, so this is our fix.

#### Deploying to localhost

If you are deploying to localhost (your own IIS) you want to build using the `development` configuration and simply copy the built files to the `wwwroot` folder of your trotter-backend.

### Run project with development server
$ npm start

Go to localhost:3000

**Eslint is used for linting using [AirBnb style guide](https://github.com/airbnb/javascript) **
To run linting
$ npm run lint


### Development dependencies
[Babel](http://babeljs.io/) - transpile ES2016 to ES5
[sass-loader](https://github.com/jtangelder/sass-loader) sass to less via webpack
[React-hot-loader](https://github.com/gaearon/react-hot-loader), update page on save. (TODO replace this with React Transform)

Use the [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) for Chrome!
and the [React Developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

If you are developing in Visual Studio Code, use the [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to make sure your code follows the guidelines.
Never submit anything that has Lint erros in it!


### Directory structure
This is a React/Redux app and the directory structure is structured according to that!

    .
    ├── node_modules
    ├── index.html
    └── src
       ├── actions
       ├── components
       ├── constants
       ├── helpers
       ├── middleware
       ├── reducers
       ├── store
       └── stylesheets

**Actions**

Contains all the action creators. Action creators are functions that create actions

**Components**

All react components goes here, wheather they're dumb or smart. You should never put components in the root of this folder. Create a directory that describes
the category of the component. Smart components should always have the same name as its parent directory.

**Constants**
This folder contains hmm, the constants! This is where all the action types are defined.

**Reducers**

Contains all reducers. Reducers modifies the state of the application. The reducers should take a
previous state and an action and return the new state.  

**Store**

Contains the store creation

**Stylesheets**

All styling is made with sass and is extending the bootstrap library. If you want to make general changes that will affect the overall apperence of the application,
please tweak the already existing bootstrap variables. This should be done in "bootstrap/customization" or "bootstrap/pre-customization". If you are uncertain of which to
use, read the ".bootstraprc" file. If your style changes are ment to affect one component only, then create a new sass-file in the "components" directory. Make sure in include
it in the "_all.scss" file.

Information about which bootstrap variables that are available can be found here: https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss.
