import React from "react"
import Link from "next/link"
import "tailwindcss/tailwind.css"
import {GiHamburgerMenu} from "react-icons/gi"

export const Navbar=()=>{
    const handleClick=()=>{
        const menu = document.getElementById('menu')
         const menuBox = document.getElementById('menuBox')
         const btn = document.getElementById('btn')
         if(menu?.classList.contains('flex')){
            menu?.classList.add('hidden')
            btn?.classList.add('hidden')
            menuBox?.classList.remove('hidden')
         }
    }

    const handleBackMenu=()=>{
        const menu = document.getElementById('menu')
        const menuBox = document.getElementById('menuBox')
        const btn = document.getElementById('btn')

        if(menu?.classList.contains('hidden')){
            menu.classList.remove('hidden')
            btn?.classList.remove('hidden')
           menuBox?.classList.add('hidden')
        }
     }
    return(
        <>
           <div id="menu" className="flex items-center justify-center w-screen h-[80px]">
            
            <nav className="flex items-center md:justify-center justify-between h-[100%] text-[1.5rem] w-[90%]" >
                    <Link className="w-[10%]" href="/">Logo</Link>  
                <ul  className="hidden md:flex w-[60%]   items-center justify-around">
                    <li><Link href="/">Serviço</Link></li>
                    <li><Link href="/">Orçamento</Link></li>
                    <li><Link href="/">Projetos</Link></li>
                    <li><Link href="/">Contatos</Link></li>
                </ul>
                 <button id="btn" className="md:hidden" onClick={handleClick}>
                      <GiHamburgerMenu/>
                 </button>
            </nav>
        
           </div>

           <div id="menuBox" className=" hidden flex items-center justify-center w-screen h-[100vh]">
            
            <nav className=" flex items-center justify-center flex-col gap-10 h-[100%] text-[1.5rem] w-[90%]" >
        
                <Link  onClick={handleBackMenu}  className="border-b-2 w-[40%] hover:p-1 text-center hover:bg-amber-500 hover:rounded-[1.5rem]" href="/">Logo</Link>  
                <ul  className=" flex flex-col gap-10  w-[60%]   items-center justify-around">
                    <li onClick={handleBackMenu} className="border-b-2 w-[70%] hover:p-1 text-center hover:bg-amber-500 hover:rounded-[1.5rem]"><Link href="#services">Serviço</Link></li>
                    <li onClick={handleBackMenu} className="border-b-2 w-[70%] hover:p-1 text-center hover:bg-amber-500 hover:rounded-[1.5rem]"><Link href="#orcamento">Orçamento</Link></li>
                    <li onClick={handleBackMenu} className="border-b-2 w-[70%] hover:p-1 text-center hover:bg-amber-500 hover:rounded-[1.5rem]"><Link href="#projects">Projetos</Link></li>
                    <li onClick={handleBackMenu} className="border-b-2 w-[70%] hover:p-1 text-center hover:bg-amber-500 hover:rounded-[1.5rem]"><Link href="#contacts">Contatos</Link></li>
                </ul>
                 
            </nav>
        
           </div>
        </>
    )
}