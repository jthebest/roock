// my-cron.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CronjobComponent {
  constructor() {
    // Schedule the task to run daily at 5am
    this.scheduleCronJob();
  }

  private scheduleCronJob(): void {
    const cronExpression = '0 0 5 * * *'; // Daily at 5am
    const now = new Date();
    const nextRunTime = this.getNextRunTime(cronExpression, now);

    // Calculate the delay until the next run
    const delay = nextRunTime.getTime() - now.getTime();

    // Execute the task after the calculated delay
    setTimeout(() => {
      this.myCronTask();
      console.log("ejecutar mi tarea")
      this.scheduleCronJob(); // Reschedule for the next day
    }, delay);
  }

  private getNextRunTime(cronExpression: string, now: Date): Date {
    // Implement logic to calculate the next run time based on the cron expression
    // For simplicity, you can use a library like 'node-cron' for this step.
    // Here, we'll assume the next run is exactly 24 hours from now.
    const nextRunTime = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    return nextRunTime;
  }
  private myCronTask(): void {
    // Your task logic goes here
    console.log('Executing cron job...');
  }
}