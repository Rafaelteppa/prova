export default function Banner(){
    return(
        <div className="mt-6 gap-2 grid grid-cols-2 ">  
      <div className="">
                 <a href="">
                 <img src="/img/homem.png" alt="" />
                 </a>
                
        <div className="mt-3 p-8 text-orange bg-orange">
        <h2 className="text-sm">BEST FITNESS IN THE TOWN</h2>
        <h3 className="text-base">MAKE YOUR</h3>
        <h4 className="text-lg font-bold">BODY</h4>
        <h5 className="text-lg font-bold">SHAPE</h5>

        <div className="md:flex justify-between lg:mt-8 text-center">
        <p>
        Unleash your potential and embark on a journey towards astronger, fitter, and more confident you. Sign up for 'Make
        Your Body Shape' now and witness the incredible transformation your body is capable of!
        </p>
         
         
        <button
        className="bg-orange-700 rounded-md  text-xs text-center p-2 mt-3">
        Get Started
       
        </button>
        


         <div>
        <h2 className="text-sm">EXPLORE OUR PROGRAM</h2>

        </div>


        </div>
        </div>
        </div>
        </div>
    )
}