import Image from "next/image"
import Img01 from "../../../public/img/foto02.jpg"
import "tailwindcss/tailwind.css"
import { ContactCard } from "./contactCard"
import { TextCard } from "./textCard"

export const Contacts=()=>{
    return(
        <>
          <div className=" bg-slate-50 flex flex-col items-center justify-center w-screen min-h-[100vh]">
            <div className="relative w-screen h-[40vh] flex items-center justify-center">
              <TextCard className="absolute z-20 flex flex-col sm:flex-row lg:flex-col text-white items-center justify-center"/>
              <div className="absolute z-10 opacity-50 bg-black w-[100%] h-[100%]"></div>
            <Image src={Img01} className="absolute w-[100%] h-[100%] object-cover" alt="img"/>
            </div>
            <div className="w-screen h-[80vh] flex items-center justify-center">
            <ContactCard/>
            </div>
          </div>
        </>
    )
}