import "tailwindcss/tailwind.css"
import { CardServices } from "./cardSevices"
import { Icons1 } from "../icons"

export const Services=()=>{
    return(
        <>
         <div className="bg-white flex py-[5rem] flex-col items-center justify-center w-screen min-h-[100vh]">
           
           <div className="flex flex-col gap-3 items-center justify-center">
                 <p className="text-[1.5rem] ">Carpintaria Desde 1991</p>
                 <h2 className="bg-brown-500 text-[3rem] text-center text-amber-900">Apaixonados por Carpintaria</h2>
                 <p className="text-[1.3rem] sm:w-[55%] w-[80%] text-center">vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna.</p>
            </div>
           <div className=" flex flex-wrap items-center justify-center">
                <CardServices title="Desing" text="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."/>
                <CardServices title="Desing" text="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."/>
                <CardServices title="Desing" text="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."/>
                <CardServices title="Desing" text="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."/>
                <CardServices title="Desing" text="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."/>
                <CardServices title="Desing" text="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."/>
           </div>
         </div>
        </>
    )
}