## Get Started

1. **Install [Node 8](https://nodejs.org)** or newer. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)(https://github.com/coryhouse/pluralsight-redux-starter/archive/master.zip)
2. **Navigate to this project's root directory on the command line.**
3. **Install Node Packages.** - `npm install`
4. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.
5. Having issues? See below.

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll get an error when you try to start the app later.
2. Don't run the project from a symbolic link. It will cause issues with file watches.
3. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the course.
4. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
5. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
6. Nothing above work? Delete your node_modules folder and re-run npm install.

### Production Dependencies

| **Dependency**   | **Use**                                              |
| ---------------- | ---------------------------------------------------- |
| bootstrap        | CSS Framework                                        |
| immer            | Helper for working with immutable data               |
| prop-types       | Declare types for props passed into React components |
| react            | React library                                        |
| react-dom        | React library for DOM rendering                      |
| react-redux      | Connects React components to Redux                   |
| react-router-dom | React library for routing                            |
| react-toastify   | Display messages to the user                         |
| redux            | Library for unidirectional data flows                |
| redux-thunk      | Async redux library                                  |
| reselect         | Memoize selectors for performance                    |

### Development Dependencies

| **Dependency**                  | **Use**                                                          |
| ------------------------------- | ---------------------------------------------------------------- |
| @babel/core                     | Transpiles modern JavaScript so it runs cross-browser            |
| babel-eslint                    | Lint modern JavaScript via ESLint                                |
| babel-loader                    | Add Babel support to Webpack                                     |
| babel-preset-react-app          | Babel preset for working in React. Used by create-react-app too. |
| css-loader                      | Read CSS files via Webpack                                       |
| cssnano                         | Minify CSS                                                       |
| enzyme                          | Simplified JavaScript Testing utilities for React                |
| enzyme-adapter-react-16         | Configure Enzyme to work with React 16                           |
| eslint                          | Lints JavaScript                                                 |
| eslint-loader                   | Run ESLint via Webpack                                           |
| eslint-plugin-import            | Advanced linting of ES6 imports                                  |
| eslint-plugin-react             | Adds additional React-related rules to ESLint                    |
| fetch-mock                      | Mock fetch calls                                                 |
| html-webpack-plugin             | Generate HTML file via webpack                                   |
| http-server                     | Lightweight HTTP server to serve the production build locally    |
| jest                            | Automated testing framework                                      |
| json-server                     | Quickly create mock API that simulates create, update, delete    |
| mini-css-extract-plugin         | Extract imported CSS to a separate file via Webpack              |
| node-fetch                      | Make HTTP calls via fetch using Node - Used by fetch-mock        |
| npm-run-all                     | Display results of multiple commands on single command line      |
| postcss-loader                  | Post-process CSS via Webpack                                     |
| react-test-renderer             | Render React components for testing                              |
| react-testing-library           | Test React components                                            |
| redux-immutable-state-invariant | Warn when Redux state is mutated                                 |
| redux-mock-store                | Mock Redux store for testing                                     |
| rimraf                          | Delete files and folders                                         |
| style-loader                    | Insert imported CSS into app via Webpack                         |
| webpack                         | Bundler with plugin ecosystem and integrated dev server          |
| webpack-bundle-analyzer         | Generate report of what's in the app's production bundle         |
| webpack-cli                     | Run Webpack via the command line                                 |
| webpack-dev-server              | Serve app via Webpack                                            |

# References

1. https://www.javascriptstuff.com/react-starter-projects/ >various ReactJs Starter Kits
2. Enable https://prettier.io/ code formatter in vsCode. goto file>preferences>settings>FormatOnSave=true

3. Select VS Code -> View -> Command Palette, and type: Format Document With
4. Then Configure Default Formatter... and then choose Prettier - Code formatter.

# WebPack

1. it is a Powerful and extensible Bundler.
2. To bundle javascript into single minified file that works in the browser.
3. it also includes a development web server to run our app locally during development via webpack.
4. it is used by create-react-app behind the scenes.

5. ex: modules with dependencies ---------------weback------------------>static assets
6. .js,.hbs,.cjs,.sass,.png,.jpg--------------- webpack----------------->.js,.css,.jpg,.png
7. webpack is configured via javascript object. config fileName: "webpack.config.js" placed in project root directory.
8. its common to have a separate config file for develop,Prod

# Babel https://babeljs.io/en/repl

1. a javascript compiler that lest us use next generation javascript today.
2. it will "Tanspile" modren Javascript features down so that they run in all browsers.
3. compile JSX to JS as jsx is invalid javascript.So, Babel transpile React JSX down to Javascript.
4. Babel is configured via ".babelrc" file. can also be configured via "package.json".
5. go to "package.json" and set multiple presets for babel.
6. "babel": {
   "presets": [
   "babel-preset-react-app" ]
   }

   // this preset tells Babel to transpile JSX,and it also allow you to safety use modren javascript features(object spread,class properties,dynamic imports,....) to run in todays browsers.this preset is used by "create-react-app"

# Eslint

1. Eslint can be confiured in ". eslintrc" file or in "package.json"
2. "env":{//this tells EsLint to expect certain global variables to ignore them .browser,node,es6,jest all have unique global variables.
3. "rules": {//override default rules
4. "settings": { //must to specify react version
5. "root": true //this assures only this ESLint config applies to this project.
6. EsLint can run via WebPack.its easier to tell webpack to run EsLint for us since ESLint doesn't have FileWatch built in. Add "eslint-loader" in rules of webpack

# 4 ways to Create React Component

1. React.createClass
2. ES Class
3. Function
4. Arrow Function

/_----createClass component---deprecated-----
var HelloWord=React.createClass({
render: function(){
return <h1>Hellow World</h1>
}
})_/

//Class Component
class HelloWorld extends React.Component {
constructor(props) {
super(props);
}

render() {
return <h1>Hellow World</h1>;
}
}

//Function Component
function HelloWorld1(props) {
return <h1>Hello World1</h1>;
}

//Arrow Function Component
const HelloWorld2 = (props) => <h1>Hellow World2</h1>; //use const to assure that the component is accidentally reassigned
/\*prefer functional components whenerver possible
1.easy to understand
2.Avoids 'this' keyword
3.eliminates the need for binding
4.less transpiled code the class component.so, Smaller bundles.little Better performance.
5.Higher Signal-to-noise ratio
6.Enhanced code completion / intellisense
7.easy to test.easy asserts(given this prop you expect X return).
8.it offers improved performance as well, since as of React16 there's no instance created to wrap them.
9.classes may be removed in future with React Hooks

\*/

# when to use Class/Function Component

#### pre v16.8

1. Class Component : State,Ref,LifeCycle Methods
2. Functional Component : Everywhere else

#### After v16.8

1. Class Component : ComponentDidError, getSnapshotBeforeUpdate
2. Functional Component : Everywhere else

# Redux

1. Imagine there is React component tree.out of which 2 components farer from top level component need shared data.
2. solution1 : "lift state" to common ansestor component.if top level component is the only common between the 2, then props has to be passed to all ancestor components though they don't need it. this problem is called "Prop Drilling"
3. solution2: React Context (provider,consumer)
4. solution3: Redux central store. Any component can dispatch 'Action' which inturn updates the store that intrun update other connected components to that data.

#### when to use Redux

1. complex data flows
2. inter-component communications (components without parent child relationship)
3. non-hierarchical data (when 2 dispirit components are manipurating same data)
4. Many actions (writes,reads,deletes for complex data structures)
5. don't use redux in app that merely display static data
6. same data in many places

7. Start with state in single component
8. Lift state as needed
9. Try context or Redux when lifting state get annoying

#### 3 principles of Redux

1. One immutable store
2. Action Triggers Changes
3. Reducers update state

#### in Redux

1. store and change logic are separate
2. on store
3. single store with hierarchical reducers
4. No dispatcher
5. container components are utilize connect
6. state is immutable
7. Reducers : (CurrentState,Action)------REDUCER-------->newState

#### Action Creator (type + action).

1. action can be "object,number,boolean,..anything that is serializable" but can't be "functions,promises,...anything that is not serializable to JSON"

rateCourse(rating){ return { type:RATE_PRODUCT, rating: rating } }

#### Create Redux Store (Immutable)

1. let store=createStore(reducer)
2. Immutability: To Change State Object, You must return new Object that represents new state
3. Number,string, boolean, undefined, null ------>Immutable
4. Object, Arrays, Functions------------>Mutable

5. redux depends on immutable state to improve performance
6. to create copies of objects use > Object.assign(target,...sources), {...myObj}, .map (map,reduce,filter)
7. In Redux, state is immutable. to change store state you must return updated copy.

Ex:

1. Object.assign({},state,{role:'admin'}) >clone state object into new empty object and overide role property
2. or const new={...state,role:'admin'};
3. Object.assign, spread operator only creates shallow copies. if there is nested object you need to clone it too.
4. const user={name:'jack',add:{state:'calif'}}
5. {...user} ---->shallow copy
6. {...user,address:{...user.address}} ---->deep copy
7. only clone nested object if you need to change a value in that nested object, otherwise unnecessary rerenders
8. OR use clone-deep or lodah.merge for deepclone
9. deep cloning is expensive,wasteful,unnessary rerenders
10. so,use immer.js

11. for Arrays[]
12. Avoid using push,pop,reverse because they mutate the array.
13. so, prefer using map,filter,reduce,concat,spread as these methods return new array without mutating existing array.

#### Redux Store

1. store.dispatch(action) >only way to change store is to dispatch action
2. store.subscribe(listener)
3. store.getState()
4. replaceReducer(nextReducer) >useful to support hot reloding

#### Handling immutable state

1. use Object.assign, Spread Operator, Map,filter,reduce
2. or use libraries like Immer,seamless-immutable,react-addons-update,Immutable.js,..

#### why immutability

1. performance: checking if(prevStoreState!==storeState) is efficient than checking every property in object
2. clarity

##

1. if state is mutated in Redux, it will introduce a bug.
2. redux-immutable-state-invariant library(only for dev) detects mutations in code is mistakenly made.
3. to programatically enforce immutability, use libraries like immer,immutable.js,seemless-immutable,..

#### Reducer

1. funtion myReducer(state,action){ return new state on action passed }
2. reducers are pure functions (same st of arguments always return same value)
3. Reducers should return an updated "COPY" of state.Reduc will use that copy to update the store.
4. All Reducers are called when an action is dispatched.Switch statement inside reducer will check the action type.so, all reducers should return untouched state as default case.
5. NOTE: All reducers together form complete picture of what's in store.Also, There will not always be 1-1 mapping between reducers and actions.
6. Each action can be handled by multiple reducers.Each Reducer can handle multiple actions. This is called "Reducer Composition"

##### since reducers are pure functions, inside reducer

1. never mutate arguments
2. never perform side effects like API calls or routing transitions
3. never call non-pure functions (like Date.Now, Math.Random)

# 1.Container Component

1. focus on how thinks work
2. aware of Redux
3. subscribe to Redux state
4. Dispatch Reduc actions

# 2.Presentaional Component

1. Focus on how things look
2. unaware of Redux
3. Read data from props
4. invoke callbacks on props

# Connecting Reduc to React

1. use React-Reduc library with Provider, mapStateToProps, mapDispatchToProps
2. Everytime component is updated, mapStateToProps function is called.So, if you doing something expensive inside mapStateToProps, use library like "Reselect.js" for memoizing(it is like caching function calls.if the function is just called with same parameters it won't call again.it returns momoized value)

##### 4 ways to handle mapDispatchToProps

1. omit mapDispatchToProps and use Dispatch Directly.downsides:1)Boilerplate 2)Redux concerns in child components.

   this.props.dispatch(loadProducts())

2. Wrap manually.

   function mapDispatchToProps(dispatch){
   return{
   loadProducts:()=>{
   dispatch(loadCourses());
   },
   createProduct:(product)=>{
   dispatch(createProduct(product));
   },
   updateProduct:(product)=>{
   dispatch(updateProduct(product));
   }
   }
   }

   //in component
   this.props.loadProducts()

3. Bind Action Creators
   function mapDispatchToProps(dispatch){
   return{
   actions:bindActionCreators(actions,dispatch)
   }
   }

   //in component
   this.props.actions.loadProducts()

4. mapDispatchToProps as Object.(preferred)
   const mapDispatchToProps={
   loadProducts
   };

   //in component
   this.props.loadProducts();

# Initial Redux Setup

1. Create Action
2. Create Reducer
3. Create Root Reducer
4. Configure Store
5. Instantiate Store
6. Connect Component
7. Pass Props via Connect
8. Dispatch Action

## Add Feature

1. Create Action
2. Enhance Reducer
3. Connect Component
4. Dispatch Action

## Reduce Redux BoilerPlate

1. https://redux.js.org/recipes/reducing-boilerplate
2. redux-starter-kit
3. Rematch
4. Redux Sauce

## Redux Async Libraries

1. redux-thunk
2. redux-saga
3. redux promise
4. redux observable

# Production Build Process

1. Lint and run tests
2. Bundle and minify Js and Css
3. Generate Js and Css Sourcemaps
4. Exclude dev specific concerns
5. Build React In Production mode
6. Generate Bundle Report
7. Run and build on local webserver
