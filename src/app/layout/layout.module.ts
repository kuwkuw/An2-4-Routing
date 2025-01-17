import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AboutComponent, PathNotFoundComponent, MessagesComponent, LoginComponent } from './components';

@NgModule({
  declarations: [AboutComponent, PathNotFoundComponent, MessagesComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LayoutModule { }
