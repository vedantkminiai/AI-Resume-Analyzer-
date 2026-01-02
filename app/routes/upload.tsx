import Navbar from "~/components/Navbar";
import {type FormEvent, useState} from "react";

const Upload = () => {
    const [isProcessing, setIsProcessing] = useState(true);
    const [statusText, setStatusText] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {}

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar/>

            <section className={"main-section"}>
                <div className={"page-heading py-16"}>
                    <h1>Smart feedback for your dream job</h1>
                    {isProcessing ? (
                        <>
                            <h2>{statusText}</h2>
                            <img src={"https://assets-v2.lottiefiles.com/a/ced36716-1166-11ee-b705-c73b447c5bbc/EbURfnFs7V.gif"} className={"w-full"}/>
                        </>
                    ) : (
                        <h2>Drop your resume for an ATS score and improvement tips today</h2>
                    )}
                    {!isProcessing && (
                        <form id={"upload-form"} onSubmit={handleSubmit} className={"flex flex-col gap-4 mt-8"}>
                            <div className={"form-div"}>
                                <label htmlFor={"company-name"}>Company Name</label>
                                <input type={"text"} name={"company-name"} placeholder={"Company Name"}></input>
                            </div>
                            <div className={"form-div"}>
                                <label htmlFor={"job-title"}>Job Title</label>
                                <input type={"text"} name={"job-title"} placeholder={"Job Title"}></input>
                            </div>
                            <div className={"form-div"}>
                                <label htmlFor={"job-description"}>Job Description</label>
                                <textarea rows={5} name={"job-description"} placeholder={"Job Description"}></textarea>
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </main>
    )
}
export default Upload