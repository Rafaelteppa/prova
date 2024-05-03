export default function Banner(){
    return(
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2">  
            <div className="bg-black">
                 <a href="">
                 <img src="/img/homem.png" alt="" />
                 </a>
            </div>
                
        <div className="grid justify-items-start mt-3 mx-4 bg-black md:grid-cols-1 ">
            <div>
                <h2 className="font-bold text-orange-400 ">BEST FITNESS IN THE TOWN</h2>
            </div>
            <div>
                <h3 className="text-base font-bold text-white">MAKE YOUR</h3>
            </div>
        
            <div>
                <h4 className="font-bold text-white ">BODY</h4>
            </div>
            <div>
                <h5 className="font-bold text-white">SHAPE</h5>
            </div>
            <div className="">
                <h5>
                    Unleash your potential and embark on a
                    journey towards astronger, fitter, and more
                    confident you. Sign up for Make Your Body
                    Shape now and witness the incredible
                    transformation your body is capable of!
                </h5>
            </div>
            <button className="bg-orange-700 rounded-md  text-xs text-center p-2 mt-3 margin-text">
                Get Started
            </button>
        </div>


        </div>
       
    )
}