import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom"; // Keep NavLink for routing
import myPhoto from './../Photo/myPhoto.jpg';
import { link } from 'react-scroll'

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12 ">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <NavLink to="/home-page" onClick={() => handleScrollTo('home-page')}>
          <h1 className="text-sm font-bold hover:text-customPurple duration-500">HOME</h1>
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <NavLink to="/about-page" onClick={() => handleScrollTo('about-page')}>
          <h1 className="text-sm font-bold hover:text-customPurple duration-500">ABOUT</h1>
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <NavLink to="/project-page" onClick={() => handleScrollTo('project-page')}>
          <h1 className="text-sm font-bold hover:text-customPurple duration-500">PROJECTS</h1>
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <NavLink to="/contact-page" onClick={() => handleScrollTo('contact-page')}>
          <h1 className="text-sm font-bold hover:text-customPurple">CONTACT</h1>
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="w-full">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
            <NavLink className={({ isActive }) => isActive ? "text-customPurple" : ""} to="/home-page">
              <div className="text-lg font-bold flex flex-justify-center items-center space-x-2">
                <Avatar
                  size="lg"
                  alt="avatar"
                  src={myPhoto}
                  className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30 object-contain"
                />
                <h1 className="text-center items-center hover:text-customPurple duration-500 text-lg">DIPENDRA YESMALI MAGAR</h1>
              </div>
            </NavLink>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button variant="text" size="sm" className="hidden lg:inline-block">
                <span className="hover:text-customPurple text-sm font-bold duration-500">Log In</span>
              </Button>
              <Button variant="gradient" size="sm" className="hidden lg:inline-block ">
                <span className="hover:text-customPurple duration-500 text-sm font-bold">Sign in</span>
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
              <span className="text-lg font-bold">Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span className="text-sm ">Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}