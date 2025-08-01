"use client";

import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { activeRoutes } from "@/constants/routes";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Image from "../ui/image";
import Text from "../ui/Text";
import Link from 'next/link';

export default function Footer(props) {
  const { t } = useTranslation();

  const projectLogoContainerClasses = clsx(
    "flex flex-col gap-4 items-start justify-start sm:justify-center"
  );

  const partnerLogoClasses = clsx(
    "flex justify-start items-start h-20 w-40 overflow-hidden"
  );

  const sectionTitleClasses = clsx(
    "uppercase text-left-2 text-[14px] font-semibold "
  );

  return (
    <footer className="narrow_padding flex flex-col flex-wrap  gap-8 xs:flex-row justify-between items-start bg-background-500 text-gray-400">
      <div className={projectLogoContainerClasses}>
        <img
          className="min-w-60 max-w-[200px]" // Corrige la sintaxis del max-width
          src="assets/logos/sg-logo.png"
          alt="logo placeholder"
        />
        <div className=" flex justify-center flex-col gap-0 xs:gap-2 md:flex-col md:gap-0 ">
          <div className="flex flex-row">
          <EmailOutlinedIcon className="mr-2 mt-0.5 text-base text-gray-400"  />
          <Text className=" text-[14px] flex gap-1 text-sm text-gray-400">
            <b>{t("footer.email")} </b>
          </Text>
          </div>
          <Text className="text-gray-400 text-sm"> responsable@upm.es</Text>
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
              <Link className="text-sm" href={route.route}>
                {t(route.key)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <div className={sectionTitleClasses + " pb-2"} >{t("footer.title3")}</div>
        <div className="w-fit flex gap-2 justify-start items-center flex-wrap flex-col xs:flex-row sm:flex-wrap lg:flex-nowrap">

          <div className={partnerLogoClasses}>
            <Image
              fit="contain" // Ajuste de la imagen
              src="assets/logos/cotec-logo.png" // Usa una ruta válida
              alt="Descripción de la imagen"
              className="max-h-full w-auto" // Asegura que la imagen no exceda la altura máxima
            />
          </div>
          <div className={partnerLogoClasses}>
            <Image
              fit="contain" // Ajuste de la imagen
              src="assets/logos/GING-logo.png" // Usa una ruta válida
              alt="Descripción de la imagen"
              className="max-h-full w-auto" // Asegura que la imagen no exceda la altura máxima
            />
          </div>
            <div className={partnerLogoClasses}>
            <Image
              fit="contain" // Ajuste de la imagen
              src="assets/logos/UPM-logo.png" // Usa una ruta válida
              alt="Descripción de la imagen"
              className="max-h-full w-auto" // Asegura que la imagen no exceda la altura máxima
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
