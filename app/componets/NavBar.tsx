import Link from "next/link"
import { FaYoutube, FaInstagram, FaGithub, FaFacebook} from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white">Ali Nameer</Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                    <Link className="text-white/90 hover:text-white" href="https://www.youtube.com">
                        <FaYoutube />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://www.facebook.com/abn.namer?mibextid=LQQJ4d">
                        <FaFacebook />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://github.com/Alinameer">
                        <FaGithub />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://www.instagram.com/alinamer0_0?igsh=c3JidTg4ZnhsN2Zu&utm_source=qr">
                        <FaInstagram />
                    </Link>
                </div>
            </div>
        </nav>
    )
}