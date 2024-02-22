import Features from '@/app/components/datahub/Features';
import News from '@/app/components/general/News';
export default async function Datahub() {

    return (
    <div className="mt-2">
        <Features />
        <News/>
    </div>
    );
}