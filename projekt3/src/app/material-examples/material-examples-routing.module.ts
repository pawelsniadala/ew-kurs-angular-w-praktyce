import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicatorsExampleComponent } from './pages/indicators-example/indicators-example.component';

const routes: Routes = [
  {
      path: '',
      children: [
          {
              path: '', redirectTo: 'indicators', pathMatch: 'full'
          },
          {
              path: 'indicators', component: IndicatorsExampleComponent
          }
      ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialExamplesRoutingModule { }
