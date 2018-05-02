import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintqueueComponent } from './Printqueue.component';

const routes: Routes = [
    {
        path: '',
        component: PrintqueueComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrintqueueRoutingModule {}
