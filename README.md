
# App building flow:
- created app using npx create-react-app command
- removed the unwanted things
- initializd the tailwindcss into the project
- created the basic components [Head , Body , Footer]
- creating the routing 
- need to create the help , offer pages (almost done)
- optimize the home page (making the api calls from the respective components)
- created the signin/ signuplogic in the signin page
- deploying steps using fire base ( 1 install firebase CLI  2 firebase login 3 Initialize Firebase  / --> before step4 you need to do "npm run build" command /  4 firebase deploy )
- creating the signup authentication logic
- working on the restaurant accordion
- working on cart page (redirect to signin page if not signed in , display order details on the cart page)
-order summary basic component is created 
- working on the styling of the order summary page.
- need to work on some functionalities of some pages
- need to work on some funtionalities of help page
- working on the whats on mind functinality ( facing some issues while using the hoosk , rectifying them)
- creating accordions on restaurant menu page (accordion open and close logic is added , need to use dynamic data further)


ERROR :- "display name" is not being updated in the redux store
we need to use "auth.currentuser" and not "user" in the login.js file , because we are trying to fetch the details (uid, displaymname and etc) from a updated user (which is auth.currentuser)




npm install @flaticon/flaticon-uicons --> install this

@import "@flaticon/flaticon-uicons/css/all/all";  -->add this to the index.css file

if you are using the thing from the uicons , put them in a div tag



how to make scroable what on mind :
add -> overflow-hidden
translate-x-[100px] duration-1000


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
