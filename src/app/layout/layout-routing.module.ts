import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'staff', loadChildren: './staff/staff.module#StaffModule' },
<<<<<<< HEAD
            { path: 'servicebox', loadChildren: './servicebox/servicebox.module#ServiceboxModule' },
=======
            { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
            { path: 'servicebox', loadChildren: './servicebox/servicebox.module#ServiceboxModule' },
            { path: 'servicebox/servicebox-form', loadChildren: './servicebox/servicebox.form.component' },
>>>>>>> 54490126016853572b6b1886050385b1d79ddf1d
            { path: 'queue', loadChildren: './queue/queue.module#QueueModule' },
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
