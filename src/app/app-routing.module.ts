import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EchoComponent } from './angular/echo/echo.component';
import { ListComponent } from './angular/list/list.component';
import { SignUpComponent } from './angular/sign-up/sign-up.component';
import { ThanksComponent } from './angular/thanks/thanks.component';
import { GameListingComponent } from './angular/game-listing/game-listing.component';
import { GameDetailComponent } from './angular/game-detail/game-detail.component';
import { GameNewComponent } from './angular/game-new/game-new.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'package/:packageId',
    loadChildren: () =>
      import('./package/package.module').then((m) => m.PackageModule),
  },
  {
    path: 'javascript',
    loadChildren: () =>
      import('./javascript/javascript.module').then((m) => m.JavascriptModule),
  },
  {
    path: 'angular',
    loadChildren: () =>
      import('./angular/angular.module').then((m) => m.AngularModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'html',
    loadChildren: () => import('./html/html.module').then((m) => m.HtmlModule),
  },
  { path: 'css', loadChildren: () => import('./css/css.module').then(m => m.CssModule) },
  {
    path: 'echo',
    component: EchoComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'signUpForm',
    component: SignUpComponent
  },
  {
    path: 'thanks',
    component: ThanksComponent
  },
  {
    path: 'gameList',
    component: GameListingComponent
  },
  {
    path: 'gameDetalil/:id',
    component: GameDetailComponent
  },
  {
    path: 'gameNew',
    component: GameNewComponent
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
