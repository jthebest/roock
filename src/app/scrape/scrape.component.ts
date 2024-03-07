import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import * as cron from 'node-cron';
//import { writeFileSync } from "fs";
//import * as fs from 'fs';

//import { CronJobExample } from './CronJobExample';
//import { CronJob } from 'cron';

//import { TaskSchedulerService } from '../task-scheduler.service';
//import { CronjobComponent } from '../cronjob/cronjob.component';
//import { CronJob } from 'cron';
//import * as cron from 'cron';
//import { CronJob } from 'cron';

@Component({
  selector: 'app-scrape',
  templateUrl: './scrape.component.html',
  styleUrls: ['./scrape.component.css']
})






export class ScrapeComponent implements OnInit  {
  //public fs = require('fs');
  myForm1: FormGroup;
  error: string | undefined;
  fileService: any;
  //cronJob: CronJob;
  public async methodToRun() {
    console.log("King Chronos");
  }
  constructor(private fb: FormBuilder, private http: HttpClient) {

    //this.example = new CronJobExample();
    this.myForm1 = this.fb.group({
      'url': ['', Validators.required],
      'cron': ['', [Validators.required]]
    });
    
    

  }

  ngOnInit() {
    console.log("yes");


//     this.myForm1 = this.fb.group({
//     // your controls here
//   });
//'taskCron-Key': '4GwWAUeyux8yqNk3F4DrO5vDUfwIwticataxGPJl', // replace with your actual token
    //           'Access-Control-Allow-Credentials': 'true'

    /*     'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',  // enable CORS
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token', */
  }


downloadFile() {
  const data=  "import os"+"\n"+
  "from crontab import CronTab"+"\n"+
  "import requests"+"\n"+
  "\n"+
  "def job(url):"+"\n"+
  "    try:"+"\n"+
  "        response = requests.get(url)"+"\n"+
  "        print('Ping Successful!')"+"\n"+
  "        print('Headers:')"+"\n"+
  "        print(response.headers)"+"\n"+
  "        print('First 1000 characters of the response:')"+"\n"+
  "        print(response.text[:1000])"+"\n"+
  "    except Exception as e:"+"\n"+
  "        print(f'An error occurred: {e}')"+"\n"+
  "\n"+
  "def schedule_job(cron_expression, url):"+"\n"+
  "    with CronTab(user='username') as cron:"+"\n"+
  "        job = cron.new(command='python /path/to/your/script.py')"+"\n"+
  "        job.setall(cron_expression)"+"\n"+
  "\n"+
  "# Replace 'cron_expression' and 'url' with your values"+"\n"
  "schedule_job('cron_expression', 'url')"+"\n";

  const blob = new Blob([data], { type: 'text/plain' });
  const url= window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'script.py';
  link.click();
}


  onSubmit() {
    //const job = cronParser.parseExpression(this.cronExpression);
    console.log("mp");
    
    if (this.myForm1.valid) {

      this.downloadFile()



  



      // console.log("Start Write")
      //   writeFileSync("file.py", 
      //   "My name is John" +
      //   "from crontab import CronTab" +

      //   "# Inicializar cron" +
      //   "cron = CronTab(user='tu_usuario')" +

      //   "# Añadir nuevo trabajo cron" +
      //   "job = cron.new(command='/usr/bin/python3 /ruta/a/tu/script.py')" +

      //   "# Establecer el tiempo: cada día a las 6:00" +
      //   "job.setall('0 6 * * *')" +

      //   "# Escribir el trabajo cron en el crontab" +
      //   "cron.write()"

      //   , {
      //   flag: "w"
      //   })
      //   console.log("End Write")

      const headers = new HttpHeaders({
      });
      let queryParams = new HttpParams();
      queryParams = queryParams.append("url",this.myForm1.controls['url'].value );
      queryParams = queryParams.append("cron",this.myForm1.controls['cron'].value );
      this.http.get('https://hg7xygvm17.execute-api.us-east-2.amazonaws.com/five/crontaskrock',
      { headers,params:queryParams }).subscribe(
           (response) =>{ console.log(response) ; console.log("correcto");},
           (error) => { this.error = error.message; console.log("incorrecto"); }
      );

    } else {
      console.log('Form is not valid');
    }
  }
}
