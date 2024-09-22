import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

import { EVENT_DATA, EventObject } from "@/app/_data/events";

export default function Page() {
  const eventPassed = (date: Date) => {
    const today = new Date();
    return today > date;
  };

  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <Section className="h-[1000px] bg-ipc-black flex justify-center items-center">
        <div>
          <div className="text-7xl font-bold text-ipc-yellow">
            Discover Events
          </div>
        </div>
      </Section>
      <Section className="min-h-[1000px] bg-ipc-blue flex justify-center">
        <div className="container mx-auto mb-[100px]">
          <div className="text-5xl font-bold text-ipc-white mt-[100px] mb-[40px]">
            See all IPC events
          </div>
          <div className="flex flex-col gap-4 text-xl">
            {EVENT_DATA.map((event: EventObject, key: number) => (
              <div className={`p-[35px] rounded-3xl ${eventPassed(event.date) ? "bg-zinc-400" : "bg-ipc-white"}`} key={key}>
                <div>
                  <h2 className="font-bold text-2xl">{event.title}</h2>
                </div>
                <div className="flex justify-between mb-2 text-gray-600">
                  <p>
                    {event.buildingName} | {event.location}
                  </p>
                  <p className="text-ipc-gray">
                    {event.date.toLocaleDateString()}
                  </p>
                </div>
                <div className="flex flex-col gap-3 mb-7">
                  {event.description.map((paragraph: string, key: number) => (
                    <p className="leading-snug" key={key}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="flex gap-4 overflow-x-scroll">
                  {event.images?.map((image: StaticImport, key: number) => (
                    <Image
                      src={image}
                      alt="Event image"
                      key={key}
                      className="h-[300px] w-fit"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
