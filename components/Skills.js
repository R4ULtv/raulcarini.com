export default function Skills() {

    function image() {
        var random = Math.floor(Math.random() * 5) + 1
        return "/assets/img/skills/" + random + ".png"
    }

    return (
        <div className="p-10" id="skills">
            <h2 className="text-center text-3xl font-bold text-blue-600">Skills</h2>
            <div className="grid md:grid-cols-2 md:items-center md:text-start max-w-5xl font-semibold text-center mx-auto gap-x-8 gap-y-8 my-8 justify-items-center">
                <div>
                    <h3 className="text-3xl my-6">Profesional Skills</h3>
                    <p className="text-lg">The main languages I have dedicated myself to learning are <a href="https://www.python.org/" className="text-blue-600 font-semibold">python</a>, <a href="https://www.javascript.com/" className="text-blue-600 font-semibold">javascript</a>, <a href="https://www.java.com/" className="text-blue-600 font-semibold">java</a>. While for the web I know <a href="https://en.wikipedia.org/wiki/HTML" className="text-blue-600 font-semibold">html</a>, <a href="https://en.wikipedia.org/wiki/CSS" className="text-blue-600 font-semibold">css</a>, <a href="https://www.php.net/" className="text-blue-600 font-semibold">php</a> and <a href="https://www.mysql.com/"  className="text-blue-600 font-semibold">mysql</a>.</p>
                </div>
                <img src={image()} className="h-96 rounded-lg hover:scale-110 duration-150"/>
            </div>  
        </div>
    )
}