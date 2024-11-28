import Link from "next/link"
export default function Payment(){
    return(
        <div className="h-screen bg-[#F0F8FF]">
            <div>
                <div className="flex justify-center my-16 text-3xl font-bold border-b-2"><h1>Enter Your Details</h1></div>
                <div className="mt-36">
                <div className="flex justify-center my-10"><input type="text" placeholder="Enter Your Name" required className="pl-2 py-2 border-2 rounded-lg w-[25%] placeholder-small"/></div>
                <div className="flex justify-center my-10"><input type="email" placeholder="Enter Your Email"required className="pl-2 py-2 border-2 rounded-lg w-[25%] placeholder-small" /></div>
                <div className="flex justify-center my-10"><input type="text" placeholder="Card Number" required className="pl-2 py-2 border-2 rounded-lg w-[25%] placeholder-small"/></div>
                <div className="flex justify-center my-10"><input type="text" placeholder="Address" required className="pl-2 py-2 border-2 rounded-lg w-[25%] placeholder-small" /></div>
                <div className="flex justify-center my-10"><Link href="thankyou" target="blank"><button className="py-3 px-8 bg-[#1E40AF] text-white text-sm font-medium rounded-lg">Place Your Order</button></Link></div>
                </div>
            </div>
        </div>
    )
}