export default function Banner(){
    return(
        <div className="mt-6 mx-5 md:grid grid-cols-2">  
            <div>
                 <img src="/img/homem.png" alt=""/>
            </div>
            <div className="mt-10">
                <div className="font-bold text-orange-400 ">
                    <h2>BEST FITNESS IN THE TOWN</h2>
                </div>
                <div className="mt-2 font-bold text-7xl">
                    <h3>MAKE YOUR BODY SHAPE</h3>
                </div>
                <div className="mt-2">
                    <h5>
                        Unleash your potential and embark on a
                        journey towards astronger, fitter, and more
                        confident you. Sign up for Make Your Body
                        Shape now and witness the incredible
                        transformation your body is capable of!
                    </h5>
                </div>
                <button className="mt-3 bg-orange-400 rounded-md text-xs text-center p-2">Get Started</button>
            </div>
        </div>
    )
}