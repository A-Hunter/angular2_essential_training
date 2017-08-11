import { Component } from '@angular/core';

// A Component contains : 
//    - Template : HTML
//    - Class : Attributes and methods
//    - Metadata : decorating and extending the functionnalities of the Class
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} !</h1>`,
})
export class AppComponent  { name = 'Angular'; }
