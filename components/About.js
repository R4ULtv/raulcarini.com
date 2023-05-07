import Image from "next/image"

export default function About() {
    return (
        <div className="p-10 animate-fadeIn" id="about">
            <h2 className="text-center text-3xl font-bold text-blue-600 underline underline-offset-8">About</h2>
            <div className="grid md:grid-cols-2 md:items-center md:text-start max-w-5xl font-semibold text-center mx-auto gap-x-8 my-8 justify-items-center">
                <Image src="/assets/img/about.jpg" height="400" width="300" quality="100" className="rounded-lg hover:scale-110 duration-150" alt="Thats Me ;)"/>
                <div className="">
                    <h3 className="text-3xl my-6 text-center">Hi, I'm Raul Carini</h3>
                    <p className="text-lg text-justify">I am a computer science student. I have always been interested in technology from a young age and decided to pursue this career because it allows me to develop my creativity. <br></br>I enjoy working on projects that utilize the latest technologies and like experimenting with new ideas. <br></br>I hope to continue to progress in my academic and professional path and become an expert professional in my field of interest.</p>
                </div>
            </div>  
        </div>
    )
}