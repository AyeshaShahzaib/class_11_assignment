import Link from "next/link"
export default function Car_Details3(){
    return(
        <div>
            <div>
                <div className="flex justify-center py-12 font-bold text-3xl underline "><h1 className="w-[60%] text-center">Honda City 2024 Price in Pakistan,Images,Reviews and Specs</h1></div>
                <div className="flex justify-center py-6 "><img src="car_3.jpg" alt="Honda City"className="border-2" /></div>
                <div className="flex justify-center py-12 font-light text-sm text-center text[#1E363F] "><h1 className="w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quos? Quaerat maiores nam sunt, quos, adipisci numquam dicta fugit ad eos aut dignissimos quis hic aliquam, deserunt quibusdam laboriosam at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed repudiandae dicta dignissimos. Ad velit similique mollitia. Quasi aperiam odit deserunt sequi, molestias rerum omnis? Aliquid delectus consequatur amet modi unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad animi praesentium, labore sapiente eius delectus repellendus eveniet sequi iusto excepturi accusamus sed cupiditate cumque aliquam tempore repudiandae magni at.</h1></div>
                <div className="flex justify-center py-6 text-[#16A34A] text-xl"><h1>PKR 50,00,000</h1></div>
                <div className="flex justify-center py-6"><Link href="payment" target="_blank"><button className="px-4 py-3 rounded-md bg-[#1E40AF] text-[#FFFFFF] text-sm ">Make Payment</button></Link></div>
            </div>
        </div>
    )
}