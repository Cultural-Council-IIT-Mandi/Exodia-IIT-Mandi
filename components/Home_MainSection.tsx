import React from 'react'

const Home_MainSection = () => {
    return (
        <div className="flex items-center justify-center relative h-[100vh] w-full">
            <div className="relative flex h-screen w-full flex-col items-center justify-center gap-0">
                <p className="harry-text text-[3rem] max-lg:hidden
                            absolute top-[10rem] left-[17%]">
                    Welcome to
                </p>
                <p className="harry-text text-[15rem] max-2xl:text-[14rem] max-xl:text-[13rem] max-lg:text-[10rem] max-md:text-[8rem] max-sm:text-[5rem]">EXODIA '25</p>
                <p className="harry-text text-[3rem] max-2xl:text-[2rem] max-lg:hidden
                                absolute right-[5%] bottom-[37%]">
                    - Biggest Cultural Fest in the Himalayas
                </p>
                <p className="harry-text text-[4rem] max-2xl:text-[3rem] max-xl:text-[3rem] max-lg:text-[3rem] max-md:text-[2rem] max-sm:text-[2rem]">IIT MANDI</p>
            </div>
        </div>
    )
}

export default Home_MainSection