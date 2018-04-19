import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceboxComponent } from './servicebox.component';

const routes: Routes = [
    {
        path: '', 
        component: ServiceboxComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServiceboxRoutingModule {
}
