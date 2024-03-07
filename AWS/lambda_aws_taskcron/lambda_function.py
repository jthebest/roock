import requests
import boto3

def lambda_handler(event, context):
    #function_name = 'my-function'  # replace with your Lambda function name
    #role_arn = 'arn:aws:iam::123456789012:role/my-role'  # replace with the ARN of your IAM role
    #role_arn = 'arn:aws:iam::449708762001:role/service-role/taskCron-role-v6kcd6qs'
    #zip_file_path = 'lambda_function.zip'  # replace with the path to your ZIP file
    #rule_name = 'my-scheduled-rule1'  # replace with your CloudWatch Events rule name
    #cron_expression = 'cron(*/2 * * * *)'  # replace with your Cron expression
    #arn:aws:lambda:us-east-2:449708762001:function:taskCron
    #create_lambda_function(function_name, role_arn, zip_file_path)
    #rule_arn = create_cloudwatch_events_rule(rule_name, cron_expression)
    #add_lambda_permission(function_name, rule_name, rule_arn)
    #add_cloudwatch_events_target(rule_name, f'arn:aws:lambda:us-east-2:449708762001:function:{function_name}')
    
    url = event['queryStringParameters']['url']
    cron = event['queryStringParameters']['cron']

    response = requests.get(url)
    #print(response.headers)
    #print('-------------')
    #print(response.text[:1000])
    return {
        'statusCode': 200,
        'headers': {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*", 
            "Access-Control-Allow-Methods": "GET" 
        },
        'body': response.text[:1000]
    }
    
    
def create_lambda_function(function_name, role_arn, zip_file_path):
    lambda_client = boto3.client('lambda')
    with open(zip_file_path, 'rb') as f:
        zipped_code = f.read()
    lambda_client.create_function(
        FunctionName=function_name,
        Runtime='python3.8',
        Role=role_arn,  # replace with the ARN of your IAM role
        Handler='lambda_function.lambda_handler',
        Code=dict(ZipFile=zipped_code),
    )

def create_cloudwatch_events_rule(rule_name, cron_expression):
    events_client = boto3.client('events')
    rule_response = events_client.put_rule(
        Name=rule_name,
        ScheduleExpression=cron_expression,
        State='ENABLED',
    )
    return rule_response['RuleArn']

def add_lambda_permission(function_name, rule_name, rule_arn):
    lambda_client = boto3.client('lambda')
    lambda_client.add_permission(
        FunctionName=function_name,
        StatementId=f'{rule_name}-Event',
        Action='lambda:InvokeFunction',
        Principal='events.amazonaws.com',
        SourceArn=rule_arn,
    )

def add_cloudwatch_events_target(rule_name, function_arn):
    events_client = boto3.client('events')
    events_client.put_targets(
        Rule=rule_name,
        Targets=[
            {
                'Id': '1',
                'Arn': function_arn,
            },
        ]
    )

