import React from "react"
import Link from "next/link"
import "tailwindcss/tailwind.css"

export const Navbar=()=>{
    return(
        <>
           <div className="hidden sm:flex items-center justify-center w-screen h-[80px]">
            <nav className="flex items-center justify-center h-[100%] text-[1.5rem] w-[100%]" >
                <Link className="w-[10%]" href="/">Logo</Link>
                <ul className="flex w-[60%] items-center justify-around">
                    <li><Link href="/">Serviço</Link></li>
                    <li><Link href="/">Orçamento</Link></li>
                    <li><Link href="/">Projetos</Link></li>
                    <li><Link href="/">Contatos</Link></li>
                </ul>
            </nav>
           </div>
        </>
    )
}