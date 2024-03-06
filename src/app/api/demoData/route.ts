import { pusherServer } from '@/app/lib/pusher';

// Handle Post Request to URL/api/liveData here
// Takes received data and creates a Pusher event that is displayed on sponsors page
export async function POST(request: Request) {
  try {
    // Parse the JSON data from the request body
    const data = await request.json();
    
   // Check if the data is empty or if the key parameter is missing or not equal to 'Jacob'
 {/*} if (!data || data.key === undefined || data.key !== "Jacob") { */}
    if(!data){
    // If the data is empty, missing key parameter, or key is not equal to 'Jacob', throw an error
    throw new Error('Invalid or empty request body or incorrect key');
  } else {
    // Trigger Pusher event with the received data
    pusherServer.trigger('demo-data', 'new-data', data);
  }
    // Return a successful response
    return new Response('Request processed successfully', { status: 200 });
  } catch (error: any) {
    // If an error occurs during processing, return an error response
    console.error('Error processing request:', error.message);
    return new Response('Error processing request', { status: 400 });
  }
}
