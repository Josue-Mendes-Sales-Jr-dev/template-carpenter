import "tailwindcss/tailwind.css"

interface CardServicesProps{
    title:string
    text:string
    icon?: JSX.Element 
}
export const CardServices=(props:CardServicesProps)=>{
    return(
        <>
        <div className="flex flex-col gap-3 items-center justify-center w-[22rem] h-[20rem]">
            <div className="w-[8rem] shadow-xl h-[8rem] bg-gray-400 rounded-3xl">
                {props.icon}
            </div>
            <h2 className="w-[90%] text-center">
                {props.title}
            </h2>
            <p className="flex justify-center w-[70%] h-[20%]">
                {props.text}
            </p>
        </div>
        </>
    )
}