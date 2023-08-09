import React from "react"
import Link from "next/link"
import "tailwindcss/tailwind.css"
import {GiHamburgerMenu} from "react-icons/gi"

export const Navbar=()=>{
    const handleClick=()=>{
        
    }
    return(
        <>
           <div className="flex items-center justify-center w-screen h-[80px]">
            
            <nav className="flex items-center justify-center h-[100%] text-[1.5rem] w-[100%]" >
                <div className="flex items-center justify-between w-[90%]">
                    
                    <Link className="w-[10%]" href="/">Logo</Link>
                    <button onClick={handleClick}>
                      <GiHamburgerMenu/>
                     </button>
                </div>
                <ul className="hidden md:flex w-[60%] items-center justify-around">
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