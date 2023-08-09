import { Layout } from '@/components/layout'
import Image from 'next/image'
import wallpaper from "../../public/img/carpenter.jpg"
import "tailwindcss/tailwind.css"
import { Services } from '@/components/services'
import { Orcamento } from '@/components/orcamento'
import { Galery } from '@/components/orcamento/galery'
import { Projects } from '@/components/projects'
import { Contacts } from '@/components/contacts'

export default function Home() {
  return (
    <>
    <Layout>
       <div className='relative w-screen h-[100vh] flex items-center justify-center'>
        <div className='absolute z-10 opacity-60 bg-black w-[100%] h-[100%]'>

        </div>
         <Image src={wallpaper} className=" fixed left-[-1px] top-[0px] z-[-50] w-[100vw] h-[100vh] object-cover " alt="wallpaper"/>
         <div className="absolute z-20 flex flex-col gap-3 items-center justify-center">
                 <p className="text-[2.2rem] text-white text-center">Carpintaria Desde 1991</p>
                 <h2 className="bg-brown-500 text-[3rem] sm:text-[4.5rem] text-center text-white">MÓVEIS PLANEJADOS</h2>
                 <p className="text-[1.5rem] text-center text-white sm:w-[55%] w-[80%] text-white">vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. </p>
            </div>
       </div>
       <section id='services'>
        <Services/>
        </section>
       <section id='orcamento'>
        <Orcamento/>
       </section>
       <Galery/>
       <section id='projects'>
        <Projects/>
        </section>
       <section id='contacts'> 
        <Contacts/>
        </section>
    </Layout>
    </>
  )
}
