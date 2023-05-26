import Image from "next/image"

export default function Skills(data) {
    return (
        <div className="pt-20 p-10 animate-fadeIn" id="skills">
            <h2 className="text-center text-3xl font-bold text-blue-600 underline underline-offset-8">Skills</h2>
            <div className="grid md:grid-cols-2 md:items-center md:text-start max-w-5xl font-semibold text-center mx-auto gap-x-8 gap-y-8 my-8 justify-items-center">
                <div>
                    <h3 className="text-3xl my-6 text-center">Profesional Skills</h3>
                    <p className="text-lg mb-8 text-justify">The main languages I have dedicated myself to learning are <a href="https://www.python.org/" className="text-blue-600 font-semibold">python</a>, <a href="https://www.javascript.com/" className="text-blue-600 font-semibold">javascript</a>, <a href="https://www.java.com/" className="text-blue-600 font-semibold">java</a>. While for the web I know <a href="https://en.wikipedia.org/wiki/HTML" className="text-blue-600 font-semibold">html</a>, <a href="https://en.wikipedia.org/wiki/CSS" className="text-blue-600 font-semibold">css</a>, <a href="https://www.php.net/" className="text-blue-600 font-semibold">php</a> and <a href="https://www.mysql.com/"  className="text-blue-600 font-semibold">mysql</a>.</p>
                    {data.skills.map((item) => (
                        <div key={item.language} className="p-2 my-4 bg-blue-50 rounded-lg duration-150 hover:scale-110 shadow-md">
                            <div className="flex justify-between">
                                <span className="text-base font-bold">{item.language}</span>
                                <span className="text-base font-medium">{item.percentage}</span>
                            </div>
                            <div className={item.color + " h-1 rounded-lg"} style={{width: item.percentage}}></div>
                        </div>
                        
                    ))}
                </div>
                <Image src={data.image} height="384" width="384" quality="100" alt="raul carini skills" className="w-96 h-auto rounded-lg hover:scale-110 duration-150"/>
            </div>  
        </div>
    )
}