import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function LPLayout() {
    return (
        <>
            <div className="hero">
                <div className="h-[97dvh]">
                    <header className="landing-header w-full">
                        <NavBar variant="landing" />
                    </header>
                </div>
                <Footer />
            </div>
        </>
    )
}