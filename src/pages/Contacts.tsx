import { useForm } from "react-hook-form"
import Button from "../components/Button"

export default function ContactPage() {

    type ContactForm = {
        name: string,
        email: string,
        message: string
    }

    const {
        register,
        handleSubmit,
        trigger,
        reset,
        formState: { errors }
    } = useForm<ContactForm>()

    const onSubmit = async (data: ContactForm) => {
        console.log(data);
        reset;
    }

    return (
        <>
            <div className="flex">
                <div className="flex w-[90%] place-content-between mx-auto mbe-5">
                    <div className="flex flex-col w-[50%] h-fit pbs-40 mx-auto">
                        <h1 className="text-6xl mt-10 text-white title">CONTACTS</h1>
                        <p className="inria-sans-400 text-lg mt-10 text-white w-[80%]">
                            If you are interested in working with me, you can
                            shoot me a message about your project and what is
                            the goal you are looking for.
                        </p>
                        <p className="inria-sans-400 text-lg mt-10 text-white mbe-20">
                            Or if you prefer, shoot me a message on my socials.
                        </p>
                        <div className="flex place-content-between w-[50%]">
                            <Button text="INSTAGRAM" variant="primary" />
                            <Button text="WHATSAPP" variant="primary" />
                        </div>
                    </div>
                    <div className="form flex flex-col w-[40%] h-fit pbs-40 mx-auto text-white">
                        <form
                            onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col mb-5">
                                <label
                                    htmlFor=""
                                    className="inria-serif-400 text-lg">Name</label>
                                <input
                                    className="bg-white text-black py-3 px-2"
                                    type="text"
                                    placeholder="Write your name..."
                                    {...register("name", { required: "The name is mandatory." })} />
                                {errors.name && <p>{errors.name.message}</p>}
                            </div>
                            <div className="flex flex-col mb-5">
                                <label
                                    htmlFor=""
                                    className="inria-serif-400 text-lg">E-Mail</label>
                                <input
                                    className="bg-white text-black py-3 px-2"
                                    type="text"
                                    placeholder="Write your email..."
                                    {...register("email", { required: "The email is mandatory" })} />
                                {errors.email && <p>{errors.email.message}</p>}
                            </div>
                            <div className="flex flex-col mb-5">
                                <label
                                    htmlFor=""
                                    className="inria-serif-400 text-lg">Write me a message</label>
                                <textarea
                                    className="bg-white text-black h-50 px-2 py-2"
                                    placeholder="Tell me what services you need!"
                                    {...register("message", { required: "This field is mandatory" })} />
                                {errors.message && <p>{errors.message.message}</p>}    
                            </div>
                            <Button text="Submit" variant="primary"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}