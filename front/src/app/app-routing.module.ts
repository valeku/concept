import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'lastprojects',
    loadChildren: () => import('./pages/lastprojects/lastprojects.module').then( m => m.LastprojectsPageModule)
  },
  {
    path: 'multitied',
    loadChildren: () => import('./pages/multitied/multitied.module').then( m => m.MultitiedPageModule)
  },
  {
    path: 'another',
    loadChildren: () => import('./pages/another/another.module').then( m => m.AnotherPageModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./pages/resume/resume.module').then( m => m.ResumePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'intrusion',
    loadChildren: () => import('./pages/intrusion/intrusion.module').then( m => m.IntrusionPageModule)
  },
  {
    path: 'bluetooth',
    loadChildren: () => import('./pages/bluetooth/bluetooth.module').then( m => m.BluetoothPageModule)
  },
  {
    path: 'parkinglocal',
    loadChildren: () => import('./pages/parkinglocal/parkinglocal.module').then( m => m.ParkinglocalPageModule)
  },
  {
    path: 'parkingcloud',
    loadChildren: () => import('./pages/parkingcloud/parkingcloud.module').then( m => m.ParkingcloudPageModule)
  },
  {
    path: 'cloudapi',
    loadChildren: () => import('./pages/cloudapi/cloudapi.module').then( m => m.CloudapiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
