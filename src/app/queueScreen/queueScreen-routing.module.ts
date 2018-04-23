import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueueScreenComponent } from './queueScreen.component';

const routes: Routes = [
    {
        path: '',
        component: QueueScreenComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QueueScreenRoutingModule {}
