import { Link } from "react-router"

type NavBarProps = {
    variant: "landing" | "main";
}

export default function NavBar({ variant }: NavBarProps) {
    return (
        <>
                {/* Making the navbar with a variant for both landing page and main layout, creating two different styles. */}
                <nav className={`navbar navbar--${variant}`}>
                    <div className="portfolio text-center text-6xl text-white">
                        MATTIA SPASIANO
                    </div>
                    <ul className="flex gap-8 text-2xl justify-center text-white">
                        <li>
                            <Link
                                to='/projects'>PROJECTS</Link>
                        </li>
                        <li>
                            <Link
                                to='/contacts'>CONTACTS</Link>
                        </li>
                        <li>
                            <Link
                                to='/about'>ABOUT</Link>
                        </li>
                    </ul>
                </nav>
        </>
    )
}