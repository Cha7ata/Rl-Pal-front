import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { IgxDialogModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxListModule, IgxIconModule, IgxTabsModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';
import { ParamtresComponent } from './paramtres/paramtres.component';

@NgModule({
  declarations: [
    HomeComponent,
    AcceuilComponent,
    MessagesComponent,
    CreateComponent,
    ProfileComponent,
    ParamtresComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IgxDialogModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxListModule,
    FormsModule,
    IgxIconModule,
    IgxTabsModule,
    IgxNavigationDrawerModule
  ]
})
export class HomeModule {
}
