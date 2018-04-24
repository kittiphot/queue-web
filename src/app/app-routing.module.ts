import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

const routes: Routes = [
    
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },    
    { path: 'login', loadChildren: './login/login.module#LoginModule' },    
    { path: 'userScreen', loadChildren: './userScreen/userScreen.module#UserScreenModule' },
    { path: 'staffScreen', loadChildren: './staffScreen/staffScreen.module#StaffScreenModule' },
    { path: 'queue/:queue', loadChildren: './queueScreen/queueScreen.module#QueueScreenModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: 'Screen', loadChildren: './Screen/Screen.module#ScreenModule' },
    { path: 'Screen1', loadChildren: './Screen1/Screen1.module#Screen1Module' },
    { path: 'Screen2', loadChildren: './Screen2/Screen2.module#Screen2Module' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
