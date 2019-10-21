import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent, MessagesComponent, PathNotFoundComponent } from './layout';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'messages',
        component: MessagesComponent,
        outlet: 'messages'
    },
    {
        path: '**',
        component: PathNotFoundComponent
    }];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
