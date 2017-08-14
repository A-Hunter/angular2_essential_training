import { Component } from '@angular/core';
/**
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} !</h1>
              <div>This is a tutorial in {{subject}}</div>`,
})
*/

 @Component({
  selector:'my-second-app',
  templateUrl:'app/app.component.html'
})
/**
export class AppCustomComponent{
     attribute:string = '... maybe';
}
*/
export class AppComponent  {

  constructor(@Environment(‘test’ private sub:string){})

   name: string = 'Angular'; 
   subject:string = 'AngularJS 2';
   bool:boolean = true;
   list:any[] = [{
      "id":1,
      "name":"one"
      },{
        "id":"2",
        "name":"two"
      },{
        "id":"3",
        "name":"three"
      }];
}

