export default function Program(){
    return(
        <div className="mt-10">
            <div className="text-center text-5xl">
                <h2>EXPLORE OUR PROGRAM</h2>
            </div>

            <div className="mt-6 gap-6 grid grid-cols-1 md:grid-cols-4">
                <div className=" bg-gray-700 gap-4 grid rounded-md">
                    <div className="mt-4 mx-4">
                        <img src="/img/luva.svg" alt="" />
                        <h1 className="mt-4 font-bold">Strength</h1>
                        <p className="mt-4">
                            Embrace the essence of strength as we
                            delve into its various dimensions
                            physical, mental, and emotional.
                        </p>
                        <div className="mt-4">
                            <a href="#">Join Now</a>
                        </div>
                    </div>
                </div>

                <div className=" bg-gray-700 gap-4 grid rounded-md">
                    <div className="mt-4 mx-4">
                        <img src="/img/coraçao.svg" alt="" />
                        <h1 className="mt-4 font-bold">Physical Fitness</h1>
                        <p className="mt-4">
                            It encompasses a range of activities that improve health
                            strength, flexibility, and overall well-being.
                        </p>
                        <div className="mt-4">
                            <a href="#">Join Now</a>
                        </div>
                    </div>
                </div>

                <div className=" bg-gray-700 gap-4 grid rounded-md">
                    <div className="mt-4 mx-4">
                        <img src="/img/caminhada.svg" alt="" />
                        <h1 className="mt-4 font-bold">Fat Lose</h1>
                        <p className="mt-4">
                            Through a combination of workout routines and
                            expert guidance, we ll empower you to reach
                            your goals.
                        </p>
                        <div className="mt-4">
                            <a href="#">Join Now</a>
                        </div>
                    </div>
                </div>

                <div className=" bg-gray-700 gap-4 grid rounded-md">
                    <div className="mt-4 mx-4">
                        <img src="/img/cesta.svg" alt="" />
                        <h1 className="mt-4 font-bold">Weight Gain</h1>
                        <p className="mt-4">
                            Designed for individuals, our program offers an 
                            effective approach to gaining weight in a sustainable manner.
                        </p>
                        <div className="mt-4">
                            <a href="#">Join Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}