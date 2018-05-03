import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

const routes: Routes = [
    
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },    
    { path: 'login', loadChildren: './login/login.module#LoginModule' },    
    { path: 'userScreen', loadChildren: './userScreen/userScreen.module#UserScreenModule' },
    { path: 'userScreen2', loadChildren: './userScreen2/userScreen2.module#UserScreen2Module' },
    { path: 'userScreen3', loadChildren: './userScreen3/userScreen3.module#UserScreen3Module' },
    { path: 'Screen', loadChildren: './Screen/Screen.module#ScreenModule' },
    { path: 'Screen1', loadChildren: './Screen1/Screen1.module#Screen1Module' },
    { path: 'Screen2', loadChildren: './Screen2/Screen2.module#Screen2Module' },
    { path: 'staffScreen', loadChildren: './staffScreen/staffScreen.module#StaffScreenModule' },
    { path: 'queueScreen/:queue', loadChildren: './queueScreen/queueScreen.module#QueueScreenModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: 'queueScreen1/:queue', loadChildren: './queueScreen1/queueScreen1.module#QueueScreen1Module' },
   
    { path: 'Screen', loadChildren: './Screen/Screen.module#ScreenModule' },
    { path: 'Screen1', loadChildren: './Screen1/Screen1.module#Screen1Module' },
    { path: 'Screen2', loadChildren: './Screen2/Screen2.module#Screen2Module' },
   
    { path: 'queue1/:queue', loadChildren: './queueScreen1/queueScreen1.module#QueueScreen1Module' },


    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
