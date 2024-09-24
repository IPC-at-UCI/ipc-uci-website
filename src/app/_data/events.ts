import { StaticImport } from "next/dist/shared/lib/get-img-props";

import ectfImg from "./event-images/ectf.png";
import logo from "./event-images/logo.png";
import img3 from "./event-images/img3.jpg";
import img5 from "./event-images/img3.jpg";
import pcbImg from "./event-images/pcb.jpeg";

export interface EventObject {
  id: string;
  title: string;
  buildingName: string;
  location: string;
  date: Date;
  description: string[];
  images: StaticImport[];
}

export const EVENT_DATA: EventObject[] = [
  {
    id: "event-1",
    title: "IPC at UCI Chapter Meeting and Info Session",
    buildingName: "HH 143",
    location: "UC Irvine",
    date: new Date("2024-09-30"),
    description: [
      "Come join us for IPC at UCI's first club information session! Learn more about our club, including details regarding the fall schedule, upcoming events, and how you can get involved with our activities.",
      "Free pizza and snacks provided!",
      "Meeting time 5:00pm to 7:00 pm.",
    ],
    images: [logo],
  },
  {
    id: "event-2",
    title: "eCTF challenge intro meeting",
    buildingName: "DBH 1300",
    location: "UC Irvine",
    date: new Date("2024-10-04"),
    description: [
      "This session will introduce IPC's involvement in this year's eCTF competition (embedded Capture the Flag).",
      "Meeting time 5:00pm to 6:30 pm.",
    ],
    images: [ectfImg],
  },
  {
    id: "event-3",
    title: "Introduction to PCB Design",
    buildingName: "ICS 213",
    location: "UC Irvine",
    date: new Date("2024-10-09"),
    description: [
      "Join us for an exciting introduction to PCB design! In this session, we'll cover the fundamentals of designing printed circuit boards, from schematic creation to layout and fabrication.",
      "Meeting time 5:30pm to 7:20 pm.",
    ],
    images: [pcbImg],
  },
  {
    id: "event-4",
    title: "2023 IPC APEX Expo",
    buildingName: "San Diego Convention Center",
    location: "San Diego, CA",
    date: new Date("2023-01-21"),
    description: [
      "IPC APEX EXPO is the premier event for the electronics manufacturing industry. From the industry’s leading technical conference and professional development courses to the innovation-driven exhibit floor, IPC APEX EXPO 2023 will provide you with the opportunity to transform, modernize, discover what is new and next, while collaborating with your peers at North America’s largest gathering of electronics manufacturing professionals.",
      "Join us for next year's IPC APEX Expo!",
    ],
    images: [img3, img5],
  },
];
