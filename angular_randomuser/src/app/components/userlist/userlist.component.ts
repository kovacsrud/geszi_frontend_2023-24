import { Component, OnInit } from '@angular/core';
import { SelectComponent } from '../select/select.component';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [SelectComponent,NgFor,NgIf],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit {

  ngOnInit(): void {
    this.fetchData();
  }

  userList:any=[];
  isLoading=false;
  userNumber:string="5";

  fetchData(){
    this.isLoading=true;
    fetch(`https://randomuser.me/api/?results=${this.userNumber}`)
    .then(res=>res.json())
    .then(adat=>this.userList=adat.results)
    .catch(err=>console.log(err))
    .finally(()=>this.isLoading=false);
  }

  getUserNumber(e:string){
    this.userNumber=e;
    this.fetchData();
  }

}
