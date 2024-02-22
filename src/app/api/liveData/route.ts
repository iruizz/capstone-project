import { NextResponse } from 'next/server';
import {pusherServer} from '@/app/lib/pusher';
const FUEL_DEPLETION_RATE = 1; // 1% / 15 seconds

let fuel = 100; // Initial fuel level (full)



// Handle Post Request to URL/api/liveData here
// Takes received data and creates a Pusher event that is displayed on sponsors page
export async function POST(request: Request) {
  try {
    // Parse the JSON data from the request body
    const fuelData = await request.json();
    
    // Check if the fuel data is empty or not
    if (!fuelData || typeof fuelData.value === 'undefined') {
      // If the data is empty or missing, throw an error
      throw new Error('Invalid or empty request body');
    }
    
    // Trigger Pusher event with the received fuel value
    console.log("Before trigger");
    pusherServer.trigger('live-data', 'new-data',  { value: fuelData.value } );
    console.log("After trigger")

    // Return a successful response
    return new Response('Request processed successfully', { status: 200 });
  } catch (error: any) {
    // If an error occurs during processing, return an error response
    console.error('Error processing requestttt:', error.message);
    return new Response('Error processing request', { status: 400 });
  }
}