import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SettingsFormComponent } from './settingsForm/settingsForm.component';

const routes: Routes = [
    {
        path: '', component: SettingsComponent
    },
    {
        path: 'settingsForm ', component: SettingsFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule {
}
