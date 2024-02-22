import Link from 'next/link';
import Client from '@/app/components/pusher/Client';

export default function Sponsors() {
  return (
    <div className="text-light text-center" style={{height: "800px"}}>
      <h1>Sponsors Page</h1>
      <p className="fs-2 my-5">
        The Sponsor page will display the name, logo, and contact information for each sponsor.
        Currently used to show example of receiving external HTTP POST request with JSON data.
        This page displays whatever value is sent in the request in real time.
        This is made easy and it&apos;s free thanks to <Link href="https://pusher.com/">Pusher.com</Link>
      </p>
      <Client />
    </div>
  );
}
