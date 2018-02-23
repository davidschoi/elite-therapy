# CurseApp

> Angular 5 app served through Angular CLI, styled using Sass using Bootstrap framework and ngx-bootstrap; graphs rendered through ngx-charts

## Objectives 
 
Build a Web Page: Use the mock, assets, and data provided build a simple static application form that includes a graph displaying the applicants (graph_array_data.txt) youtube stats. Use the mock as an outline, but feel free to make changes to sizes, margins, and color as you see fit.
* [x] Compile CSS: **[Sass](http://sass-lang.com/)**
* [x] Use your preferred Javascript framework: **[Angular](https://angular.io/)**
* [x] Use your preferred solution for rendering the graph (free or commercial): **[ngx-charts](https://github.com/swimlane/ngx-charts)**
* [x] Consider responsive design on implementation: **[Bootstrap](https://getbootstrap.com/)** and **[ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap)**

## Improvements

* Go to Register directly
* Custom name messaging in rejection
* Route to say denied?
* Tooltip in Login that describes what the input outcomes should be

* [ ] Better graph: [Coinbase](https://codeburst.io/how-i-built-an-interactive-30-day-bitcoin-price-graph-with-react-and-an-api-6fe551c2ab1d)
* [ ] Loading Spinners to mock service calls setTimeout()
* [ ] Use Firebase to Google YouTube authenticate
* [ ] Summary of total views and subscribers that will take you to more details description on click

## Navigating the CurseApp

* Initial page will take you to `/apply`
* Upon clicking `Log In With YouTube` button a modal pops up
* Form has prepopulated values of `{ name: 'David', subscribers: 10, watchTime: 400 }`
* Click `Apply`
  * Eligibility Requirements Not Met because `subscribers < 1000 && watchTime < 4000`
  * `Try Again` after updating subscribers and watchTime through the dropdown
  * Click `Apply`
* Register Page displays graph and form
  * Graph gets mock data and visualizes data using ngx-charts
  * Form is validated and created using Angular's Reactive Form

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

1. To run the curse app you’ll first need to install Angular CLI

```
npm install -g @angular/cli
```

2. Clone the repository and install dependencies

```
git clone https://github.com/davidgumzchoi/curse.git
cd curse-app
npm install
```

3. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

```
ng serve
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `docs/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
