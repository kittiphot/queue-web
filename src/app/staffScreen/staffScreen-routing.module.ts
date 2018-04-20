import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffScreenComponent } from './staffScreen.component';

const routes: Routes = [
    {
        path: '',
        component: StaffScreenComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StaffScreenRoutingModule {}
