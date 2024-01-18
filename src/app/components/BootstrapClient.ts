"use client"
import { useEffect } from 'react';


function BootstrapClient() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js'); // min file for smaller file size
  }, []);

  return null;
}

export default BootstrapClient;