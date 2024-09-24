import Image from "next/image"
import Link from "next/link"

import { EventObject } from "@/app/_data/events"

export default function EventThumbnail({ eventData, href }: { eventData: EventObject, href: string }) {
    return (
        <Link href={href} className="relative text-ipc-white flex justify-center items-center group">
            <div className="absolute z-50 opacity-0 group-hover:opacity-100 duration-300 m-6">
                <h3 className="font-bold text-2xl mb-2">{eventData.title}</h3>
                <p className="font-light text-lg leading-6">{eventData.description[0]}</p>
            </div>
            <Image src={eventData.images[0]} alt="Event image" className="object-cover w-[600px] group-hover:brightness-50 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,.75)]
 duration-300 rounded-2xl" />

        </Link>
    )
}