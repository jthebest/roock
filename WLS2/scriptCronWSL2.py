import os
from crontab import CronTab
import requests

def jobs(url):
    try:
        response = requests.get(url)
        print('Ping Successful!')
        print('Headers:')
        print(response.headers)
        print('First 1000 characters of the response:')
        print(response.text[:1000])
    except Exception as e:
        print(f'An error occurred: {e}')

def schedule_job(cron_expression, url):
    with CronTab(user='desarrollo') as cron:
        print('userscron:')
        #jobs(url)
        job = cron.new(command='python3 /mnt/c/Users/Desarrollo/Downloads/script.py')
        print('jobsnew:')
        job.setall(cron_expression)

# Replace 'cron_expression' and 'url' with querystringparameters url y cron.
schedule_job("* * * * *", "https://www.rockwellautomation.com/")