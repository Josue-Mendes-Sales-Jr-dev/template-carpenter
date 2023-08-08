import "tailwindcss/tailwind.css"
import { Navbar } from "../navbar"
import { Footer } from "../footer"


interface LayoutProps{
    children:React.ReactNode
}
export const Layout=(props:LayoutProps)=>{
    return(
        <>
         <div className="flex flex-col w-screen min-h-[100vh]">
          <Navbar/>
          <div>
            {props.children}
          </div>
          <Footer/>
         </div> 
        </>
    )
}