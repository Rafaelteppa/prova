export default function Footer(){
    return(
        <div className="mt-4 grid grid-cols-2 mx-4">
            <div>
                <div>
                    <img src="/img/log.png" alt="" />
                </div>
                <div className="mt-4">
                    <h4>
                    Take the first step
                    towards a healthier,
                    stronger you with our
                    unbeatable pricing
                    plans. Let's sweat,
                    achieve, and conquer
                    together!
                    </h4>
                </div>
                <div className="flex mt-2">
                    <img className="mx-2" src="/img/Face.png" alt="" />
                    <img className="mx-2" src="/img/Insta.png" alt="" />
                    <img className="mx-2" src="/img/Twitter.png" alt="" />
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1">
                    <h1 className="mt-8 font-bold"> COMPANY</h1>
                    <a href="#"><h4 className="mt-4">Business</h4></a>
                    <a href="#"><h4 className="mt-4">Franchise</h4></a>
                    <a href="#"><h4 className="mt-4">Partnership</h4></a>
                    <a href="#"><h4 className="mt-4">Network</h4></a>
                </div>
            </div>
            <div>
            <div className="grid grid-cols-1">
                    <h1 className="mt-8 font-bold"> About Us</h1>
                    <a href="#"><h4 className="mt-4">Blogs</h4></a>
                    <a href="#"><h4 className="mt-4">Security</h4></a>
                    <a href="#"><h4 className="mt-4">Careers</h4></a>
                </div>
            </div>
            <div>
            <div className="grid grid-cols-1">
                    <h1 className="mt-8 font-bold"> Contact</h1>
                    <a href="#"><h4 className="mt-4">Contact Us</h4></a>
                    <a href="#"><h4 className="mt-4">Privacy Policy</h4></a>
                    <a href="#"><h4 className="mt-4 flex">Terms & Conditios</h4></a>
                    <a href="#"><h4 className="mt-4">BMI Calculator</h4></a>
                </div>
            </div>
        </div>
    )
}