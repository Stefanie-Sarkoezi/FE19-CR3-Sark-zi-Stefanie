# CR3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Task description for this Code Review: 

Benvenuto al Ristorante Il Gambero Rosso. In this CodeReview, you have to create a Delivery page for the best italian Restaurant using Angular obviously.  

GUI guideline: You are allowed to use CSS and/or bootstrap. 

In order to accomplish this project, you will need to create at least 7 pages/components: NavBar, Home, Footer, About Us, Menu, Details and Order(Cart) (you are free to create additional components if you have time and inspiration). The NavBar will be always showing no matter what component is triggered, the same for the Footer. Home and About Us should have static content. Menu will hold dynamic content created from objects. On clicking on the Details button it should lead to the details page which will bring specific information from that dish. 

The Menu component will hold the dynamic content and should present at least 6 dishes with their image, small description and price.  

For this CodeReview, the following criteria will be graded: 

-Create a GitHub Repository named: FE19-CR3-Name. 

-Your project must contain at least 7 components that together will build up your application as follows: NavBar, Home, Footer, About Us, Menu, Details and Order(Cart)

-Use routing to move between the pages without refreshing the browser (SPA). The navbar contains the navigation links that allow you to go through the components and go back to the home page. 

-Each dish(object) must have at least the following properties: name, image, description, price and availability (Boolean). 

-If the availability of the dish is true, the buttons “Details” and “Order” must be shown in each dish. If it is false, it shouldn’t show the buttons for that object, only the dish picture with a message “Not available”, instead. 

-Create the functionality that when you click on the Order button, the dish will be added to the cart. The user must be able to order as well from the Menu component or from the Details component. The Order component must show the content of the cart. 

-A details component must be created. It will hold specific information about the dish when clicked on the button Details. The user must be able to order from this component.

-Display the total of the Bill with a “Service” section that shows 10% of the total amount on top (for a total of 110%).
If the Total sum is more than EUR 40, the user gets a 15% discount. The total without discount and the new price with the discount must be neatly shown on the screen. 



