import "tailwindcss/tailwind.css"
import Image from "next/image"
import Img from "../../../public/img/foto01.jpg"
import { Galery } from "./galery"

export const Orcamento=()=>{
    return(
        <>
          <div className="bg-amber-700 text-white py-[5rem] flex flex-wrap items-center justify-center w-screen lg:h-[120vh]">
             <div className=" mb-[5rem] hidden sm:flex w-[100%] lg:w-[45%] xl:w-[50%] h-[100%] items-center justify-center">
                 <Image src={Img} className="rounded lg:w-[70%] w-[65%] lg:h-[100%] h-[80vh] " alt="Image"/>
             </div>
            <div className=" gap-3 sm:w-[60%] lg:w-[40%] lx:w-[40%] flex flex-col items-center justify-center">
               <h1 className=" lg:mt-[-4rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] text-[3rem]  lg:w-[65%] w-[70%]">
               Em nossos Projetos a montagem é GRÁTIS
               </h1>
               <p className="lg:w-[65%] w-[70%]">
               Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               </p>
               <button className="mt-[1.5rem] hidden sm:block rounded-3xl px-[6rem] sm:px-[3.5rem] xl:px-[6rem] py-[1rem] bg-amber-500 hover:bg-amber-600 text-white">
                Solicitar um orçamento
               </button>
            </div>
            <div className=" sm:hidden mt-[5rem] flex w-[100%] lg:w-[45%] xl:w-[50%] h-[100%] items-center justify-center">
                 <Image src={Img} className="lg:w-[70%] rounded w-[75%] lg:h-[100%] h-[70vh] " alt="Image"/>
             </div>
             <button className="mt-[3rem] sm:hidden rounded-full px-[2.5rem] text-[1.2rem] sm:px-[3.5rem] xl:px-[6rem] py-[.8rem] bg-green-600 text-white">
                Solicitar um orçamento
               </button>
           </div>

        </>
    )
}