import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import HomeEvent from "@/components/HomeEvent";
import Footer from "@/components/Footer";

import Image from "next/image";

import Link from "next/link";

import bg1 from "@/app/_images/bg1.jpg";
import logo from "@/app/_images/logo.png";
import circuit from "@/app/_images/circuit.png";
import triangle from "@/app/_images/triangle.png";
import halfGear from "@/app/_images/half-gear.png";
import gear from "@/app/_images/gear.png";
import beams from "@/app/_images/beams.png";
import img1 from "@/app/_images/img1.jpg";
import img2 from "@/app/_images/img2.jpg";
import img3 from "@/app/_images/img3.jpg";
import img4 from "@/app/_images/img4.jpg";

import { DiscordLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />

      <Image
        src={circuit}
        alt="Circuit designs"
        className="absolute z-50 right-2/4 translate-x-[-30rem] translate-y-[100px] max-[1500px]:invisible"
        draggable={false}
      />
      <Image
        src={triangle}
        alt="Triangle design"
        className="absolute z-50 right-0 h-[400px] w-[200px] translate-y-[750px] max-[1500px]:invisible"
        draggable={false}
      />
      <Image
        src={halfGear}
        alt="Triangle design"
        className="absolute z-50 right-0 h-[400px] w-[200px] translate-y-[1650px] max-[1500px]:invisible"
        draggable={false}
      />
      <Image
        src={beams}
        alt="Beams design"
        className="absolute z-50 right-0 h-[800px] w-[300px] translate-y-[2700px] max-[1500px]:invisible max-[1700px]:h-[640px] max-[1700px]:w-[240px] max-[1700px]:translate-y-[2760px]"
        draggable={false}
      />

      <Section className="relative bg-ipc-gray">
        <div className="absolute z-50 flex w-full h-full justify-center items-center gap-[50px]">
          <div>
            <Image
              src={logo}
              alt="IPC logo"
              className="w-[350px] h-[350px] max-[1200px]:w-0"
            />
          </div>
          <div>
            <div className="text-4xl text-ipc-white">Welcome to...</div>
            <div className="text-9xl text-ipc-yellow font-bold">IPC at UCI</div>
            <div className="flex gap-4">
              <button className="mt-4 px-6 py-3 bg-ipc-white flex text-ipc-gray items-center gap-2 rounded-full hover:bg-gray-300 duration-200">
                <DiscordLogoIcon className="w-6 h-6" />
                <Link href="#" className=" text-xl rounded-[50px]">
                  Get Involved!
                </Link>
              </button>
              <button className="mt-4 px-6 py-3 bg-ipc-gray flex text-ipc-white items-center gap-2 rounded-full hover:bg-gray-500 duration-200">
                <Link href="#" className=" text-xl rounded-[50px]">
                  Linktree
                </Link>
              </button>
            </div>
          </div>
        </div>

        <Image
          src={bg1}
          alt="IPC Club Meeting"
          className="object-cover h-[950px] brightness-50 saturate-50"
        />
      </Section>

      <Section className="h-[900px] bg-ipc-blue drop-shadow flex items-center justify-center">
        <div className="max-w-[1000px]">
          <div className="text-ipc-white text-6xl font-bold leading-snug mb-8">
            Accelerate your growth through <br />
            <span className="text-ipc-yellow">hands-on learning</span> and{" "}
            <span className="text-ipc-yellow">mentorship</span>.
          </div>
          <div className="flex gap-6">
            <div>
              <div className="text-ipc-white [&>span]:text-ipc-yellow text-2xl leading-normal font-light mb-[40px]">
                Join us for monthly events including{" "}
                <span>guided electronics workshops</span> and mentorship from
                employees from <span>Bose</span>, <span>Panasonic</span>, and
                many more.
              </div>
              <Link
                href="/about"
                className="text-ipc-gray bg-ipc-white hover:bg-gray-300 duration-200 rounded-full py-3 px-6 text-xl"
              >
                Learn more
              </Link>
            </div>

            <Image src={img1} alt="IPC meeting" className="w-[400px]" />
          </div>
        </div>
      </Section>

      <Section className="h-[1200px] bg-ipc-white flex items-center justify-center">
        <div className="max-w-[1000px]">
          <div className="text-ipc-black text-6xl font-bold leading-snug mb-[60px]">
            Expand your <span className="text-ipc-yellow">network</span> through
            our monthly events.
          </div>
          <div className="flex justify-between mb-[60px]">
            <HomeEvent
              img={img4}
              action="#"
              header="AM Radio Workshop"
              desc="Learn how to build your own AM radio through hands-on learning."
            />
            <HomeEvent
              img={img3}
              action="#"
              header="IPC APEX Expo"
              desc="Connect with current professionals and view the latest advancements in hardware."
            />
            <HomeEvent
              img={img2}
              action="#"
              header="Resume Workshop"
              desc="Develop your professional career by crafting your resume."
            />
          </div>
          <Link
            href="/events"
            className="rounded-full text-xl text-ipc-white bg-ipc-black py-3 px-6 hover:text-ipc-yellow duration-200"
          >
            See all events
          </Link>
        </div>
      </Section>

      <Section className="h-[1000px] bg-ipc-black flex justify-center items-center">
        <div>
          <div className="relative">
            <Image src={gear} alt="Gear display" className="absolute -left-16 -top-36 " />
            <Image src={gear} alt="Gear display" className="absolute -left-44 -top-12 w-[85px] h-[85px]" />
            <Image src={gear} alt="Gear display" className="absolute -right-24 -bottom-12 w-[80px] h-[80px]" />
            <div className="text-ipc-white text-7xl text-center font-bold leading-snug mb-[60px]">
              Don't miss out, get
              <br />
              involved <span className="text-ipc-yellow">today</span>!
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              href="#"
              className="text-[1.4rem] text-lg text-ipc-black bg-ipc-yellow rounded-full py-4 px-7 flex items-center gap-2 justify-center hover:bg-yellow-500"
            >
              <DiscordLogoIcon className="w-6 h-6" />
              Join our community
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
