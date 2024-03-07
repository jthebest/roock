import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CronJob } from 'cron';
import { TaskSchedulerService } from './task-scheduler.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  cronJob: CronJob;
  //private frase: Frase = { value: "", icon_url: "", id: "", url: "" };
  private cronUrl = "https://api.chucknorris.io/jokes/random"; // URL to web api

  constructor(private http: HttpClient) { 
    const mycom = new TaskSchedulerService('* * * * *');
    this.cronJob = new CronJob('0 0 5 * * *', async () => {
      try {
        await console.log();
      } catch (e) {
        console.error(e);
      }
    });
    
    // Start job
    if (!this.cronJob.running) {
      this.cronJob.start();
    }


  }






  // Define the API endpoint
  private apiUrl = 'https://hg7xygvm17.execute-api.us-east-2.amazonaws.com/five/crontaskrock';

  // GET request
  public getCronTask(headers: any, queryParams: any) {

    return this.http.get(this.apiUrl,
      { headers, params: queryParams }).subscribe(
        (response) => { console.log(response);   },
        (error) => { error = error.message;   }
      );
  }

  public getFrase(): Observable<any> {
    return this.http.get<any>(this.cronUrl);
  }


}
