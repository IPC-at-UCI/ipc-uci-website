import Link from "next/link"

export default function Page() {
    return (
        <div className="w-screen h-screen bg-ipc-blue flex flex-col items-center justify-center text-ipc-white text-2xl">
            <div className="font-bold text-6xl mb-8">This page is under construction!</div>
            <div className="mb-4">IPC is working hard behind the scenes to deliver this page. Check back for updates soon!</div>
            <Link href="/" className="font-bold text-ipc-yellow hover:underline underline-offset-4">Return home</Link>
        </div>
    )
}