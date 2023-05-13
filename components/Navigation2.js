import Link from "next/link"

export default function Navigation() {
    return(
        <div className="fixed z-10 w-full backdrop-filter backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-center border-b-2 border-blue-100 py-4 md:space-x-10">
                    <Link href="/">
                        <img
                            className="h-10 w-auto sm:h-10"
                            src="/assets/svg/logo.svg"
                            alt=""
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}