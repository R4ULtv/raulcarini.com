import Image from "next/image"

export default function Projects(data) {
    return (
        <div className="pt-20 p-10 animate-fadeIn" id="projects">
            <p className="text-center text-3xl font-bold text-blue-600 underline underline-offset-8">Projects</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-8 items-center mx-auto max-w-7xl gap-x-8 gap-y-8 justify-items-center">
                {data.images.map((item) => (
                    <a key={item.url} href={item.url} target="_blank" className="relative text-center group flex items-center justify-center">
                        <Image src={item.src} width="320" height="320" quality="100" className="h-auto w-80 rounded-lg md:group-hover:scale-110 md:group-hover:blur-sm duration-150 blur-sm md:blur-none" alt={item.title} loading="lazy"/>
                        <div className="md:group-hover:opacity-100 md:group-hover:scale-90 text-5xl duration-150 md:opacity-0 opacity-100 absolute m-0 text-white font-bold ">{item.title}</div>
                    </a>
                ))}
            </div>
        </div>
    )
}