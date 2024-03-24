const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const REGION = "us-east-2";

const dynamoDBClient = new DynamoDBClient({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

export { dynamoDBClient };