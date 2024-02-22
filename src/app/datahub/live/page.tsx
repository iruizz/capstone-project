'use client'
import FeaturesLive from "@/app/components/live/FeaturesLive"
import GaugeBoard from "@/app/components/live/GaugeBoard";
export default function Live() {

    return (
        <div>
        <div className="mt-2">
        <FeaturesLive />
        <GaugeBoard/>
        </div>
        </div>
    )
}