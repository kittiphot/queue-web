import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff.component';
import {StaffFormComponent}from './staff.form.component';

const routes: Routes = [
    {
        path: '', component: StaffComponent,
    }
    ,
    {
        path: 'staff-form',
        component: StaffFormComponent,
    }
    ,
    {
        path: 'staff-form/:id',
        component: StaffFormComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StaffRoutingModule {
}
