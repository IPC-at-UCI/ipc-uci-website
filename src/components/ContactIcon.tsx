export default function ContactIcon({
  Icon,
  href,
  className,
}: {
  Icon: any;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="py-2 px-2 hover:bg-ipc-black rounded-xl ease-in-out duration-200"
    >
      <Icon className={`text-ipc-white ${className}`} />
    </a>
  );
}
