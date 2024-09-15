
export default function ContactIcon({ Icon, size }: { Icon: any; size: number }) {
    return (
      <button className="py-2 px-2 hover:bg-ipc-black rounded-xl ease-in-out duration-200">
        <Icon className={`text-ipc-white w-${size} h-${size}`} />
      </button>
    );
  }
  