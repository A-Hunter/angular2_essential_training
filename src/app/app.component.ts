import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} !</h1>
              <div>This is a tutorial in {{subject}}</div>`,
})
export class AppComponent  {
   name: string = 'Angular'; 
   subject:string = 'AngularJS 2'
  }