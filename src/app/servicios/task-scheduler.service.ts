import { Inject, Injectable } from '@angular/core';
import { CronJob } from 'cron';

@Injectable({
  providedIn: 'root',
})
export class TaskSchedulerService {
  updateCronExpression(cronExpression: string | undefined) {
    throw new Error('Method not implemented.');
  }
  private cronJob: CronJob;

  constructor(@Inject(String) cronExpression: string) {
    // Set up a CronJob to execute the task based on the provided expression
    this.cronJob = new CronJob(cronExpression, () => {
      this.executeTask();
    });

    // Start the CronJob
    this.cronJob.start();
  }

  private executeTask(): void {
    // Your task logic goes here
    console.log('Task executed based on Cron expression!');
    // Implement your task logic...
  }
}