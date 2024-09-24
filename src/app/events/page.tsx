"use client";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useState } from "react";

import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

import EventThumbnail from "@/components/EventThumbnail";


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
          <div className="text-center text-7xl font-bold text-ipc-yellow mb-[60px]">
            Discover Events
          </div>
          <div className="flex gap-[40px] mx-8">
            <EventThumbnail eventData={EVENT_DATA[0]} href="#event-1"/>
            <EventThumbnail eventData={EVENT_DATA[1]} href="#event-2"/>
            <EventThumbnail eventData={EVENT_DATA[2]} href="#event-3"/>
          </div>
        </div>
      </Section>
      <Section className="min-h-[1000px] bg-ipc-blue flex justify-center">
        <div className="container mx-auto mb-[100px]">
          <div className="text-5xl font-bold text-ipc-white mt-[100px] mb-[40px]">
            See all IPC events
          </div>
          <div className="flex flex-col gap-4 text-xl">
            {EVENT_DATA.map((event: EventObject, key: number) => {
              const [expanded, setExpanded] = useState<boolean>(false);

              return (
                <div
                  id={event.id}
                  className={`p-[35px] rounded-3xl ${
                    eventPassed(event.date) ? "bg-zinc-400" : "bg-ipc-white"
                  }`}
                  key={key}
                >
                  <div className="overflow-y-hidden h-fit" >
                    <div>
                      <h2 className="font-bold text-2xl">{event.title}</h2>
                    </div>
                    <div className="flex justify-between mb-2 text-gray-600">
                      <p>
                        {event.buildingName} | {event.location}
                      </p>
                      <p className="text-gray-600">
                        {event.date.toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      {event.description.map(
                        (paragraph: string, key: number) => (
                          <p className="leading-snug text-2xl" key={key}>
                            {paragraph}
                          </p>
                        )
                      )}
                    </div>
                    {expanded && <div className="flex gap-4 overflow-x-scroll mt-7">
                      {event.images?.map((image: StaticImport, key: number) => (
                        <Image
                          src={image}
                          alt="Event image"
                          key={key}
                          className="w-[300px] rounded-2xl"
                        />
                      ))}
                    </div>}
                  </div>

                  <div className="flex justify-end">
                    <button className="mt-5 text-blue-500 font-medium hover:text-blue-700 hover:underline duration-200"
                      onClick={() => {
                        setExpanded(!expanded);
                      }}
                    >
                      {expanded ? "Collapse" : "Expand"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
