import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstConversationComponent } from "./first-conversation/first-conversation.component";
import { FirstConversationPageOneComponent } from "./first-conversation-page-one/first-conversation-page-one.component";
import { FirstConversationPageTwoComponent } from "./first-conversation-page-two/first-conversation-page-two.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }, {
    path: 'first',
    component: FirstConversationComponent,

    children: [
      {
        path: 'page-one',
        component: FirstConversationPageOneComponent
      }, {
        path: 'page-two',
        component: FirstConversationPageTwoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
