import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  QuestionComponent
} from '../question/question.component';

// import {
//   HomeComponent
// // } from '../home/home.component';
// } from '../app.component';

const routes: Routes = [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  // {
  //   path: 'home',
  //   component: HomeComponent
  // },

  {
    path: 'question',
    component: QuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}