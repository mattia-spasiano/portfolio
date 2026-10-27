interface ButtonCompProps {
    text: string;
    variant: "primary" | "secondary"
}

export default function Button( {text, variant}: ButtonCompProps ) {
    return(
        <>
            <button className={`button--${variant} text-white text-lg inria-serif-700`}>
                {text}
            </button>
        </>
    )
}