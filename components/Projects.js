export default function Projects() {
    const images = [
        {
            title: "SIFFREDI BOT",
            url: "https://github.com/R4ULtv/siffredi-bot",
            src: image("siffredi-bot")
        },
        {
            title: "CHAT ROOM",
            url: "https://github.com/R4ULtv/socket-live-chat",
            src: image("chat-room-socket")
        },
        {
            title: "SECURITY CAMERA",
            url: "https://github.com/R4ULtv/security-camera-OpenCV",
            src: image("security-camera-opencv")
        },
        {
            title: "EASY PROJECTS",
            url: "https://github.com/R4ULtv/easy-project",
            src: image("easy-projects")
        },
        {
            title: "PYTHON BASICS",
            url: "https://github.com/R4ULtv/python-basics",
            src: image("python-basics")
        },
    ]
    
    function image(type) {
        var random = Math.floor(Math.random() * 5) + 1
        return "/assets/img/projects/" + type + "/" + random + ".png"
    }

    return (
        <div className="p-10" id="projects">
            <h2 className="text-center text-3xl font-bold text-blue-600">Projects</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-8 items-center mx-auto max-w-7xl gap-x-8 gap-y-8 justify-items-center">
                {images.map((item) => (
                    <a key={item.url} href={item.url} target="_blank" className="relative text-center">
                        <img src={item.src} className="h-80 rounded-lg hover:scale-110 hover:blur-sm duration-150"/>
                        <p className="hidden top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white font-bold text-5xl w-64">{item.title}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}