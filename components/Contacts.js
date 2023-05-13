import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Contacts() {
    return(
        <div className="pt-20 p-10 animate-fadeIn " id="contacts">
            <h2 className="text-center text-3xl font-bold text-blue-600 underline underline-offset-8">Contacts</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto my-8">
                <a className="relative p-4 border rounded-xl flex flex-col items-center justify-center gap-4 border-blue-500 hover:scale-110 duration-150 shadow-2xl shadow-blue-500/50 bg-gradient-to-b from-blue-50 to-blue-100 h-60 w-auto" href="https://twitter.com/R4ULtv" target="_blank">
                    <span className="absolute w-px h-2/3 bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent translate-y-5" aria-hidden="true"></span>
                    <div className='relative border rounded-full p-2 bg-white border-blue-500'>
                        <FontAwesomeIcon icon={faTwitter} className='w-6'/>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className="font-medium text-xl">@R4ULtv</span>
                        <span className="mt-4 text-sm text-center">Twitter</span>
                    </div>
                </a>
                <a className="relative p-4 border rounded-xl flex flex-col items-center justify-center gap-4 border-blue-500 hover:scale-110 duration-150 shadow-2xl shadow-blue-500/50 bg-gradient-to-b from-blue-50 to-blue-100 h-60 w-auto" href="mailto:dev@raulcarini.com" target="_blank">
                    <span className="absolute w-px h-2/3 bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent translate-y-5" aria-hidden="true"></span>
                    <div className='relative border rounded-full p-2 bg-white border-blue-500'>
                        <FontAwesomeIcon icon={faEnvelope} className='w-6'/>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className="font-medium text-xl">dev@raulcarini.com</span>
                        <span className="mt-4 text-sm text-center">Email</span>
                    </div>  
                </a>
                <a className="relative p-4 border rounded-xl flex flex-col items-center justify-center gap-4 border-blue-500 hover:scale-110 duration-150 shadow-2xl shadow-blue-500/50 bg-gradient-to-b from-blue-50 to-blue-100 h-60 w-auto" href="https://github.com/R4ULtv" target="_blank">
                    <span className="absolute w-px h-2/3 bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent translate-y-5" aria-hidden="true"></span>
                    <div className='relative border rounded-full p-2 bg-white border-blue-500'>
                        <FontAwesomeIcon icon={faGithub} className='w-6'/>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className="font-medium text-xl">@R4ULtv</span>
                        <span className="mt-4 text-sm text-center">Github</span>
                    </div>
                    
                </a>
            </div>
        </div>
    )
}