import { Outlet } from "react-router"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function MainLayout() {
    return (
        <>
            <header className="main-header">
                <NavBar
                    variant="main" />
            </header>

            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}