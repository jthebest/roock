import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrapeComponent } from './scrape/scrape.component';
//import { TaskSchedulerComponent } from './tasksheduler/tasksheduler.component';
//import { CronJobsModule } from 'ngx-cron-jobs';
//import { CronjobComponent } from './cron/cronjob/cronjob.component';



@NgModule({
  declarations: [
    AppComponent,
    ScrapeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
