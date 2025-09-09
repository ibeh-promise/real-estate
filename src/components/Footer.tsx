export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 w-[100vw] lg:ml-[-30px]">
            <div className="">
                <h1>Real Estate Ltd. </h1>
                <p>
                    Providing confortable housing since 1992
                </p>
            </div>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">How It Works</a>
                <a className="link link-hover">Agents</a>
                <a className="link link-hover">Testimonies</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    )
}