import FeaturesHistoric from '@/app/components/historic/FeaturesHistoric';
import HistoricBoard from '@/app/components/historic/HistoricBoard';

export default function Historic() {
    return (
        <main>
            <div className="mt-2">
                <FeaturesHistoric />
                <HistoricBoard/>
            </div>
        </main>
            
    );
}
