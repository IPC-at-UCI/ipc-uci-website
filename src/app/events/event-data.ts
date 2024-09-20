import { StaticImport } from "next/dist/shared/lib/get-img-props";

import img4 from "@/app/_images/img4.jpg";

interface EventObject {
  title: string;
  buildingName: string;
  location: string;
  date: Date;
  description: string;
  images?: StaticImport[];
}

const EVENT_DATA: EventObject[] = [
  {
    title: "2025 IPC APEX Expo",
    buildingName: "Anaheim Convention Center",
    location: "Anaheim, CA",
    date: new Date("2025-04-06"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta scelerisque quam ac hendrerit. Nullam blandit dolor ante, ac venenatis dui elementum volutpat. Aenean malesuada justo vel magna finibus accumsan. Aenean tincidunt bibendum urna at vulputate. Aliquam commodo, lacus et imperdiet tristique, massa tortor gravida velit, eget volutpat nibh augue sed neque. Vivamus convallis urna ac magna tempor eleifend. Nunc ante massa, lacinia sed metus consequat, vehicula sodales est. Nullam maximus consequat varius.\nPellentesque posuere, felis dapibus ultricies eleifend, mauris sapien tristique dolor, quis vehicula elit eros id ipsum. Duis auctor nec neque ultrices accumsan. Vivamus commodo, purus vitae scelerisque suscipit, massa leo imperdiet massa, et ultricies lectus tortor sed felis. Proin a lacus vel lorem vestibulum gravida sollicitudin a erat. Curabitur euismod nibh et nibh faucibus egestas. Proin ac venenatis tellus. Etiam vestibulum suscipit est et posuere. Curabitur scelerisque sapien libero, vitae bibendum lacus porta posuere. In sed libero nisl. Nulla tristique sapien non est sagittis tempor. Etiam cursus pulvinar lorem, sit amet fermentum enim hendrerit in.",
    images: [img4],
  },
];

export default EVENT_DATA;
