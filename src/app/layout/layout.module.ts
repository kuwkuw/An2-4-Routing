import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AboutComponent, PathNotFoundComponent } from './components';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [AboutComponent, PathNotFoundComponent, MessagesComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LayoutModule { }
