import React, { useRef } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import myPhoto from './../Photo/myPhoto.jpg';
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    // Calculate the header height
    const headerHeight = document.querySelector('nav').offsetHeight; // Get the height of the header
    const topPosition = ref.current.getBoundingClientRect().top + window.scrollY - headerHeight; // Adjust for header height
    window.scrollTo({ top: topPosition, behavior: 'smooth' }); // Smooth scroll to adjusted position
    setOpenNav(false)
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12 ">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <h1 onClick={() => handleScroll(homeRef)} className="text-lg font-bold hover:text-customPurple duration-500">Home</h1>
      </Typography>

      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <h1 onClick={() => handleScroll(aboutRef)} className="text-lg font-bold hover:text-customPurple duration-500">About</h1>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <h1 onClick={() => handleScroll(projectRef)} className="text-lg font-bold hover:text-customPurple duration-500">Projects</h1>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <h1 onClick={() => handleScroll(contactRef)} className="text-lg font-bold hover:text-customPurple">Contact</h1>
      </Typography>
    </ul>
  );

  return (
    <div className="w-full">

      {/* Headers */}
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4   ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
            <div className=" font-sans font-semibold flex flex-justify-center items-center space-x-2">
              <Avatar
                size="lg"
                alt="avatar"
                src={myPhoto}
                className="border border-green-500 shadow-xl shadow-customPurple-900/20 ring-4  object-contain"
              />
              <h1 className="text-center items-center hover:text-customPurple duration-500 text-xl ">Dipendra yesmali magar</h1>
            </div>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button variant="text" size="sm" className="hidden lg:inline-block">
                <span className=" text-sm font-bold duration-500">Log In</span>
              </Button>
              <Button variant="gradient" size="sm" className="hidden lg:inline-block ">
                <span className="duration-500 text-sm font-bold">Sign in</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span className="text-lg tracking-wide font-bold">Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span className="text-sm tracking-wide">Login in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>

      {/* Main content area with sections */}
      <div className="flex flex-col">

        {/* dipendra page */}
        <div ref={homeRef} className="h-screen bg-desktop flex items-center justify-center ssm:items-start ssm: ssm:my-auto bg-gray-200 px-10  ">
          <Home />
        </div>

        <div ref={aboutRef} className=" flex items-center justify-center bg-gray-200  bg-desktop ssm:mt-20 ">
          <About />
        </div>

        <div ref={projectRef} className="flex items-center justify-center bg-desktop bg-gray-200">
          <Project />

        </div>

        <div ref={contactRef} className=" flex items-center justify-center bg-desktop  bg-gray-200">
          <Contact />
        </div>
      </div>
    </div>
  );
}