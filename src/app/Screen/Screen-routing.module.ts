import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenComponent } from './Screen.component';
import { QueueComponent } from '../queue/queue.component';

const routes: Routes = [
    {
        path: '',
        component: ScreenComponent
    },
    {
        path: ':queue',
        component: QueueComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScreenRoutingModule {}
