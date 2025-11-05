
# App building flow:
- created app using npx create-react-app command (this is depricated now)
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
- working on the whats on mind functinality 
- creating accordions on restaurant menu page 
- working on the functionalities inside the accordions (done)
- shimmer UI is created need to be integrated ( need to check whether lazy loading can be used insted?)
- need to work on page navigations and dynamic data renderings ( for home, restaurant page, payment page, summary page, if needed make some design changes)
- need to adjust the footer (on resturant menu page it is shows in the middle) (done)


- when be come back to the restaurant menu page , it is not showing the selected items

(accordion open and close logic is added , proper acccordion fixing needed little )

- working on the cart page to dispaly details  (done)
- created the go to cart button on the restaurant menu page  (done)
- added the app name onto the header (done)
- should  go to the cart page if there is no item in the cart and display an epty banner (done)
- need to add some labels on the restaurants (need to work on it)  ??? ( working on it using HOC)
- can introduce usememo and usecallback for optimization (working)

- need to work on the deployment (firebase is not supporingt authentication)

- logic fro once the user places the order , if goes again to the cart page it should not show the previously added items (need to work on it)

- working on lazy loading (working)
- working on pagination (need to be implement is possible)

- added the navigation from the empty cart tot he homw page (done)


- need to work on the deployment (firebase is not supporting authentication ,need to work with different accounts it seems)
- need to the fire base authentication issue(working on it, chages status as owner but didnt help)

- need to work on the price amount (working)
- need to work on the fetch with error handling on different components or if possibel need to create custom hooks(working)


- the custom hook (useRestaurantMenu) is used to support the restaurantmenu component ( facing some issues on this )
- react 19 version has a new feature for fetch know as "use" , use that

- added some changes to the productdetails component (done) 

- need to add some optimization techniques

- need to work on some optimization changes

- working on the custom hook ( working - some changes needed)

- typescript (working on the tasks  - started working on it - need to adopt testing also)
- converting from react to typescript also by following little transitions (working on it)
- working on the tasks
- completed the  documentation(DONE)
- working on the planning and documentation
- going through the documentations to understant the situations and terms of them
- docs completion

- facing little issues 
- need some local storage configurations





- working on recat 19 update --> "use" for fetching
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
