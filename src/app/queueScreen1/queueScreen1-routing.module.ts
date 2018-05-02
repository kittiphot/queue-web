import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueueScreen1Component } from './queueScreen1.component';

const routes: Routes = [
    {
        path: '',
        component: QueueScreen1Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QueueScreen1RoutingModule {}
