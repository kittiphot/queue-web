import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserScreenComponent } from './userScreen.component';

const routes: Routes = [
    {
        path: '',
        component: UserScreenComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserScreenRoutingModule {}
