"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import LangSwitcher from "@/components/LangSwitcher";
import { activeRoutes } from "@/constants/routes";

// icons
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function Header(props) {
  const [state, setState] = useState({ open: false });
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const currentPath = usePathname();
  const refs = useRef([]);


  // classes
  const headerClasses = clsx(
    "h-fit",
    "px-4 sm:px-8 py-3 sticky -top-[1px] w-full",
    "flex justify-between items-center ",
    "bg-background text-text shadow-md border-b border-gray-400",
    
    `header_${currentLang} z-50`,
    {
      "font-semibold": true,
      underlined: true,
    }
  );

  console.log(activeRoutes, " activeRoutes");


  const menuClasses = clsx(
    "w-screen px-8 py-4 md:p-0 md:w-fit",
    "absolute top-[39px] -right-7 md:static",
    "flex flex-col lg:flex-row ",
    "gap-8 md:gap-2 lg:gap-8",
    "bg-background bg-blend-darken md:bg-none",
    "border-t border-gray-600 md:border-none",
    "shadow-md md:shadow-none",
    {
      "block md:flex": state.open,
      "hidden md:flex": !state.open,
    }
  );

  const menuItems = clsx(
    "flex flex-col justify-end items-center md:flex-row",
    "gap-4 md:gap-4",
    
  );

  const menuItemClasses = clsx(
    "w-fit px-4 py-4 text-center md:p-0 md:w-fit ",
    "text-20 md:text-base",
    "hover:underline"
  );

  return (
    <header className={headerClasses + "z-50"} id="header_home"> {/* route={routes.route} ?????*/}
      {/* <a href="/sostenibilidad_generativa"> */}
         <a href="/" className="flex items-center gap-2">
        <div className="h-8 flex gap-4">
        
          <img
            className="object-contain"
            src="assets/logos/sg-logo.png"
            alt="logo"
          />
        </div>
      </a>

      {/* menu container */}
      <div className="relative w-fit flex">
        {/* menu icons */}
        <div className="block md:hidden">
          {!state.open ? (
            <MenuOutlinedIcon
              className="w-6 h-6"
              onClick={() => setState({ open: !state.open })}
            />
          ) : (
            <CloseOutlinedIcon
              className="w-6 h-6"
              onClick={() => setState({ open: !state.open })}
            />
          )}
        </div>
        {/* /menu icons */}

        {/* menu nav */} 
        <div className={menuClasses}>
        <ul className={menuItems}>
            {activeRoutes.map((route, index, page) => (
              <li key={index}>
                <Link
                  data-label={route.route}
                  ref={(el) => refs.current[index] = el}
                  href={route.route}
                  className={
                    currentPath == route.route
                      ? menuItemClasses + " font-semibold"
                      : menuItemClasses + " font-normal"
                  }
                  // todo esto de coger el width del elemento y pasarlo a style no funciona
                  // porque no se renderiza el elemento antes de que se ejecute el useEffect
                  // de modo que hay que GUARDAR el width en un array de refs
                  // y luego pasarlo al style del elemento
                  // style={{
                  //   width: refs.current[index].clientWidth + 1 + "rem"
                    
                  // }}
                >
                  {t(route.key)}
                  {console.log(refs.current, " refs.current")}
                   {/* {console.log(refs.current[index].clientWidth, " width current")}  */}
                </Link>
              </li>
            ))}
            {console.log(refs , " refs only")}
          </ul>         
          <LangSwitcher />
        </div>
        {/* /menu nav */}
      </div>
      {/* menu container */}
    </header>
  );
}
