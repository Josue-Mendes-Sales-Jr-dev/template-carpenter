import Image from "next/image"
import Img01 from "../../../public/img/foto02.jpg"
import "tailwindcss/tailwind.css"


export const Footer=()=>{
    return(
        <>
          <div className=" text-white bg-amber-800 flex-col flex min-h-[25rem] items-center justify-center w-screen">
            <div className="flex flex-wrap text-[1.2rem] w-[80%] min-h-[21rem] items-center justify-around">
                <div>
                       <h2 className="text-[1.8rem] pb-[1rem]">
                      Nossa Empresa
                       </h2>
                    <ul>
                        <li>Serviços</li>
                        <li>Sobre nós</li>
                        <li>Produtos</li>
                        <li>Depoimentos</li>
                    </ul>
                </div>
                <div>
                       <h2 className="text-[1.8rem] pb-[1rem]">
                       Serviços
                       </h2>
                <ul>
                        <li>Projetos</li>
                        <li>Corte de madeira</li>
                        <li>Montagem</li>
                        <li>Consultor grátis</li>
                    </ul>
                </div>
                <div>
                  <button className="mt-[1.5rem]  text-[1.2rem] rounded-full px-[4rem] sm:px-[3.5rem] xl:px-[5rem] py-[.8rem] bg-amber-500 hover:bg-amber-600 text-white">
                    Solicitar um orçamento
                   </button>
                </div>
            </div>
            <div className="bg-amber-900 h-[4rem] w-screen flex items-center justify-center">
                <p>copyright &copy; 2023 - Todos os direitos reservados </p>
            </div>
          </div>
        </>
    )
}