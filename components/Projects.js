import Image from "next/image"

export default function Projects(data) {
    return (
        <div className="p-10" id="projects">
            <h2 className="text-center text-3xl font-bold text-blue-600">Projects</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-8 items-center mx-auto max-w-7xl gap-x-8 gap-y-8 justify-items-center">
                {data.images.map((item) => (
                    <a key={item.url} href={item.url} target="_blank" className="relative text-center">
                        <Image src={item.src} width="320" height="320" quality="100" className="h-80 rounded-lg hover:scale-110 hover:blur-sm duration-150" alt={item.title}/>
                        <p className="hidden top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white font-bold text-5xl w-64">{item.title}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}