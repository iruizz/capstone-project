import { PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { dynamoDBClient } from "./aws-config";

interface DataFrame {
  speed: number;
  temp: number;
  accel:number;
  fuel: number;
}

export async function getRunData() {
  const runs = await dynamoDBClient.send(new ScanCommand({ TableName: process.env.TABLE as string }));
  return runs.Items;
}

export async function sendDataFrame(runID: number, timestamp: string, newData: DataFrame) {
  await dynamoDBClient.send(
    new PutCommand({
      TableName: process.env.TABLE,
      Item: {
        runID: runID,
        timestamp: timestamp,
        dataframe: newData
      },
    })
  );
}

export async function getLastRunID() {
  const params = {
    TableName: process.env.TABLE as string,
    ScanIndexForward: false, // Sort in descending order
    Limit: 1, // Get only one result
  };

  const response = await dynamoDBClient.send(new ScanCommand(params));

  if (response.Items && response.Items.length > 0) {
    // Extract the runID and timestamp of the most recent entry
    const { runID, timestamp } = response.Items[0];
    return { runID, timestamp };
  } else {
    // If no entries are found, return null or throw an error, depending on your requirement
    return {runID:1, timestamp: null};
  }
}