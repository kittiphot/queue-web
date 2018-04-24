import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserScreen2Component } from './userScreen2.component';

const routes: Routes = [
    {
        path: '',
        component: UserScreen2Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserScreen2RoutingModule {}
