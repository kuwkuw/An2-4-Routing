import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { TasksModule } from './tasks/tasks.module';
import { SpinnerModule } from './widgets/spinner/spinner.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutModule,
    TasksModule,
    SpinnerModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;
    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }

}
