import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard2' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'dashboard2', loadChildren: './dashboard2/dashboard2.module#Dashboard2Module' },
            { path: 'staff', loadChildren: './staff/staff.module#StaffModule' },
            { path: 'displayScreen', loadChildren: './displayScreen/displayScreen.module#DisplayScreenModule' },
            { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
            { path: 'servicebox', loadChildren: './servicebox/servicebox.module#ServiceboxModule' },
            { path: 'servicebox/servicebox-form', loadChildren: './servicebox/servicebox.form.component' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
