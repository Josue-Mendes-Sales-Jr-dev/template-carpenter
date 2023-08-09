import 'tailwindcss/tailwind.css'

interface  TextCardPRops{
    className: string
}
export const TextCard=(props:TextCardPRops)=>{
    return(
        <>
        <div className={`${props.className}`}>
           <h1 className='w-[45%] text-[1.4rem] text-center'>
           Entre em contato com a gente e solicite um Consultor Grátis
           </h1>
           <button className="bg-amber-600 hover:bg-amber-500 rounded-full mt-3 text-[1.2rem] px-[4rem] text-white py-[.8rem]">
                    Saiba mais
           </button>
        </div>
        </>
    )
}