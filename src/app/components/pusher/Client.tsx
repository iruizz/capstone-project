'use client'
import React, { useState, useEffect } from 'react';
import {pusherClient} from '@/app/lib/pusher';

export default function Client () {
  const [value, setValue] = useState(0);

  
  useEffect(() => {
    console.log("Pre Bind");
     pusherClient.subscribe('live-data');
     pusherClient.bind('new-data', (data: { value: number }) => {
       setValue(data.value);
     });
     console.log("Post Bind");
     return () => {
       pusherClient.unsubscribe('live-data');
       pusherClient.unbind('new-data');
     };
   }, []);

  return (
    <div>
      <h1 className="text-light">Received Value From Postman: {value}</h1>
    </div>
  );
};
