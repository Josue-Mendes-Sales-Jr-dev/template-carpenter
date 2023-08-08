import Img01 from "../../../public/img/foto02.jpg"
import "tailwindcss/tailwind.css"
import { Cards } from "./cards"
export const Projects=()=>{
    return(
        <>
          <div className="flex py-[5rem] gap-[5rem] flex-col items-center justify-center w-screen min-h-[100vh]">
            <div className="flex flex-col gap-3 items-center justify-center">
                 <p className="text-[1.5rem]">Veja os nossos</p>
                 <h2 className="bg-brown-500 text-[3rem] text-center">Últimos Projetos</h2>
                 <p className="text-[1.3rem] sm:w-[55%] w-[80%] text-center">vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna.</p>
            </div>
            <div className="flex gap-[4rem] flex-wrap items-center justify-center" >
           <Cards title="Estante de Madeira" imag={Img01} text="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna."/>
           <Cards title="Estante de Madeira" imag={Img01} text="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna."/>
           <Cards title="Estante de Madeira" imag={Img01} text="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna."/>
                </div>
         </div>
        </>
    )
}