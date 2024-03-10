import { Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {path:"",component:MainpageComponent},
    {path:"userlist",component:UserlistComponent},
    {path:"**",component:NotfoundComponent}
];
