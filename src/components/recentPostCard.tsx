import { Heebo } from "next/font/google";
const heebo = Heebo({subsets:["latin"]})
export default function RecentPostCard(){
    return(
        <div className="w-[100%] h-[356px] md:w-[483px] bg-white flex items-center">
        <div className="md:w-[391px] w-[100%] h-[286px] p-4 m-auto flex flex-col items-start justify-between">
            <h2 className={`${heebo.className} font-bold text-[20px] md:text-[26px]`}> Making a design system from scratch</h2>
            <div className="w-[80%] md:w-[301,28px] h-[42.12px] flex items-start justify-between">
                <p className={`${heebo.className}text-[16px] md:text-[18px] font-normal text-black/70`}>12 Feb 2020</p>
                <p className={`${heebo.className}text-[16px] md:text-[18px] font-normal text-black/70`}>|</p>
                <p className={`${heebo.className}text-[16px] md:text-[18px] font-normal text-black/70`}>Dsign, Pattern</p>
            </div>
            <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia consequat duis enim velit mollit. Exercitation verniam consequat sunt nostrud amet
            </p>
        </div>
    </div>
    )
}