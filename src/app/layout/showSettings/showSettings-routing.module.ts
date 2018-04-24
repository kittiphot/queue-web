import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowSettingsComponent } from './showSettings.component';

const routes: Routes = [
    {
        path: '', component: ShowSettingsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShowSettingsRoutingModule {
}
