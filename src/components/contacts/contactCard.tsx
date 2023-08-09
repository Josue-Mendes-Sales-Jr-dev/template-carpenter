import Image from "next/image"
import Img01 from "../../../public/img/foto02.jpg"
import "tailwindcss/tailwind.css"

export const ContactCard=()=>{
    return(
        <>
          <div className=" gap-3 flex flex-col items-center justify-center w-screen h-[100%]">
            <div className="w-screen h-[10rem] flex items-center justify-center">
            <Image src={Img01} className="w-[10rem] h-[10rem] sm:w-[7rem] sm:h-[7rem] lg:w-[10rem] lg:h-[10rem] rounded-[50rem]" alt="img"/>
            </div>
            <div className="sm:mb-10 md:mb-0 w-screen flex-col gap-5 sm:gap-3 md:gap-5 h-[30%] flex items-center justify-center">
               <h2 className="xl:h-[65%] lg:text-[2rem] text-[1.3rem] w-[80%] sm:w-[50%] text-center">
                Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua.
               </h2>
               <p>
               José Augusto - Web Designer
               </p>
            </div>
          </div>
        </>
    )
}