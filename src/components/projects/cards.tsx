import "tailwindcss/tailwind.css"
import Image from "next/image"

interface CardProps{
    imag: any
    title:string
    text: string
}
export const Cards=(props:CardProps)=>{
    return(
        <>
          <div className="flex mt-[3rem] sm:mt-0 flex-col gap-10 w-[22rem] h-[42rem] items-center justify-center ">
             <div>
             <Image src={props.imag} className="w-[17rem]  rounded h-[24rem]" alt="img"/>
             </div>
             <div className=" flex flex-col gap-5 w-[78%] h-[18rem] items-center justify-center">
                <h2 className="text-[2rem]">
                    {props.title}
                </h2>
                <p className="text-[1.2rem] w-[90%] text-center">
                    {props.text}
                </p>
                <button className="bg-amber-600 hover:bg-amber-500 rounded-full mt-3 text-[1.2rem] px-[4rem] text-white py-[.8rem]">
                    Saiba mais
               </button>
             </div>
          </div>
        </>
    )
}