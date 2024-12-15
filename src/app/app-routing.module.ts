// Modificado Nico

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { IntroductionComponent } from './introduction/introduction.component';
//import { InstallationComponent } from './installation/installation.component';
//import { HelloWorldComponent } from './hello-world/hello-world.component';
// import { ProgrammingComponent } from './programming/programming.component';
//import { ConclusionsComponent } from './conclusions/conclusions.component';
import { DniCalculatorComponent } from './dni-calculator/dni-calculator.component';
import { ResultPageComponent } from './result-page/result-page.component';

const routes: Routes = [
 
  { path: 'dni-calculator', loadComponent: () => import('./dni-calculator/dni-calculator.component').then(m => m.DniCalculatorComponent) },
  { path: 'result-page', loadComponent: () => import('./result-page/result-page.component').then(m => m.ResultPageComponent) },
  { path: '', redirectTo: '/introduction', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

