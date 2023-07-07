# Angular Wedding Website Template

## How to set up the project

For an easier setup, please use the [Angular CLI](https://angular.io/cli) to install the project. to install the project, run the following command in the terminal:

```bash
npm install -g @angular/cli
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## How to use the template

This template is created with the intention of being used as a wedding website. It is a single page application with a navigation bar that links to different sections of the page. The template is fully responsive and can be used on any device. The template is also fully customizable and can be used for any other purpose.

This template is created using Angular 11.2.0 and Bootstrap 4.6.0. The template is also using the following libraries: <br>
[Tailwind CSS](https://tailwindcss.com/)

### How to change the content
#### Date

To change the date of the countdown timer, navigate to the *src/app/components/custom/countdown/countdown.component.ts* file and change the date in the following line of code:

```javascript
// countdonw.component.ts
//...
    this.countDownDate = new Date(04, 28, 2025);
```
- You are not stuck to this date format, and can use any date format you want, as long as it includes the year.
- The date is set to April 28, 2025 by default, if no time is set time will set to midnight.

#### Names

To change the names of the couple, navigate to the *src/main.ts* file and change the names in the following line of code:

```javascript
// src/partials/siteheader.component.ts
//...
    const coupleName = "John & Jane";
```
This changes every instance of #coupleName in the application

# This is just a template and can be changed to anything you want. The world is yours!