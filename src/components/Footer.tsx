import { Link } from "react-router"

export default function Footer() {
    return(
        <>
            <footer className="">
                <ul className="w-fit relative flex gap-5 mx-20">
                    <li className="border-e pe-5">
                        <Link
                          to='/privacy'>PRIVACY</Link>
                    </li>
                    <li>
                        <Link
                          to='/cookie'>COOKIES</Link>
                    </li>
                </ul>
            </footer>
        </>
    )
}