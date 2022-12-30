import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProlistComponent } from './prolist/prolist.component';

const routes: Routes = [
  {path: 'plist', component: ProlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
