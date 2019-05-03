# reddit-lite-take-home

## How to run and test

- Before running or testing entering `npm install` into the command line is required. After this you have two options:
	- Enter `npm start` into the command line to start an ad-hoc webserver that serves the application.
	- Enter `npm test` into the command line to run all available tests. 

## Additional libraries

The assignment requires React and Redux (and associated libraries), any other libraries I've used will be listed here (with the exception of anything added by `create-react-app` which is what I used to get started):

- `lodash`: My absolute favorite utility library. Takes care of certain checks and has some performance and usability improvements for existing functions. It also adds additional utility functions.
- `prop-types`: Helps to define the props used in any Component and checks types as well as whether all required props are defined.
- `@material-ui/core` and `@material-ui/icons`: This is a UI library that implements the Google Material Design standard. This is widely used on the web so most people that see these components will know what they are and how to use them.
- Testing: I used a mix of libraries to facilitate testing both regular JS as well as React components. I chose this combination of test libraries to make the tests easier to understand, but also to add extra functionality to the already available testing functions (particularly in the case of React components). I researched a good stack to test React applications a while back and came up with these.
	- `mocha`: A relatively light weight but feature rich testing library that allows asynchronous testing.
	- `chai`: Has easy to understand assertions that work well with mocha. This makes the tests easier to understand, and allows me to focus more on creating actual functionality.
	- `enzyme`: Adds functionality to make testing React components and their output easier. Also allows for manipulation, traversing and in some ways simulating the runtime.
	- `sinon`: Adds standalone spies, stubs and mocks to the existing functionality of chai (through the use of `sinon-chai`).
- `axios`: An easy to use Promise based HTTP client that I've used for years.
	- `axios-mock-adapter`: Helps with mocking axios calls for the purpose of testing.

## File/Folder structure

I chose to put every component in its own folder with an `index.js` file that exports the component in question (`export default`). This allows me to keep the Redux connect in a separate file, but in the same folder. The same goes for any other files that are associated to that component (such as `*.test.js` files).\

An added benefit is that wrapping the component in a higher order component can be done in the `index.js` file. The same goes for exporting any utility or helper functions that are closely related to the component. Doing this gives a very clear and uncluttered view of what's exported while keeping the import of that component simple (just by 'importing' the folder).

I found that applying this one small change makes things clearer and it's easier to find out what's going on with a certain component, even if you've never seen that specific component before.

