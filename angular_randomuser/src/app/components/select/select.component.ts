import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {

  @Output()
  userNumber=new EventEmitter();

  outputUserNumber(e:any){
    this.userNumber.emit(e.target.value);
  }

}
