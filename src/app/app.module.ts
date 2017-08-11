// importing functionnalities from modules
// ngModule decorator is used in order to define imports, declarations, bootstrapping options
// BrowserModule is required by default for any web based angular application
// Bootstrap option tells Angular which Component to bootstrap in the application
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

// Bootstrap Array : tells Angular which components need to be loaded so that its 
// functionnality can be accessed in the application. Once you include the component
// in the bootstrap array, you need to declare them so that they can be used accross other
// components in the Angular JS application

// Export Array : This is used to export components, directives, and pipes 
// which can then be used in other modules

// Import Array : This is used to import components, directives, and pipes 
// (functionnalities) from other Angular JS modules
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
