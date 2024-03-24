import { PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { dynamoDBClient } from "./aws-config";

interface DataFrame {
  temp1: {
    temp: number;
    ambientTemp: number;
  };
  temp2: {
    temp: number;
    ambientTemp: number;
  };
  temp3: {
    temp: number;
    ambientTemp: number;
  };
  flow: number;
  coordinate: {
    lat: number;
    lng: number;
  };
}

export async function getRunData() {
  const runs = await dynamoDBClient.send(new ScanCommand({ TableName: "runs" }));
  return runs.Items;
}

export async function createRun(runID: string, timestamp: string, newData: DataFrame) {
  await dynamoDBClient.send(
    new PutCommand({
      TableName: "runs",
      Item: {
        runID: runID,
        timestamp: timestamp,
        dataframe: newData
      },
    })
  );
}