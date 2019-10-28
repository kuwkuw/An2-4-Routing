import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { AuthGuard, CustomPreloadingStrategyService } from './core';

import { AboutComponent, MessagesComponent, LoginComponent, PathNotFoundComponent } from './layout';

const extraOptions: ExtraOptions = {
    preloadingStrategy: CustomPreloadingStrategyService,
    enableTracing: true // Makes the router log all its internal events to the console.
};


const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
        data: { title: 'About' }
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' }
    },
    {
        path: 'messages',
        component: MessagesComponent,
        outlet: 'messages'
    },
    {
        path: 'admin',
        canLoad: [AuthGuard],
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        data: { title: 'Admin' }
    },
    {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
        data: { preload: true, title: 'Users' }
    },
    {
        path: '**',
        component: PathNotFoundComponent,
        data: { title: 'Page Not Found' }
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, extraOptions)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
