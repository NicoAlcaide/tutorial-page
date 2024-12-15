// Modificado Nico

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { InstallationComponent } from './installation/installation.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ProgrammingComponent } from './programming/programming.component';
import { ConclusionsComponent } from './conclusions/conclusions.component';
import { DniCalculatorComponent } from './dni-calculator/dni-calculator.component';
import { ResultPageComponent } from './result-page/result-page.component';

const routes: Routes = [
  { path: 'introduction', loadComponent: () => import('./introduction/introduction.component').then(m => m.IntroductionComponent) },
  { path: 'installation', loadComponent: () => import('./installation/installation.component').then(m => m.InstallationComponent) },
  { path: 'hello-world', loadComponent: () => import('./hello-world/hello-world.component').then(m => m.HelloWorldComponent) },
  { path: 'programming', loadComponent: () => import('./programming/programming.component').then(m => m.ProgrammingComponent) },
  { path: 'conclusions', loadComponent: () => import('./conclusions/conclusions.component').then(m => m.ConclusionsComponent) },
  { path: 'dni-calculator', loadComponent: () => import('./dni-calculator/dni-calculator.component').then(m => m.DniCalculatorComponent) },
  { path: 'result-page', loadComponent: () => import('./result-page/result-page.component').then(m => m.ResultPageComponent) },
  { path: '', redirectTo: '/introduction', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

