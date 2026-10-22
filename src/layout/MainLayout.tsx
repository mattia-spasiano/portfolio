import { Outlet } from "react-router"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function MainLayout() {
    return (
        <>
            <div className="hero">
                <header className="main-header">
                    <NavBar
                        variant="main" />
                </header>

                <main className="main-content relative h-[90dvh]">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}