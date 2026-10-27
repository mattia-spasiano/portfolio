import Button from "../components/Button"

export default function AboutMe() {
    return(
        <>
        <div className="flex flex-col w-[90%] h-fit pbs-40 mx-auto">
            <h1 className="text-6xl mt-10 text-white title">ABOUT ME</h1>
            <p className="content w-[80%] text-lg mt-10 text-white">
                My name is Mattia Spasiano, an Italian web designer and developer currently situated in Galway. I have a deep passion for videogames, manga and anime, but I like reading as well. I love art in every form, from movies to cartoons and from music to drawings! If you want to know more about my past job experiences you can download my CV, or well... Contact me directly.
            </p>
            <div className="flex mx-auto mbs-20 gap-60">
                <Button variant="secondary" text="CONTACT ME"/>
                <Button variant="primary" text="DOWNLOAD CV"/>
            </div>
        </div>
        </>
    )
}