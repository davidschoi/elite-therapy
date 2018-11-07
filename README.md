# EliteApp

> Angular 5 app served through Angular CLI, styled using Sass using Bootstrap framework and ngx-bootstrap

## Improvements

* [ ] Differentiate from Shift.org
* [ ] Event Emitter for dynamic Header on scroll [StackOverflow](https://stackoverflow.com/questions/36471927/eventemitter-does-not-work-on-chrome-safari)
* [ ] Mobile improvements

## Development server

1. To run the elite-therapy app you’ll first need to install Angular CLI.

```
npm install -g @angular/cli
```

2. Clone the repository and install dependencies.

```
git clone https://github.com/davidgumzchoi/elite-therapy.git
cd elite-therapy
npm install
```

3. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

```
ng serve
```

## Build

1. Build gh-pages project and store in the `docs` directory.

```
ng build --prod --output-path docs --base-href /elite-therapy/
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
