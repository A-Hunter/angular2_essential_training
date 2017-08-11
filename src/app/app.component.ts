import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} !</h1>
              <div>This is a tutorial in {{subject}}</div>`,
})
/**
 @Component({
  selector:'my-second-app',
  templateUrl:'app/app.component.html'
})
export class AppCustomComponent{
     attribute:string = '... maybe';
}
 */


export class AppComponent  {
   name: string = 'Angular'; 
   subject:string = 'AngularJS 2';
}

