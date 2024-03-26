import { getRunData, sendDataFrame, getLastRunID } from "../../utils/db";
import { pusherServer } from '@/app/lib/pusher';

export async function GET() {
  try {
    const runs = await getRunData();
    return new Response(JSON.stringify(runs), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Error fetching run data:', error);
    return new Response('Error fetching run data', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    // Parse the JSON data from the request body
    const data = await request.json();
    
    // Check if the data is empty or if the key parameter is missing or not equal to 'Jacob'
    // if (!data || data.key === undefined || data.key !== "Jacob") {
    if (!data) {
      // If the data is empty, missing key parameter, or key is not equal to 'Jacob', throw an error
      throw new Error('Invalid or empty request body or incorrect key');
    } else {
      // Trigger Pusher event with the received data
      pusherServer.trigger('live-data', 'new-data', data);

      // Get the last run ID from the DynamoDB table
    const lastRunID = await getLastRunID();
    
    if(lastRunID?.runID !== undefined && lastRunID?.timestamp!== undefined) {
    // Calculate the time elapsed since the last dataframe was sent
    const lastDataFrameTime = new Date(lastRunID.timestamp);
    const currentTime = new Date();
    const timeDifference = currentTime.getTime() - lastDataFrameTime.getTime();
    const timeElapsedMinutes = timeDifference / (1000 * 60); // Convert milliseconds to minutes

    let newRunID = lastRunID.runID; // Initialize newRunID with the last run ID

    // Check if more than 10 minutes have elapsed since the last dataframe was sent and if its an empty table (null timestamp)
    if (timeElapsedMinutes > 10 && lastRunID.timestamp != null) {
      // Increment the run ID by 1
      newRunID = lastRunID.runID + 1
    }
    console.log(lastRunID);
    console.log(newRunID);
    console.log(timeElapsedMinutes);
    console.log(lastRunID.timestamp);
    console.log(data);

    // Adjust the current time by subtracting 5 hours
    const adjustedTime = new Date(currentTime.getTime());

    // Convert the adjusted time to ISO string
    const adjustedISOString = adjustedTime.toISOString();

    // Assuming requestData contains necessary fields such as runID, timestamp, and dataframe
    await sendDataFrame(newRunID, adjustedISOString, data);
  }
    // Return a successful response
      return new Response('Request processed successfully', { status: 200 });
    }
  } catch (error:any) {
    // If an error occurs during processing, return an error response
    console.error('Error processing request:', error.message);
    return new Response('Error processing request', { status: 400 });
  }
}
