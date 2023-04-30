import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialExamplesRoutingModule } from './material-examples-routing.module';
import { IndicatorsExampleComponent } from './pages/indicators-example/indicators-example.component';

import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    IndicatorsExampleComponent
  ],
  imports: [
    CommonModule,
    MaterialExamplesRoutingModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule
  ]
})
export class MaterialExamplesModule { }
