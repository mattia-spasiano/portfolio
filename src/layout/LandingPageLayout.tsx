import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function LPLayout() {
    return(
        <>
            <header className="landing-header w-full">
                <NavBar variant="landing"/>
            </header>
            <main>
            </main>
            <Footer/>
        </>
    )
}