
import { Component, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'strucutural-directives';

public name ;
public message='';

constructor(){

this.name="Ruiz";
}

ngOnInit() {

}

}
