import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceboxComponent } from './servicebox.component';
import { ServiceboxFormComponent } from './servicebox.form.component';

const routes: Routes = [
    {
        path: '', 
        component: ServiceboxComponent
    },
    {
        path: 'servicebox-form',
        component: ServiceboxFormComponent,
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServiceboxRoutingModule {
}
