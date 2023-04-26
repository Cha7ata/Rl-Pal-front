import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MessagesComponent } from './messages/messages.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';
import { ParamtresComponent } from './paramtres/paramtres.component';

const routes: Routes = [{ path: '', component: HomeComponent, children: [{ path: '', redirectTo: 'acceuil', pathMatch: 'full' }, { path: 'acceuil', component: AcceuilComponent, data: { text: 'Acceuil' } }, { path: 'messages', component: MessagesComponent, data: { text: 'Messages' } }, { path: 'create', component: CreateComponent, data: { text: 'Create' } }, { path: 'profile', component: ProfileComponent, data: { text: 'Profile' } }, { path: 'paramtres', component: ParamtresComponent, data: { text: "Param\u00E8tres" } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
