import Link from "next/link"


export default function NavigationBar() {
    return (
        <div className="Wrapper Wrapper_Navigation flex justify-between items-center">
            <div className="LeftSide">
                <h1 className="text-2xl font-black italic md:text-3xl">
                    <Link href={"/"}>Lavender POS</Link>
                </h1>
            </div>
            <div className="RightSide">
                <ul className="text-md font-bold flex space-x-5 md:text-xl md:space-x-10">
                    <li>
                        <Link href="/#software" className="NavA">Software</Link>
                    </li>
                    <li>
                        <Link href="/#pricing" className="NavA">Pricing</Link>
                    </li>
                    <li>
                        <Link href="/#report" className="NavA">Report</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}