import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
export default function HomeEvent({
  img,
  action,
  header,
  desc,
  className,
}: {
  img: StaticImport;
  action: string;
  header: string;
  desc: string;
  className?: string;
}) {
  return (
    <div className={"text-ipc-gray max-w-[300px] " + className}>
      <div className="w-[300px] h-[200px] overflow-hidden mb-6">
        <Image
          src={img}
          alt="Event photo"
          width={300}
          className="object-contain"
        />
      </div>
      <div className="mb-2 underline-offset-4">
        <Link
          href="#"
          className="font-bold text-xl hover:underline duration-300 ease-in-out "
        >
          {header}
        </Link>
      </div>
      <div className="text-lg leading-snug">{desc}</div>
    </div>
  );
}
