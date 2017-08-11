import { Component } from '@angular/core';

// A Component contains : 
//    - Template : HTML
//    - Class : Attributes and methods defined in TypeScript
//    - Metadata : defined with a Decorator, which is responsible for decorating and extending the functionnalities of the Class
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} !</h1>`,
})
export class AppComponent  {
   name: string = 'Angular'; 
  }

/**
 @Component({
   selector: 'my-custom-app',
   templateUrl: 'template/template.html'
 })

 export class AppCustomComponent{
   appTitle: string = 'Welcome';
 }
 */
