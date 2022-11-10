export default function About() {
    return (
        <div className="p-10" id="about">
            <h2 className="text-center text-3xl font-bold text-blue-600">About</h2>
            <div className="grid md:grid-cols-2 md:items-center md:text-start max-w-5xl font-semibold text-center mx-auto gap-x-8 my-8 justify-items-center">
                <img src="/assets/img/about.jpg" className="rounded-lg hover:scale-110 duration-150" alt="Thats Me ;)"/>
                <div className="">
                    <h3 className="text-3xl my-6">I am Raul Carini</h3>
                    <p className="text-lg">Hi I'm Raul Carini, I'm 19 and I'm an Italian student and programmer, I study in a computer school and in my free time I am at the computer writing code a bit like losers ツ. I am constantly working on improving my <a href="https://siffredi.bot" className="text-blue-600 font-semibold">Siffredi-Bot</a> on <a href="https://github.com/Rapptz/discord.py" className="text-blue-600 font-semibold">discord.py</a>.</p>
                </div>
            </div>  
        </div>
    )
}