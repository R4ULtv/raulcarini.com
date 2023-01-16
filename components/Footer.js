import Link from 'next/link'

export default function Footer() {
    return(
        <footer className="p-10 text-center">
            <div className="container mx-auto text-center">
                <div className="flex justify-center mb-4 flex-row">
                    <div className="md:basis-1/12">
                        <Link href="/" className="p-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">Home</Link>
                    </div>
                    <div className="md:basis-1/12">
                        <Link href="/privacy" className="p-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">Privacy</Link>
                    </div>
                    <div className="md:basis-1/12">
                        <Link href="/terms" className="p-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md">Terms</Link>
                    </div>
                </div>
                <p className="text-sm text-gray-900">Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
            </div>
        </footer>
    )
}