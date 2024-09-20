import Link from "next/link"

import Navigation from "@/components/Navigation"
import Section from "@/components/Section"
import Footer from "@/components/Footer"

export default function Page() {
    return (
        <div>
            <Navigation />
            <Section className="h-[1000px] bg-ipc-black flex justify-center items-center">
                <div>
                    <div className="text-7xl font-bold text-ipc-yellow">Discover Events</div>
                </div>
            </Section>
            <Section className="min-h-[1000px] bg-ipc-blue flex justify-center">
                <div>
                    <div className="text-5xl font-bold text-ipc-white mt-[100px]">See all IPC events</div>
                </div>
            </Section>
            <Footer />
        </div>
    )
}