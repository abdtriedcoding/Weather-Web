import { CloudIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const Header = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <CloudIcon className="w-10 h-10 text-white p-2 bg-sky-400 rounded-full" />
                        <span className="ml-3 text-xl">Weather Web</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold">
                        <Link href="https://github.com/Abdullah-SoftDev/Weather-Web" className="mr-5 hover:text-gray-900 cursor-pointer">Github</Link>
                        <Link href="https://www.linkedin.com/in/abdullah-siddiqui-b05552262/" className="mr-5 hover:text-gray-900 cursor-pointer">LinkedIn</Link>
                        <Link href="https://twitter.com/Sidddabdullah" className="mr-5 hover:text-gray-900 cursor-pointer">Twitter</Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header