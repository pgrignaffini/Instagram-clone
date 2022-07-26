import Image from "next/image"
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"
import { useSession } from "next-auth/react"
import { signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"

function Header() {

    const { data: session } = useSession()
    const [open, setOpen] = useRecoilState(modalState)
    const router = useRouter()

    return (
        <div className="shadow-sm borderb-b bg-white sticky top-0 z-50 ">
            <div className="flex justify-between items-center bg-white max-w-6xl mx-5 lg:mx-auto">
                {/* Left */}
                <div onClick={() => { router.push("/") }} className="relative hidden md:inline-grid h-24 w-24 cursor-pointer">
                    <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain" />
                </div>
                <div onClick={() => { router.push("/") }} className="relative md:hidden h-10 w-10 flex-shrink-0 cursor-pointer">
                    <Image src="https://links.papareact.com/jjm" layout="fill" objectFit="contain" />
                </div>

                {/* Middle */}
                <div className="max-w-xs">
                    <div className="mt-1 relative p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500 " />
                        </div>
                        <input type="text" placeholder="Search"
                            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black" />

                    </div>
                </div>
                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon onClick={() => { router.push("/") }} className="navBtn" />
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />
                    {session ? (
                        <>
                            <div className="relative navBtn">
                                <PaperAirplaneIcon className="navBtn" />
                                <div
                                    className="absolute -top-2 -right-3 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
                            </div>
                            <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
                            <UserGroupIcon className="navBtn" />
                            <HeartIcon className="navBtn" />
                            <img
                                onClick={signOut}
                                src={session?.user?.image}
                                className="rounded-full h-10 w-10 cursor-pointer" />
                        </>)
                        :
                        (<button onClick={signIn}>Sign In</button>)}
                </div>

            </div>
        </div>
    )
}

export default Header