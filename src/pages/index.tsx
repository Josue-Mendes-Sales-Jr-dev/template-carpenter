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
       <Image src={wallpaper} className=" w-[100vw] h-[100vh] object-cover " alt="wallpaper"/>
       <Services/>
       <Orcamento/>
       <Galery/>
       <Projects/>
       <Contacts/>
    </Layout>
    </>
  )
}
