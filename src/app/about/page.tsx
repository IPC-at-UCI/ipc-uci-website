import Link from "next/link";
import Image from "next/image";

import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

import rightCircuit from "@/app/_images/right-circuit.png";
import leftCircuit from "@/app/_images/left-circuit.png";

import img5 from "@/app/_images/img5.jpg";

export default function Page() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />

      <Image src={rightCircuit} alt="Circuit design" className="absolute right-0 translate-y-[100px] max-[1500px]:invisible" />
      <Image src={leftCircuit} alt="Circuit design" className="absolute translate-y-[820px] max-[1500px]:invisible"/>

      <Section className="bg-ipc-blue h-[1000px] flex justify-center items-center">
        <div className="mb-[80px]">
          <div className="text-ipc-white font-bold text-6xl mb-8">
            What is <span className="text-ipc-yellow">IPC</span>?
          </div>
          <div className="flex gap-12">
            <div className="font-light text-2xl text-ipc-white w-[600px] leading-snug">
              The <span className="text-ipc-yellow">Institute of Printed Circuits</span> is a non-profit organization who
              connects current UCI students to distinguished company mentors
              from Bose, Panasonic, and many startup companies. Join us for
              monthly events, networking opportunities, and more!
            </div>
            <div>
              <Image src={img5} alt="IPC meeting" className="w-[500px]" />
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
