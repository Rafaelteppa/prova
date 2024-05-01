export default function Banner(){
    return(
        <div className="mt-6 gap-2 grid grid-cols-2 bg-black">  
      <div className="bg-black">
                 <a href="">
                 <img src="/img/homem.png" alt="" />
                 </a>
                
        <div className="mt-3 p-8 bg-black">
        <h2 className="text-sm font-bold text-white">BEST FITNESS IN THE TOWN</h2>
        <h3 className="text-base font-bold text-white">MAKE YOUR</h3>
        <h4 className="text-lg font-bold text-white ">BODY</h4>
        <h5 className="text-lg font-bold text-white">SHAPE</h5>

        <div className="md:flex justify-text  text-center text-white">
        <p>
        Unleash your potential and embark on a journey towards astronger, fitter, and more confident you. Sign up for Make
        Your Body Shape now and witness the incredible transformation your body is capable of!
        </p>
        </div>
          
        <button
        className="bg-orange-700 rounded-md  text-xs text-center p-2 mt-3 margin-text">
        Get Started

        </button>
        </div>

        </div>
        </div>
       
    )
}