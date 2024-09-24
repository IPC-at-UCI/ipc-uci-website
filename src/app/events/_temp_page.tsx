import Link from "next/link"

export default function Page() {
    return (
        <div className="flex flex-col gap-[30px] justify-center items-center h-screen">
            <h1 className="font-bold text-3xl text-ipc-yellow">This page is currently under construction. Check back soon for event updates!</h1>
            <Link href="/" className="underline text-ipc-white hover:text-gray-300 duration-200 text-xl">Return home</Link>
        </div>
    )
}