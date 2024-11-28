export default function HeroSection(){
return(
    <div className="bg-white h-[500px] w-full flex justify-center items-center">
      <div className="bg-white h-[75%] w-[75%] border-[#E6E6E6] border-2">
        <div className="flex justify-center "><h1 className="text-[#434343] py-5 text-2xl font-semibold">Sell your Car on PakWheels and Get the Best Price</h1></div>
        <div className="flex justify-evenly">
            <div>
                <h1 className="text-[#233D7B] text-2xl my-5 font-semibold" >Post Your Ads on PakWheels</h1>
                <h1 className="text-[#434343] text-sm">Post your Ads for Free in 3 Easy Steps</h1>
                <h1 className="text-[#434343] text-sm">Get Genuine Offers from Verified Buyers</h1>
                <h1 className="text-[#434343] text-sm">Sell your Cars Fast at the Best Price</h1>
                <button className="bg-[#B73439] text-[#FFFFF6] py-3 px-7 my-7 rounded-md">Post Your Ad</button>
            </div>
            <div className=" flex justify-center items-center"><h1 className="text-[#7B8397] font-semibold ">OR</h1></div>
            <div>
                <h1 className="text-[#233D7B] text-2xl my-5 font-semibold">Try PakWheels Sell It For Me</h1>
                <h1 className="text-[#434343] text-sm">Dedicated Sales Experts to Sell your Car</h1>
                <h1 className="text-[#434343] text-sm">We Bargain for you and share the Best Offer</h1>
                <h1 className="text-[#434343] text-sm">We ensure Safe & Secure Transactions</h1>
                <button className=" bg-[#518ECB] text-[#FFFFF6] p-3 my-7 rounded-md">Register Your Car</button>
                </div>
        </div>
      </div>
    </div>
)
}