import Link from "next/link";
import Image from "next/image";

import logo from "@/app/_images/logo.png";

import ContactIcon from "./ContactIcon"

import {
  InstagramLogoIcon,
  DiscordLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { DISCORD_INVITE_LINK, GITHUB_LINK, INSTAGRAM_LINK, IPC_EMAIL } from "@/app/_data/links";

function NavItem({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) {
  return (
    <Link
      href={url}
      className="text-ipc-white px-7 py-4 hover:bg-ipc-black ease-in-out duration-200"
    >
      {children}
    </Link>
  );
}

export default function Navigation() {
  return (
    <div className="bg-ipc-blue">
      <div className="flex container mx-auto px-4 justify-between w-screen">
        <Link href="/" className="flex items-center gap-3 text-ipc-yellow hover:text-ipc-white ease-in-out duration-200">
          <Image src={logo} width={50} height={50} alt="IPC Logo" priority />
          <div className="font-bold">IPC @ UCI</div>
        </Link>

        <div className="flex items-center">
          <NavItem url="/">Home</NavItem>
          <NavItem url="/about">About</NavItem>
          <NavItem url="/events">Events</NavItem>
          <NavItem url="/contact">Contact</NavItem>
        </div>

        <div className="flex items-center">
          <ContactIcon Icon={DiscordLogoIcon} href={DISCORD_INVITE_LINK} className="w-5 h-5" />
          <ContactIcon Icon={InstagramLogoIcon} href={INSTAGRAM_LINK} className="w-5 h-5" />
          <ContactIcon Icon={EnvelopeClosedIcon} href={IPC_EMAIL} className="w-5 h-5" />
          <ContactIcon Icon={GitHubLogoIcon} href={GITHUB_LINK} className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
