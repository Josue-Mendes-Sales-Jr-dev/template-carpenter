import Image from "next/image"
import Img01 from "../../../public/img/foto02.jpg"
import "tailwindcss/tailwind.css"
export const Galery=()=>{
    return(
        <>
          <div className="flex py-[5rem] gap-[5rem] flex-col items-center justify-center w-screen min-h-[100vh]">
            <div className="flex flex-col gap-3 items-center justify-center">
                 <p className="text-[1.5rem] text-center">Melhores fotos</p>
                 <h2 className="bg-brown-500 text-[3rem] text-center">Nossa Empresa</h2>
                 <p className="text-[1.3rem] sm:w-[55%] w-[80%] text-center">vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna.</p>
            </div>
            <div className="flex gap-[4rem] flex-wrap items-center justify-center" >
            <Image src={Img01} className="w-[19rem] h-[20rem] rounded" alt="img"/>
            <Image src={Img01} className="w-[19rem] h-[20rem] rounded" alt="img"/>
            <Image src={Img01} className="w-[19rem] h-[20rem] rounded" alt="img"/>
            <Image src={Img01} className="w-[19rem] h-[20rem] rounded" alt="img"/>
            <Image src={Img01} className="w-[19rem] h-[20rem] rounded" alt="img"/>
            <Image src={Img01} className="w-[19rem] h-[20rem] rounded" alt="img"/>
            </div>
         </div>
        </>
    )
}