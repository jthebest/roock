/* import { CronJob } from 'cron';

class MyController {
    public async methodToRun() {
        console.log("King Chronos");
    }
}

export class CronJobExample {
    private cronJob: CronJob;
    private controller: MyController;

    constructor() {
        this.controller = new MyController();
        this.cronJob = new CronJob('00 30 11 * * 1-5', async () => {
            try {
                await this.controller.methodToRun();
                console.log("Cron job executed successfully");
            } catch (e) {
                console.error(e);
            }
        });

        // Start job
        if (!this.cronJob.running) {
            this.cronJob.start();
        }
    }
}

const example = new CronJobExample();
 */

import * as cron from 'node-cron';

class CronJobExample {
    private cronJob: cron.ScheduledTask;

    constructor(paga:string) {
        //'0 0 * * * *'
        this.cronJob = cron.schedule(paga, async () => {
            try {
                await this.runTask();
            } catch (e) {
                console.error(e);
            }
        });

        if (!this.cronJob.now) {
            this.cronJob.start();
        }
    }

    private async runTask(): Promise<void> {
        // Your task here
        console.log('Cron job executed');
    }
}

const myCronJob = new CronJobExample('0 0 * * * *');