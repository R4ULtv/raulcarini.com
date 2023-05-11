import Link from 'next/link'

export default function Footer() {
    return(
        <footer className="p-10 text-center">
            <div className="container mx-auto text-center">
                <div className="flex justify-center mb-4 flex-row">
                    <div className="md:basis-1/12">
                        <Link href="/" className="p-3 text-base font-medium text-gray-900 hover:bg-blue-50 rounded-lg">Home</Link>
                    </div>
                    <div className="md:basis-1/12">
                        <Link href="/privacy" className="p-3 text-base font-medium text-gray-900 hover:bg-blue-50 rounded-lg">Privacy</Link>
                    </div>
                    <div className="md:basis-1/12">
                        <Link href="/terms" className="p-3 text-base font-medium text-gray-900 hover:bg-blue-50 rounded-lg">Terms</Link>
                    </div>
                </div>
                <p className="text-sm text-gray-900">Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
            </div>
        </footer>
    )
}