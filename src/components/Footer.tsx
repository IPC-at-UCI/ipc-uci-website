import Image from "next/image";
import Link from "next/link";

import logo from "@/app/_images/logo.png";

import ContactIcon from "./ContactIcon"

import {
  InstagramLogoIcon,
  DiscordLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <div className="flex flex-col bg-ipc-blue text-ipc-white">
      <div className="flex container pt-9 mx-auto px-[80px]">
        <div className="flex justify-between w-screen">
          {/* Left */}
          <div className="">
            <Image src={logo} alt="logo" className="w-[160px] " />
          </div>

          {/* Middle */}
          <div className="flex gap-[100px]">
            <div>
              <div className="font-bold mb-2">Pages</div>
              <div className="flex flex-col">
                <Link href="/" className="hover:text-ipc-gray duration-100">
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:text-ipc-gray duration-100"
                >
                  About
                </Link>
                <Link
                  href="/events"
                  className="hover:text-ipc-gray duration-100"
                >
                  Events
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-ipc-gray duration-100"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <div className="font-bold mb-2">Join Us</div>
              <div className="flex flex-col">
                <Link href="#" className="hover:text-ipc-gray duration-100">
                  IPC Discord
                </Link>
                <Link href="#" className="hover:text-ipc-gray duration-100">
                  Register
                </Link>
                <Link href="#" className="hover:text-ipc-gray duration-100">
                  2025 Apex Expo
                </Link>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="font-semibold text-2xl mb-1">Questions?</div>
            <div className="flex flex-col gap-1">
              <Link
                href="/contact"
                className="text-ipc-white underline underline-offset-4 ease-in-out duration-100 hover:text-ipc-gray"
              >
                Contact us
              </Link>
              <div className="">ipc.ucirvine@gmail.com</div>
              <div className="flex items-center">
                <ContactIcon Icon={DiscordLogoIcon} size={5} />
                <ContactIcon Icon={InstagramLogoIcon} size={5} />
                <ContactIcon Icon={EnvelopeClosedIcon} size={5} />
                <ContactIcon Icon={GitHubLogoIcon} size={5} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex container mx-auto px-[80px] justify-end pt-3 pb-7 text-sm">
        <div>Copyright © IPC at UCI 2024. All Rights Reserved.</div>
      </div>
    </div>
  );
}
