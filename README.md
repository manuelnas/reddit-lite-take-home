# reddit-lite-take-home

Reddit lite take home assignment.

## Additional libraries

The assignment requires React and Redux (and associated libraries), any other libraries I've used will be listed here (with the exception of anything added by `create-react-app` which is what I used to get me started):

- `lodash`: My absolute favorite utility library. Takes care of certain checks and has some performance and usability improvements for existing functions. It also adds additional utility functions.
- `prop-types`: Helps to define the props used in any Component and checks types as well as whether all required props are defined.
- `@material-ui/core` and `@material-ui/icons`: This is a UI library that implements the Google Material Design standard. This is widely used on the web so most people that see these components will know what they are and how to use them.
- Testing: I used a mix of libraries to facilitate testing both regular JS as well as React components. I chose this combination of test libraries to make the tests easier to understand, but also to add extra functionality to the already available testing functions (particularly in the case of React components). I researched a good stack to test React applications a while back and came up with these.
	- `mocha`: A relatively light weight but feature rich testing library that allows asynchronous testing.
	- `chai`: Has easy to understand assertions that work well with mocha. This makes the tests easier to understand, and allows me to focus more on creating actual functionality.
	- `enzyme`: Adds functionality to make testing React components and their output easier. Also allows for manipulation, traversing and in some ways simulating the runtime.
	- `sinon`: Adds standalone spies, stubs and mocks to the existing functionality of chai (through the use of `sinon-chai`).
- 

## Folder structure

I decided to split the functionality (components and utilities) and the tests into separate trees, `src/*` for functionality and `test/*` for all tests. This 