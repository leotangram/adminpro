import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

// Temproal
import { IncrementComponent } from '../components/increment/increment.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    PagesComponent,
    IncrementComponent
  ],
  exports: [DashboardComponent, ProgressComponent, Graphics1Component],
  imports: [PagesRoutingModule, SharedModule, FormsModule]
})
export class PagesModule {}