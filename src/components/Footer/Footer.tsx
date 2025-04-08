import { NavLink } from "react-router";
import Stack from "../Stack";
import { Link } from "react-router";

const quickLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Projects",
    link: "/projects",
  },
];

export default function Footer() {
  return (
    <footer className=" mt-[84px] h-full  text-black relative overflow-hidden">
      <div className=" rounded-lg flex flex-col items-start min-h-screen overflow-hidden h-full">
        <Stack
          container="default"
          orientation="vertical"
          className="  h-full relative overflow-hidden max-sm:pb-[180px]"
          padding="default"
          gap="medium"
        >
          <h1 className=" display-1 max-w-4xl !text-black">
            Fuel The Conversation
          </h1>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <div className=" text-e-6xl font-medium tracking-tighter flex flex-col gap-2">
                <p className=" text-e-2xl font-medium text-black/50">
                  Quick Links
                </p>
                {quickLinks.map((link, index) => (
                  <span
                    key={index}
                    className=" text-e-6xl font-medium tracking-tighter "
                  >
                    <NavLink to={link.link}>{link.title}</NavLink>
                  </span>
                ))}
              </div>
            </div>
            <div className=" w-full">
              <div className=" text-e-6xl font-medium tracking-tighter flex flex-col gap-2">
                <p className="text-e-2xl font-medium text-black/50">Location</p>
                <span>
                  <Link to={``}>Accra, Ghana</Link>
                </span>
                <span>
                  <Link to={``}>Near New Town Circle</Link>
                </span>
              </div>
            </div>

            <div className="w-full">
              <div className=" text-e-6xl font-medium tracking-tighter flex flex-col gap-2">
                <p className="text-e-2xl font-medium text-black/50">Contact</p>
                <span>
                  <Link to={``}>hello@eleventhspace.com</Link>
                </span>
                <span>
                  <Link to={``}>+233 535 000 123</Link>
                </span>
              </div>
            </div>

            <div>
              <div className=" text-e-6xl font-medium tracking-tighter flex flex-col gap-2">
                <p className="text-e-2xl font-medium text-black/50">Stalk Us</p>
                <span>
                  <Link to={``}>Instagram</Link>
                </span>
                <span>
                  <Link to={``}>Facebook</Link>
                </span>
                <span>
                  <Link to={``}>TikTok</Link>
                </span>
              </div>
            </div>
          </div>
        </Stack>

        <div className="absolute bottom-0 left-0 h-fit flex flex-col w-full overflow-hidden">
          <div className=" w-full">
            {/* <span className=" text-[25.5vw] text-nowrap whitespace-nowrap tracking-tighter">
            elenethspace
          </span> */}
            <svg viewBox="0 0 85 13" className="w-full fill-black">
              <text x="0" y="15" className=" ">
                eleventhspace
              </text>
            </svg>
          </div>
          <div className=" bg-[#44C4F5] h-fit p-6 py-4 md:text-e-2xl flex flex-col items-start gap-3 md:flex-row justify-between">
            <span>© Copyright, All rights reserved 2025 ️</span>
            <span>
              Developed by the <Link to={``}>thegenealyst</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
