import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ChartsModule } from 'ng2-charts';

// Temproal
import { IncrementComponent } from '../components/increment/increment.component';
import { GraphicDoughnutComponent } from '../components/graphic-doughnut/graphic-doughnut.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    PagesComponent,
    IncrementComponent,
    GraphicDoughnutComponent
  ],
  exports: [DashboardComponent, ProgressComponent, Graphics1Component],
  imports: [PagesRoutingModule, SharedModule, FormsModule, ChartsModule]
})
export class PagesModule {}
