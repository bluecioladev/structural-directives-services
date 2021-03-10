
import { Component,EventEmitter,  Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

title= 'jarbs page';
  
displayname =false;

public color ='green';

public colors = ['red','blue','green','yellow'];

 @Input()  parentData :any;

//@Input('parentData ') public name:any;

@Output() public childEvent= new EventEmitter();


public nombre = "Jarbs Evolution";
public mensaje = " Bienvenido a la programacion";
public persona= {

  'firstName': 'Jackson',
  'lasName' : 'Ruiz'
}

public date =new Date;


  
constructor() { }
  

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('hey Jacksson klk');

  }

}
