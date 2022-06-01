# Serverless Azure project

Right now only contains the 2 example functions, a test function and a test mongodb function.

baseurl/v1/test    - test route
baseurl/mongodb    - test route for posting a name in a test database ie need to send in a value in "name" when posting to this route

# ToDo in order to run on Azure
- Install serverless *npm install -g serverless*
- Create an Azure account according to https://www.serverless.com/framework/docs/providers/azure/guide/quick-start, also create an advanced authentication for deployment to be sure it deploys smoothly.
- Download this repository and run *npm install*
- Run *serverless deploy* to deploy to Azure with the credentials from advanced authentication above
- The variable uri needs to be added in a file *vars.js*, which is used in the database route. This requires an acocunt on https://www.mongodb.com/, click Try Free to create an account and you can follow this guide for creating a mongodb database and connecting to it: https://www.serverless.com/blog/how-to-use-mongodb-with-serverless-cloud

# Azure Functions

Refer to [Serverless docs](https://serverless.com/framework/docs/providers/azure/guide/intro/) for more information.
