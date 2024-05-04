export default function Header() {
    return (
        <div className="mt-10 text-center">
            <div>
                <h1 className="font-bold"> WHY JOIN US ?</h1>
            </div>
            <div className="mt-4">
                <h2>
                    Our diverse membership base creates a
                    friendly and supportive atmosphere, where
                    you can make friends and stay motivated  
                </h2>
            </div>

            <div>
                <img src="/img/mulher.png" alt="" />
                <div className="text-left bg-gray-700 rounded-lg md:grid grid-cols-3">
                    <div className="flex items-center gap-4">
                        <div>
                            <img src="/img/grid1.png" alt="" />
                        </div>
                        <div className="ml-4">
                            <h1 className="font-bold mt-4">Personal Trainer</h1>
                            <h4 className="mt-4">
                                Unlock your potential with
                                our expert Personal Trainers.
                            </h4>   
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <img src="/img/grid2.png" alt="" />
                        </div>
                        <div className="ml-4">
                            <h1 className="font-bold mt-4">Practice Sessions</h1>
                            <h4 className="mt-4">
                                Elevate your fitness with
                                practice sessions.
                            </h4>   
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <img src="/img/grid3.png" alt="" />
                        </div>
                        <div className="ml-4">
                            <h1 className="font-bold mt-4">Good Management</h1>
                            <h4 className="mt-4">
                                Supportive management,
                                for your fitness success.
                            </h4>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}