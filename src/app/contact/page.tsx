import Link from "next/link";
import Image from "next/image";

import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import ContactIcon from "@/components/ContactIcon";

import rightCircuit from "@/app/_images/right-circuit.png";
import leftCircuit from "@/app/_images/left-circuit.png";

import { DISCORD_INVITE_LINK, INSTAGRAM_LINK, GITHUB_LINK, IPC_EMAIL } from "@/app/_data/links";

import { EnvelopeClosedIcon, DiscordLogoIcon, InstagramLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <div>
      <Navigation />

      <Image
        src={rightCircuit}
        alt="Circuit design"
        className="absolute right-0 translate-y-[820px] max-[1500px]:invisible"
      />
      <Image
        src={leftCircuit}
        alt="Circuit design"
        className="absolute translate-y-[100px] max-[1500px]:invisible"
      />

      <Section className="bg-ipc-blue h-[1000px] flex justify-center items-center">
        <div>
          <div className="text-ipc-white text-6xl font-bold text-center mb-8">
            Have Questions?
          </div>
          <div className="text-ipc-white text-3xl font-light text-center mb-[50px]">
            Send us an email or DM us on our socials!
          </div>
          <div className="flex justify-center mb-[40px]">
            <Link
              href="#"
              className="flex items-center px-7 py-4 bg-ipc-white text-ipc-gray gap-3 rounded-full hover:bg-gray-200 duration-200 w-fit"
            >
              <EnvelopeClosedIcon className="w-7 h-7" />
              <div className="text-2xl">{IPC_EMAIL}</div>
            </Link>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <ContactIcon Icon={DiscordLogoIcon} href={DISCORD_INVITE_LINK} className="w-10 h-10" />
            <ContactIcon Icon={InstagramLogoIcon} href={INSTAGRAM_LINK} className="w-10 h-10" />
            <ContactIcon Icon={EnvelopeClosedIcon} href={IPC_EMAIL} className="w-10 h-10" />
            <ContactIcon Icon={GitHubLogoIcon} href={GITHUB_LINK} className="w-10 h-10" />
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
