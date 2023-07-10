import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstConversationComponent } from './first-conversation/first-conversation.component';
import { FirstConversationPageOneComponent } from './first-conversation-page-one/first-conversation-page-one.component';
import { FirstConversationPageTwoComponent } from './first-conversation-page-two/first-conversation-page-two.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from "@angular/forms";
import { TopicListComponent } from './topic-list/topic-list.component';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FirstConversationComponent,
    FirstConversationPageOneComponent,
    FirstConversationPageTwoComponent,
    DashboardComponent,
    TopicListComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      CommonModule,
      FormsModule,
      HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
