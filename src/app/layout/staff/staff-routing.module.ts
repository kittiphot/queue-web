import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';

const routes: Routes = [
    {
        path: '', component: StaffComponent,
    }
    ,    {
        path: 'edit/:id', component: EditStaffComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StaffRoutingModule {
}
