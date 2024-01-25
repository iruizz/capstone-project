import Link from 'next/link';

export default function Datahub() {
    return (
        <main>
            <h1>Datahub Page</h1>
            <Link href='datahub/live'>Live</Link> <br />
            <Link href='datahub/historic'>Historic</Link>
        </main>
    )
}