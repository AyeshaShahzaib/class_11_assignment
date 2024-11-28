export default function Header() {
  return (
    <div>
      <div className="h-28 bg-[#000710] flex justify-center">
        <div className="h-28 w-4/5 ">
          <div className="flex justify-between ">
            <div className="flex place-items-end">
              <img src="mobile_icon.png" alt="mobile icon" className="h-7 " />
              <p className="text-[#E4E4E6] text-sm font-medium">
                Download App via SMS
              </p>
            </div>
            <div className="flex">
              <p className="text-[#B73439] font-semibold mx-1">اردو</p>
              <a href="https:www.google.com" className="text-[#E4E4E6] text-sm">
                | Sign Up
              </a>
              <a
                href="https:www.google.com"
                className="text-[#E4E4E6] text-sm mx-1"
              >
                | Sign In
              </a>
            </div>
          </div>
          <hr className="my-2 border-[#302F2E]" />

          <div className="h-16 flex items-center justify-between px-4 bg-[#0a0a0a]">
            <div>
              <img src="logo.png" alt="logo" className="h-10" />
            </div>

            <div className="flex items-center">
              <div className="flex items-center mr-6">
                <p className="text-[#E4E4E6] text-sm">Used Cars</p>
                <img src="drop_down.png" alt="dropdown" className="h-4 ml-1" />
              </div>
              <div className="flex items-center mr-6">
                <p className="text-[#E4E4E6] text-sm">New Cars</p>
                <img src="drop_down.png" alt="dropdown" className="h-4 ml-1" />
              </div>
              <div className="flex items-center mr-6">
                <p className="text-[#E4E4E6] text-sm">Bikes</p>
                <img src="drop_down.png" alt="dropdown" className="h-4 ml-1" />
              </div>
              <div className="flex items-center mr-6">
                <p className="text-[#E4E4E6] text-sm">Auto Store</p>
                <img src="drop_down.png" alt="dropdown" className="h-4 ml-1" />
              </div>
              <p className="text-[#E4E4E6] text-sm mr-6">Videos</p>
              <p className="text-[#E4E4E6] text-sm mr-6">Forums</p>
              <p className="text-[#E4E4E6] text-sm mr-6">Blog</p>
              <div className="flex items-center relative">
                <div className="absolute -top-4 -right-5 bg-[#1E3A8A] text-white text-xs px-2 py-0.5 rounded-full">
                  New
                </div>

                <p className="text-[#E4E4E6] text-sm">More</p>
                <img src="drop_down.png" alt="dropdown" className="h-4 ml-1" />
              </div>
            </div>

            <div>
              <button className="bg-[#B73439] text-[#E4E4E6] h-10 w-[100px] rounded-md">
                Post an Ad
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
