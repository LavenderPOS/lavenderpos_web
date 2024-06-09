import Link from "next/link"


export default function NavigationBar() {
    return (
        <div className="Wrapper Wrapper_Navigation flex justify-between items-center">
            <div className="LeftSide">
                <h1 className="text-2xl font-black italic md:text-3xl">
                    Lavender POS
                </h1>
            </div>
            <div className="RightSide">
                <ul className="text-md font-bold flex space-x-5 md:text-xl md:space-x-10">
                    <li>
                        <a href="/">Software</a>
                    </li>
                    <li>
                        Pricing
                    </li>
                    <li>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    )
}