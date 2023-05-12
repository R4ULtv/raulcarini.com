import Image from "next/image"

export default function Main() {
    return(
        <div className="grid grid-cols-1 max-w-5xl h-screen lg:m-auto p-10">
            <div className="md:self-end self-center">
                <h1 className="text-6xl font-bold mb-8 leading-relaxed">Hi,<br/>I'm <span className="text-blue-600">Raul Carini</span><br/>Developer</h1>
                <a className="bg-blue-600 py-3 px-10 rounded-lg text-white font-bold hover:shadow-lg" href="#contacts">Contact</a>
            </div>
            <div className="">
                
            </div>
        </div>
    )
}