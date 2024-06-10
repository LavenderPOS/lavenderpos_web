import Link from "next/link";

export default function Footer() {
    return (
        <div className="Wrapper Wrapper_Footer flex flex-col justify-between space-y-10 bg-purple-300 p-10 rounded-lg lg:flex-row lg:space-y-0">
            <div className="LeftSide">
                <h1 className="text-2xl font-extrabold tracking-widest mb-5">
                    Lavender Software Company
                </h1>
                <h3 className="text-lg font-semibold">
                    Contact Information
                </h3>
                <ul>
                    <li>
                        Email: lavenderpos.lavender@gmail.com
                    </li>
                    <li>
                        Phone: +95 976 032 4118
                    </li>
                </ul>
            </div>
            <div className="MiddleSide">
                <h3 className="text-xl font-semibold">
                    Available Pages
                </h3>
                <ul>
                    <li>
                        <Link href="/#software">Software</Link>
                    </li>
                    <li>
                        <Link href="/#pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link href="/#report">Report</Link>
                    </li>
                </ul>
            </div>
            <div className="RightSide">
                <h3 className="text-xl font-semibold">
                    Support the Developers
                </h3>
                <ul>
                    <li>
                        Buy Me A Coffee
                    </li>
                    <li>
                        Pateron
                    </li>

                </ul>
            </div>

        </div>
    )
}