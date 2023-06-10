import React, { useEffect, useState } from "react";
import WOW from "wowjs";
// import ImageSlider from "./ImageSlider";
const Home = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };
  // Defining WOW
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  const [navBar, setnavBar] = useState(false);
  const handleNavbar = () => {
    setnavBar(!navBar);
    console.log("clicked");
  };
  const [isopen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isopen);
    console.log("click me");
  };
  return (
    <div>
      <div className="navbar flex  justify-between items-center p-0">
        <div className="flex justify-center items-center md:order-2">
          <div
            className="Drawer inline-block p-4 md:hidden text-[20px]"
            onClick={handleNavbar}
          >
            <ion-icon size="40px" name={navBar ? "close" : "menu"}></ion-icon>
            {/* <i class="fas fa-light fa-xmark hidden"name='close'></i> */}
            {/* <i class="fab fa-light fa-xmark" name='close'></i> */}
            {/* <div className="line h-0.5 w-6 bg-black my-1"></div>
            <div className="line h-0.5 w-6 bg-black my-1"></div>
            <div className="line h-0.5 w-6 bg-black my-1"></div> */}
          </div>
          <div className="Serachicon md:hidden w-5 mx-3 items-center">
            <img src="Images/search.svg" />
          </div>
        </div>
        <div className="text-center flex md:order-1">
          <div className="items-center">
            <img
              className="p-4 md:mx-14 w-[9rem] md:cursor-pointer justify-center "
              src="/Images/micrologo.png"
            />
          </div>
          <div
            className={
              navBar
                ? "MircosftFeacture absolute  ease-in-out duration-100 items-center text-left divide-y-2 inset-0 w-auto h-full bg-[#f2f2f2]   mt-14"
                : "absolute  items-center w-fit inset-0 md:w-auto md:static md:flex mx-4 space-x-2 -translate-x-96 md:-translate-x-0"
            }
          >
            <div className="md:w-0.5 md:h-6 md:bg-black"></div>
            <div className="fitem px-6 text-sm md:px-3 py-6 md:py-0 md:hover:underline divide-y-0 hover:underline-offset-8 md:cursor-pointer">
              Products
            </div>
            <div className="fitem px-6 text-sm md:px-3 py-4 space-y-4 md:hover:underline  hover:underline-offset-4 md:cursor-pointer">
              Our approach
            </div>
            <div className="fitem px-6 text-sm md:px-3 py-4 md:py-0 md:hover:underline  md:hover:underline-offset-4 md:cursor-pointer">
              Stories
            </div>
            <div className="fitem px-6 text-sm md:px-3 py-4 md:py-0 md:hover:underline  md:hover:underline-offset-4 md:cursor-pointer">
              Resources
            </div>

            <div className="fitem px-6 text-sm md:px-3 py-4 md:py-0 md:hover:underline  md:hover:underline-offset-4 md:cursor-pointer">
              Blog
            </div>
            <div className="fitem px-6 text-sm md:px-3 py-4 md:py-0 md:hover:underline  md:hover:underline-offset-4 md:cursor-pointer">
              Xbox
            </div>
            <div className="fitem px-6 text-sm md:px-3 py-4 md:py-0 md:hover:underline  md:hover:underline-offset-4 md:cursor-pointer">
              Deals
            </div>
            <div className="fitem px-6 text-sm md:px-3 py-4 md:py-0 md:hover:underline  md:hover:underline-offset-4 md:cursor-pointer">
              Support
            </div>
          </div>
        </div>

        <div className="md:order-3 md:cursor-pointer text-center items-center flex">
          <div className="Serachicon md:block hidden hover:underline hover:underline-offset-4 md:cursor-pointer text-sm items-center">
            <div className="flex items-center mx-4">
              <button className="space-x-5" onClick={handleOpen}>
                All Microsoft
                <ion-icon class='translate-y-1 translate-x-1'
                  name={isopen ? "chevron-up-outline" : "chevron-down-outline"}
                ></ion-icon>
              </button>
            </div>
            {isopen && (
              <div class="container mx-auto px-4">
                <div className="Footer absolute flex flex-col text-left md:mx-[6rem] md:-translate-x-full 2xl:-translate-x-[80rem] w-[50rem] md:w-[70rem] lg:w-[70rem] 2xl:w-[70rem] md:flex-row mt-4 py-6 bg-[#f2f2f2] ">
                  <div className="col1 md:mx-8 space-y-3 ">
                    <h1 className="text-[15px] font-medium ">Software</h1>
                    <ul className="space-y-3 text-[11px]">
                      <li className=" hover:text-blue-400 hover:underline">
                        Windows Apps
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        AI
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Outlook
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        OneDrive
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Microsoft Teams
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        OneNote
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Microsoft Edge
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Skype
                      </li>
                    </ul>
                  </div>
                  <div className="col1 mx-8  space-y-3 ">
                    <h1 className="text-[15px] font-medium">PCs & Devices</h1>
                    <ul className="space-y-3 text-[11px]">
                      <li className=" hover:text-blue-400 hover:underline">
                        Computers
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Shop Xbox
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Accessories
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        VR & mixed reality
                      </li>
                    </ul>
                  </div>
                  <div className="col1 mx-8 space-y-3 ">
                    <h1 className="text-[15px] font-medium ">Entertainment</h1>
                    <ul className="space-y-3 text-[11px]">
                      <li className=" hover:text-blue-400 hover:underline">
                        Xbox Game Pass Ultimate
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        PC Game Pass
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Xbox games
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        PC games
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Windows digital games
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Movies & TV
                      </li>
                    </ul>
                  </div>
                  <div className="col1 mx-8  space-y-3 ">
                    <h1 className="text-[15px] font-medium">Business</h1>
                    <ul className="space-y-3 text-[11px]">
                      <li className=" hover:text-blue-400 hover:underline">
                        Microsoft Cloud
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Microsoft Security
                      </li>
                      <li className=" hove</li>r:text-blue-400 hover:underline">
                        Dynamics 365
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Microsoft 365 for business
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Microsoft Power Platform
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Windows 365
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Microsoft Industry
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Small Business
                      </li>
                    </ul>
                  </div>
                  <div className="col1 mx-8 space-y-3 ">
                    <h1 className="text-[15px] font-medium">Developer & IT</h1>
                    <ul className="space-y-3 text-[11px]">
                      <li className=" hover:text-blue-400 hover:underline">
                        Azure
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Developer Center
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Documentation
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Microsoft Learn
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Microsoft Tech Community
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Azure Marketplace
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        AppSource
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Visual Studio
                      </li>
                    </ul>
                  </div>
                  <div className="col1 mx-8 space-y-3 ">
                    <h1 className="text-[15px] font-medium">Other</h1>
                    <ul className="space-y-3 text-[11px]">
                      <li className=" hover:text-blue-400 hover:underline">
                        Microsoft Rewards
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Free downloads & security
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Education
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Trade-in for Cash
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Gift cards
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Students and parents deals
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Licensing
                      </li>
                      <li className=" hover:text-blue-400 hover:underline">
                        Microsoft Experience Center
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <img src="Images/search.svg" className="w-4 mx-3 md:block hidden" />
          <div className="">
            <img src="/Images/cart.png" className="w-5" />
          </div>
          <img src="Images/account.gif" className="w-7 mx-2" />
        </div>
      </div>
      <div className="Header flex  bg-[#0067b8] p-1 justify-center items-center md:cursor-pointer  font-medium text-white">
        <h1 className="px-8 py-4">
          Congratulate and celebrate your grad with tech that’s as impressive as
          they are.Shop gift
          ideas
        </h1>
          <ion-icon name="chevron-forward-outline"  class='text-5xl md:text-2xl -translate-x-6'></ion-icon> 
      </div>
      <div className="slider flex flex-col-reverse md:flex-row bg-[#dcdcde] ">
        <div className="LeftText flex flex-col md:justify-center md:items-baseline py-16 wow animate__animated animate__fadeInLeftBig  md:bg-[#dcdcde] shadow bg-white">
          <h1 className="text-2xl md:w-[20rem] font-medium md:mx-24 text-justify mx-10 md:text-left md:text-3xl">
            Save on Surface
          </h1>
          <p className="w-4/5 text-left mx-10  md:text-left">
            Find a great deal on select Surface devices built for all the ways
            you create, work, play, and connect
          </p>
          <button className="bg-[#0067b8] hover:bg-blue-800 w-fit my-6  p-4 mx-10 text-white font-medium justify-start items-start ">
            Shop Surface deals
          </button>
        </div>
        <div className="RightImage wow animate__animated animate__fadeInRight">
          <img className="w-[150rem] md:w-[150rem] " src="/Images/family.webp" />
        </div>
      </div>
      <div className="container mx-auto">
      <div className="Promotion space-y-8 mt-16 flex flex-col md:flex-row md:space-x-12 md:cursor-pointer md:items-center md:justify-center">
        <div className="Items flex flex-col underline text-[#0067B8] font-medium items-center justify-center md:mt-8 wow animate__animated animate__slideInUp">
          <img className="" src="/Images/devices.webp" />
          <span className="py-3">Shop Surface devices</span>
        </div>
        <div className="Items flex flex-col underline text-[#0067B8] font-medium my-9 items-center justify-center wow animate__animated animate__slideInUp ">
          <img className="" src="/Images/maclogo.jpg" />
          <span className="py-2">Choose your Microsoft 365</span>
        </div>
        <div className="Items flex flex-col underline text-[#0067B8] font-medium my-9 items-center justify-center wow animate__animated animate__slideInUp ">
          <img className="" src="/Images/xbox.webp" />
          <span className="py-3">Buy Xbox games and consoles</span>
        </div>
        <div className="Items flex flex-col underline text-[#0067B8] font-medium my-9 items-center justify-center wow animate__animated animate__slideInUp">
          <img className="" src="/Images/win.jpg" />
          <span className="py-2">Get Windows 11</span>
        </div>
        <div className="Items flex flex-col underline text-[#0067B8] font-medium my-9 items-center justify-center wow animate__animated animate__slideInUp animate__delay-1s">
          <img className="" src="/Images/keyboard.webp" />
          <span className="py-3">Shop for accessories</span>
        </div>
        <div className="Items flex flex-col underline text-[#0067B8] font-medium my-9 items-center justify-center wow animate__animated animate__slideInUp">
          <img className="" src="/Images/shop.webp" />
          <span className="py-3">Shop Business</span>
        </div>
      </div>
      
      {/* <div className="container mx-auto"> */}
      <div className="Cards grid grid-cols-1 mx-10 mt-10  md:grid-cols-4  md:space-x-8 md:cursor-pointer ">
        <div className="Cad1 text-left wow animate__animated animate__slideInUp ">
          <img src="Images/card1.webp" className="w-[60rem] lg:h-[12rem] md:w-auto md:h-[12rem]  " />
          <h1 className="font-medium text-xl text-left py-3 wow animate__animated animate__slideInLeft ">
            Save up to $300 on Surface Laptop 5
          </h1>
          <p className="text-left md:w-4/5 pb-5 wow animate__animated animate__slideInLeft">
            Sophisticated style and multitasking speed powered by 12th Gen
            Intel® Core. Offer ends 5/29.
          </p>
          <span className="text-left text-blue-600 hover:underline cursor-pointer wow animate__animated animate__slideInDown ">
            Shop Surface Laptop 5{" "}
          </span>
        </div>
        <div className="Cad2 text-left mt-10 md:mt-0 wow animate__animated animate__zoomIn">
          <img src="Images/card2.jpg" className="w-[60rem] lg:h-[12rem] md:w-auto md:h-[12rem]" />
          <h1 className="font-medium text-xl text-left py-3 wow animate__animated animate__slideInLeft">
            Save up to $300 on Surface Pro 9
          </h1>
          <p className="text-left md:w-4/5 pb-5 wow animate__animated animate__slideInLeft">
            The tablet flexibility you want and the laptop performance you
            need—all in one ultra-portable device. Offer ends 5/21.
          </p>
          <span className="text-left text-blue-600 hover:underline md:cursor-pointer wow animate__animated animate__slideInDown">
            Shop Surface Laptop 5{" "}
          </span>
        </div>
        <div className="Cad3 text-left mt-10 md:mt-0 wow animate__animated animate__zoomIn animate__delay-1s">
          <img src="Images/card3.webp" className="w-[60rem] lg:h-[12rem] md:w-auto md:h-[12rem]" />
          <h1 className="font-medium text-xl text-left py-3 wow animate__animated animate__slideInLeft animate__delay-1s">
            Xbox Series X
          </h1>
          <p className="text-left md:w-4/5 pb-5 wow animate__animated animate__slideInLeft ">
            The fastest, most powerful Xbox ever.
          </p>
          <span className="text-left text-blue-600 hover:underline md:cursor-pointer wow animate__animated animate__slideInDown ">
            Shop Surface Laptop 5{" "}
          </span>
        </div>
        <div className="Cad4 text-left mt-10 md:mt-0 md:cursor-pointer wow animate__animated animate__zoomInUp">
          <img src="Images/card4.avif" className="w-[60rem] md:w-auto  md:h-[12rem] lg:h-[12rem] " />
          <h1 className="font-medium text-xl text-left py-3 wow animate__animated animate__slideInLeft">
            Xbox Game Pass Ultimate
          </h1>
          <p className="text-left md:w-4/5 pb-5 wow animate__animated animate__slideInLeft">
            Xbox Live Gold and hundreds of high-quality console and PC games.
            Play together with friends and discover your next favorite game.
          </p>
          <span className="text-left text-blue-600 hover:underline md:cursor-pointer wow animate__animated animate__slideInDown">
            Shop Surface Laptop 5{" "}
          </span>
        </div>
      </div>
      {/* </div> */}
      {/* <div className="container mx-auto"> */}
      <div className="AdvertiseSection mt-10 md:mt-0 md:cursor-pointer">
        <div className="slider flex flex-col-reverse md:flex-row mt-[8rem]  ">
          <div className="LeftText md:absolute flex flex-col md:justify-center md:items-baseline py-8 md:py-48 wow animate__animated animate__slideInDown ">
            <h1 className="text-2xl text-black md:text-white md:w-[20rem] font-medium md:mx-[6rem] 2xl:mx-[12rem] text-justify mx-10 md:text-left md:text-3xl py-3 animate__animated animate__slideInLeft animate__delay-1s">
              Xbox Series S - Gilded Hunter Bundle
            </h1>
            <p className="w-[90%] text-left mx-10 md:text-white pb-5 text-black  md:text-left ">
              Get Xbox Series S,nine in-game cosmetics,and virtual currency
            </p>
            <button className="bg-[#0067b8] hover:bg-blue-800 w-fit my-6 py-3 p-4 mx-10 text-white font-medium justify-start items-start wow animate__animated animate__slideInDown">
              Shop now
            </button>
          </div>
          <div className="RightImage mx-9  wow animate__animated animate__zoomInUp ">
            <img
              className="w-[60rem] md:w-[75rem] h-[12rem] sm:h-[20rem] lg:w-[75rem] xl:w-[75rem] 2xl:w-[91rem] md:h-[35rem] lg:h-[35rem] 2xl:h-[50rem] "
              src="/Images/card7.avif"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <div className="container mx-auto">       */}
      <div className="flex my-10 mx-10 wow animate__animated animate__slideInLeft">
        <h1 className="font-bold text-2xl">For Business</h1>
      </div>
      <div className="BusinessCards grid grid-cols mx-10 mt-10 md:grid-cols-4 md:space-x-8 md:cursor-pointer">
        <div className="BCad1 text-left mt-10 md:mt-0 wow animate__animated animate__zoomInUp">
          <img src="Images/bcard1.webp" className="w-[60rem] lg:h-[12rem] md:w-auto md:h-[12rem]" />
          <h1 className="font-medium text-xl text-left py-3 wow animate__animated animate__slideInLeft">
            Save up to $250 on Surface Laptop 5 for Business
          </h1>
          <p className="text-left md:w-4/5 pb-5 wow animate__animated animate__slideInDown">
            Lightning-fast performance, built-in security and sleek portability
            designed for your small business. Offer ends 5/31.
          </p>
          <span className="text-left text-blue-600 hover:underline cursor-pointer wow animate__animated animate__slideInDown ">
            Shop Now
          </span>
        </div>
        <div className="BCad2 text-left mt-10 md:mt-0 wow animate__animated animate__zoomInUp">
          <img src="Images/bcard2.webp" className="w-[60rem] lg:h-[12rem] md:w-auto md:h-[12rem]" />
          <h1 className="font-medium text-xl text-left py-3 wow animate__animated animate__slideInLeft ">
            Microsoft 365 for Business
          </h1>
          <p className="text-left md:w-4/5 pb-5 wow animate__animated animate__slideInDown">
            For a limited time, get 15% off Microsoft 365 Business Standard or
            Microsoft 365 Business Premium. Annual Subscriptions only. Terms and
            conditions apply.
          </p>
          <span className="text-left text-blue-600 hover:underline md:cursor-pointer wow animate__animated animate__slideInDown animate__delay-1s">
            Buy Now
          </span>
        </div>
        <div className="Cad3 text-left mt-10 md:mt-0 wow animate__animated animate__zoomInUp ">
          <img src="Images/bcard3.avif" className="w-[60rem] lg:h-[12rem] md:w-auto md:h-[12rem]" />
          <h1 className="font-medium text-xl text-left py-3 wow animate__animated animate__slideInLeft ">
            Join the era of AI
          </h1>
          <p className="text-left md:w-4/5 pb-5 wow animate__animated animate__slideInDown ">
            Create, communicate, and code with the latest Microsoft AI
            solutions.{" "}
          </p>
          <span className="text-left text-blue-600 hover:underline md:cursor-pointer wow animate__animated animate__slideInDown ">
            Explore AI solutions
          </span>
        </div>
        <div className="Cad4 text-left mt-10 md:mt-0 wow animate__animated animate__zoomInUp ">
          <img src="Images/bcard4.avif" className="w-[60rem] lg:h-[12rem] md:w-auto md:h-[12rem]" />
          <h1 className="font-medium text-xl text-left py-3 wow animate__animated animate__slideInLeft ">
            Join Microsoft Build—digitally or in person
          </h1>
          <p className="text-left md:w-4/5 pb-5 wow animate__animated animate__slideInDown ">
            This May 23-25, engage in interactive, discussion-based activities
            in real time while connecting with and learning from experts in the
            developer community.
          </p>
          <span className="text-left text-blue-600 hover:underline md:cursor-pointer wow animate__animated animate__slideInDown">
            Register today for Microsoft Build
          </span>
        </div>
      </div>
      {/* </div> */}
    
        {/* <div className="container mx-auto"> */}
        <div className="ImagesSlider  mx-9  mt-10 md:cursor-pointer wow animate__animated animate__zoomInUp">
          <img
            src={images[currentImageIndex]}
            alt="Slider Image"
            className="w-[60rem] md:w-[75rem] lg:w-[75rem] xl:w-[75rem] 2xl:w-auto h-[12rem] sm:h-[20rem]  md:h-[35rem] lg:h-[35rem] 2xl:h-[50rem]"
          />
        </div>
        <div className="relative inset-0 flex items-center justify-between mt-5">
          <button className="ml-[5rem] md:ml-[30rem]" onClick={previousImage}>
            <span class="inline-block h-12 w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                color="black"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 md:h-12 md:w-12 md:text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
          <button className="mr-[5rem] md:mr-[30rem]" onClick={nextImage}>
            <span class="inline-block h-12 w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                color="black"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 md:h-12 md:w-12 md:text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        </div>
      {/* </div> */}
      <div className="container mx-auto">
      <div className="FollowMicrosoft flex mx-9 space-x-3 mt-20 items-center wow animate__animated animate__slideInLeft ">
        <h1 className="flex">Follow Microsoft</h1>
        <a href="#" class="text-blue-700 hover:text-blue-800">
          <i class="fab fa-twitter text-[30px]"></i>
        </a>
        <a href="#" class=" text-blue-700 hover:text-blue-800">
          <i class="w-[30px] text-[35px]   fab fa-facebook"></i>
        </a>
        <a href="#" class="text-blue-700 hover:text-blue-800">
          <i class=" w-[30px] text-[35px] fab fa-linkedin"></i>
        </a>
      </div>
      </div>
      </div>
      <footer class="bg-[#f2f2f2] w-full">
        <div class="container mx-auto px-4 md:px-2">
          <div className="Footer flex flex-col text-left md:flex-row mt-16 py-6 lg:flex-row md:cursor-pointer ">
            <div className="col1 md:mx-8 mx-8 space-y-3 wow animate__animated animate__slideInLeft md:wow animate__animated animate__backInDown ">
              <h1 className="text-[15px] font-medium ">What's new</h1>
              <ul className="space-y-3 text-[11px]">
                <li className=" hover:text-blue-400 hover:underline">
                  Surface Pro 9
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Surface Laptop 5
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Surface Studio 2+
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Surface Laptop Go 2
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Surface Laptop Studio
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Surface Go 3
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Microsoft 365
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Windows 11 apps
                </li>
              </ul>
            </div>
            <div className="col1 mx-8 md:mx-12 py-10 md:py-0 space-y-3 wow animate__animated animate__slideInLeft  md:wow animate__animated animate__backInDown ">
              <h1 className="text-[15px] font-medium">Microsoft Store</h1>
              <ul className="space-y-3 text-[11px]">
                <li className=" hover:text-blue-400 hover:underline">
                  Account profile
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Download Center
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Microsoft Store support
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Returns
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Order tracking
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Trade-in for Cash
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Microsoft Store Promise
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Flexible Payments
                </li>
              </ul>
            </div>
            <div className="col1 md:mx-12 mx-8 space-y-3 wow animate__animated animate__slideInLeft md:wow animate__animated animate__backInDown ">
              <h1 className="text-[15px] font-medium ">Education</h1>
              <ul className="space-y-3 text-[11px]">
                <li className=" hover:text-blue-400 hover:underline">
                  Microsoft in education
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Devices for education
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Microsoft Teams for Education
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Microsoft 365 Education
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  How to buy for your school
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Educator training and development
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Deals for students and parents
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Azure for students
                </li>
              </ul>
            </div>
            <div className="col1 md:mx-12 mx-8 py-10 md:py-0 space-y-3 wow animate__animated animate__slideInLeft md:wow animate__animated animate__backInDown ">
              <h1 className="text-[15px] font-medium">Business</h1>
              <ul className="space-y-3 text-[11px]">
                <li className=" hover:text-blue-400 hover:underline">
                  Microsoft Security
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Microsoft Cloud
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Dynamics 365
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Microsoft 365
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Microsoft Power Platform
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Microsoft Teams
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Microsoft Industry
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Small Business
                </li>
              </ul>
            </div>
            <div className="col1 md:mx-12 mx-8 space-y-3 wow animate__animated animate__slideInLeft  md:wow animate__animated animate__backInDown ">
              <h1 className="text-[15px] font-medium">Developer & IT</h1>
              <ul className="space-y-3 text-[11px]">
                <li className=" hover:text-blue-400 hover:underline">Azure</li>
                <li className=" hover:text-blue-400 hover:underline">
                  Developer Center
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Documentation
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Microsoft Learn
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Microsoft Tech Community
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Azure Marketplace
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  AppSource
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Visual Studio
                </li>
              </ul>
            </div>
            <div className="col1 mx-8 md:mx-8 py-10 md:py-0 space-y-3 wow animate__animated animate__slideInLeft  md:wow animate__animated animate__backInDown ">
              <h1 className="text-[15px] font-medium">Company</h1>
              <ul className="space-y-3 text-[11px]">
                <li className=" hover:text-blue-400 hover:underline">
                  Careers
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  About Microsoft
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Company news
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Privacy at Microsoft
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Investors
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Diversity and inclusion
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Accessibility
                </li>
                <li className=" hover:text-blue-400 hover:underline">
                  Sustainability
                </li>
              </ul>
            </div>
          </div>
          <hr class="border-gray-700 my-6" />
          <div class="flex flex-col md:flex-row md:items-center md:justify-between">
            <div class="text-sm flex flex-col md:flex-row items-center justify-between wow animate__animated animate__slideInLeft">
              {/* <p>&copy; 2023 Microsoft Corporation. All rights reserved.</p> */}
              <img className="w-[20px] h-[24px]" src="Images/lang.png" />
              <span className="text-[11px]">English (United States)</span>
              <span className="text-[11px] mx-8">Your Privacy Choices</span>
              <p className=" text-[11px] justify-between mx-16 items-center ">
                Sitemap | Contact | Microsoft Privacy | Terms of use |
                Trademarks | Safety & eco | Recycling | About our ads | ©
                Microsoft 2023
              </p>
            </div>
            <div class="mt-4 md:mt-0 wow animate__animated animate__slideInRight">
              <ul class="flex space-x-4 justify-center">
                <li>
                  <a href="#" class="text-blue-700 hover:text-blue-800">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-blue-700 hover:text-blue-800">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-blue-700 hover:text-blue-800">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-red-700 hover:text-red-800">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    
  );
};

export default Home;
