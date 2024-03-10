import { Component } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  nevek=["Éva","Ákos","Ella","Oszkár","Géza","Egon","Dániel","Janka"]
  //nevek=[];

  elemHozzaad(e:any){
    e.preventDefault();
    this.nevek.push(e.target.elements.name.value);
  }

}
