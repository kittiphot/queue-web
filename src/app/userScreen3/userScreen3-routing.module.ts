import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserScreen3Component } from './userScreen3.component';

const routes: Routes = [
    {
        path: '',
        component: UserScreen3Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserScreen3RoutingModule {}
