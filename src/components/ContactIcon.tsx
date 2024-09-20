export default function ContactIcon({
  Icon,
  className,
}: {
  Icon: any;
  className?: string;
}) {
  return (
    <button className="py-2 px-2 hover:bg-ipc-black rounded-xl ease-in-out duration-200">
      <Icon className={`text-ipc-white w-5 h-5 ${className}`} />
    </button>
  );
}
