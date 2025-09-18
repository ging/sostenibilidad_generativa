"use client";

import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { activeRoutes } from "@/constants/routes";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Image from "../ui/image";
import Text from "../ui/Text";
import Link from 'next/link';
import { envs } from "@/constants/envs";
const isProd = envs.isProd;
const isCotec = envs.isCotec;

export default function Footer(props) {
  const { t } = useTranslation();

  const projectLogoContainerClasses = clsx(
    "flex flex-col gap-4 items-start  justify-start sm:justify-center"
  );

  const partnerLogoClasses = clsx(
    "flex justify-center items-start h-28 md:h-20 2xl:h-28 w-auto overflow-hidden"
  );

  const sectionTitleClasses = clsx(
    "uppercase text-left-2 text-[14px] font-semibold pb-2 "
  );

  const imgLogoClasses = clsx(
    "contain relative flex h-28 md:h-20 2xl:h-28 overflow-hidden w-auto"
  )

  return (
    <footer className="padding_home flex flex-col flex-wrap  gap-8 xs:flex-row justify-between items-start bg-background-500 text-gray-400">
      <div className={projectLogoContainerClasses}>
        <img
          className="min-w-60 max-w-[200px] md:max-w-[300px] opacity-70" // Corrige la sintaxis del max-width
          src={(isCotec || !isProd ? "/": "") + "assets/logos/sg-logo.png"}
          alt="logo placeholder"
        />
        <div className=" flex justify-center flex-col gap-0 xs:gap-2 md:flex-col md:gap-0 ">
          <div className="flex flex-row items-center mb-1">
          <EmailOutlinedIcon sx={{ fontSize: 20 }}  className="mr-2  text-base text-gray-400 h-4 w-4 " />
          <Text type="small" className=" text-[14px] flex gap-1 text-sm text-gray-400 !mb-0" >
            <b>{t("footer.email")} </b>
          </Text>
          </div>
          <Text type="small" className="text-gray-400 text-sm "> javier.conde.diaz@upm.es</Text>
        </div>
      </div>

      <nav className="">
        <div className={sectionTitleClasses}>{t("footer.title1")}</div>
        <ul
          className={`columns-1 gap-x-8 inline-block ${
            activeRoutes.length <= 4 ? "xs:columns-1" : "xs:columns-2"
          }`}
        >
          {activeRoutes.map((route, index) => (
            <li
              key={index}
              className={
                route.route === props.route
                  ? "li-selected text-left mb-0.5 lg:mb-1.5 hover:underline"
                  : "text-left mb-1 lg:mb-1 hover:underline"
              }
            >
              <Link  href={route.route}>
              <Text type="small" className="text-sm">{t(route.key)}</Text>  
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <div className={sectionTitleClasses} >{t("footer.title3")}</div>
        <div className="w-fit flex gap-x-12 gap-y-5 md:gap-8 2xl:gap-12 justify-start items-start md:items-center flex-wrap flex-col xs:flex-row sm:flex-wrap lg:flex-nowrap mt-6 md:mt-2">
          <div className={partnerLogoClasses}>
                <a href="https://www.cotec.es/" target="_blank" rel="noopener noreferrer">
            <img
              src={(isCotec || !isProd ? "/": "") + "assets/logos/cotec-logo.png"} // Usa una ruta válida
              alt="Descripción de la imagen"
              className={imgLogoClasses} // Asegura que la imagen no exceda la altura máxima
            />
            </a>
          </div>
          <div className={partnerLogoClasses}>
                <a href="http://ging.github.io/" target="_blank" rel="noopener noreferrer">
            <img
              src={(isCotec || !isProd ? "/": "") + "assets/logos/GING-logo.png"} // Usa una ruta válida
              alt="Descripción de la imagen"
              className={imgLogoClasses} 
            />
            </a>
          </div>
            <div className={partnerLogoClasses}>
              <a href="https://www.upm.es/" target="_blank" rel="noopener noreferrer">
            <img
              src={(isCotec || !isProd ? "/": "") + "assets/logos/UPM-logo.png"} // Usa una ruta válida
              alt="Descripción de la imagen"
              className={imgLogoClasses}  // Asegura que la imagen no exceda la altura máxima
            />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
