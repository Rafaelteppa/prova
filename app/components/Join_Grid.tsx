

export default function Join_Grid(){
    return(
        <div className="bg-slate-800 grid grid-cols-1 gap-4 rounded-md m-15 mx-4 md:grid-cols-3 justify-items-center">
            <div className="grid grid-cols-2 justify-items-center">
                
                <div className="grid grid-cols-1 items-center place-items-end">
                    <img className="ml-8" src="/img/grid1.png" alt="" />
                </div>
                <div className="grid grid-cols-1">
                     <h1 className="font-bold mt-4">Personal Trainer</h1>
                    <h4 className="mt-4">
                        Unlock your potential with
                        our expert Personal Trainers.
                    </h4>   
                </div>
            </div>

            <div className="grid grid-cols-2 justify-items-center content-between">
                <div className="grid grid-cols-1 items-center">
                    <img className="ml-8" src="/img/grid2.png" alt="" />
                </div>
                <div>
                     <h1 className="font-bold mt-4">Practice Sessions</h1>
                    <h4 className="mt-4">
                        Elevate your fitness with
                        practice sessions.
                    </h4>   
                </div>
            </div>

            <div className="mb-8 grid grid-cols-2 justify-items-center content-between">
                <div className="grid grid-cols-1 items-center">
                    <img className="ml-8" src="/img/grid3.png" alt="" />
                </div>
                <div>
                     <h1 className="font-bold mt-4 lg:mr-6">Good Management</h1>
                    <h4 className="mt-4">
                        Supportive management,
                        for your fitness success.
                    </h4>   
                </div>
            </div>
        </div>
    )

}