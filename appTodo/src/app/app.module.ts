import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoreComponent } from './more/more.component';
import { CardViewComponent } from './card-view/card-view.component';
import { Page404Component } from './page404/page404.component';
import { TodoService } from './service/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoreComponent,
    CardViewComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
