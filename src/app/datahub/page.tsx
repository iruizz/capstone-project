import Link from 'next/link';
import Features from '@/app/components/Features';
export default async function Datahub() {
  
    return (
        
        <main>
          <Features />
           <ul>
            <Link href='datahub/live'>Live</Link> <br />
            <Link href='datahub/historic'>Historic</Link>
            </ul>
        </main>
    );
}