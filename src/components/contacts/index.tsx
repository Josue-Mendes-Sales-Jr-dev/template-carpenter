import Image from "next/image"
import Img01 from "../../../public/img/foto02.jpg"
import "tailwindcss/tailwind.css"
import { ContactCard } from "./contactCard"

export const Contacts=()=>{
    return(
        <>
          <div className="my-[5rem] bg-slate-50 flex flex-col items-center justify-center w-screen h-[100vh]">
            <div className="w-screen h-[20rem] flex items-center justify-center">
            <Image src={Img01} className="w-[100%] h-[100%] object-cover" alt="img"/>
            </div>
            <div className="w-screen h-[70%] flex items-center justify-center">
            <ContactCard/>
            </div>
          </div>
        </>
    )
}