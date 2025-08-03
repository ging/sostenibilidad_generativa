"use client";

import clsx from "clsx";
import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";


import Heading from "../ui/Heading";
import { Badge, badgeVariants } from "../ui/badge";
import Text from "../ui/Text";
import { Button, ButtonVariants } from "../ui/button";
import Image from "../ui/image";
import { Divider } from "../ui/divider";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
// } from "@/components/ui/tooltip";
import {
  CustomCard,
  CardBody,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/customCard";

import { useTranslation } from "react-i18next";
import { useState } from "react";


import {
  FaceIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";

import { ExternalLinkIcon } from "@radix-ui/react-icons";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ArticleIcon from '@mui/icons-material/Article';
import Link from "next/link";

const CardVariants = cva(
  "border border-primary min-w-20 p-4 sm:py-4 inline-flex flex-col gap-4 items-center whitespace-nowrap rounded-md font-body text-sm text-text drop-shadow-md hover:scale-[101%] transition-all overflow-hidden",
  {
    variants: {
      direction: {
        default: "flex flex-col", // horizontal
        vertical: "flex",
      },
    },
    defaultVariants: {
      direction: "default",
    },
  }
);


const returnPwidth = () => {
  const minWidth = 600;      // Ancho mínimo
  const maxWidth = 1600;     // Ancho máximo
  const minValue = 2.1;      // Valor mínimo (para 1600px y más)
  const maxValue = 2.4;      // Valor máximo (para 600px)

  const width = window.innerWidth;

  if (width <= minWidth) {
    return maxValue; // Si el ancho es <= 600, devuelve 2.4
  } else if (width >= maxWidth) {
    return minValue; // Si el ancho es >= 1600, devuelve 1.8
  } else {
    // Cálculo lineal entre 600 y 1600
    const ratio = (width - minWidth) / (maxWidth - minWidth);
    return maxValue - ratio * (maxValue - minValue);
  }
};

// VER MAS
const getIdealLength = () => {
  const isMobile = window.innerWidth <= 600;

  if (isMobile) {
    return (window.innerWidth) * 4;
  } else {
    return ((window.innerWidth / returnPwidth()) - 150) * 4;
  }
};

const calculateTextWidth = (description) => {
  if (typeof document === "undefined") {
    throw new Error("This function needs to run in a browser environment.");
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = "16px sans-serif";

  const characters = [...description];

  let totalWidth = 0;
  for (const letter of characters) {
    const letterWidth = context.measureText(letter).width;
    totalWidth += letterWidth;
  }
  return totalWidth;
};
const isDescriptionLongEnough = (description) => {
  return calculateTextWidth(description) >= getIdealLength();
};

const deleteSpaces = (string) => {
  let cleanStr = ''
  for (const char of [...string]) {
    if (char != ' ') {
      cleanStr += char;
    }
  }
  return cleanStr
}

const Card = React.forwardRef(
  (
    {
      direction,
      className,
      title,
      description,
      description_en,
      description_es,
      img,
      svg,
      route,
      name,
      // position,
      // center,
      email,
      cardType,
      role,
      researchLine,
      logo,
      type,
      // researchgate,
      // orcid,
      // webOfScience,
      // googleScholar,
      // linkedin,
      // portalUpm,

    },
    ref
  ) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    // PARA PROJECTCARD / teamcard
    // Manejo de estado para ver si se ha expandido el "ver más" del texto
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleDescription = () => {
      setIsExpanded((prevState) => !prevState); // Alterna entre true y false,
    };

    //elegir description o description_es según el currentLang
    let description_translation = description_en;
    if (currentLang == "es" && description_es) {
      description_translation = description_es;
    }

    //si tiene más de una researchline le ponemos all al link a las publicaciones
    let pubResearchLine = "all";
    if (researchLine && researchLine.length == 1) {
      pubResearchLine = researchLine[0];
    }

    // PROJECT
    const resultCard = (
      <CustomCard className={cn(CardVariants({ direction, className })) + " hover:scale-[102%]  shadow-sm border-gray-400/20 border-b-1 rounded-md bg-background-300 flex-col sm:flex-row gap-3 sm:gap-6 px-6 py-6 items-start"}>
        <div className={`w-full h-fit relative sm:self-stretch sm:w-1/2 flex min-w-[184px] sm:min-h-[200px] sm:h-[200px] sm:max-h-[200px] justify-center items-center  rounded-md`}>
          <Image className=" min-h-[130px] rounded-md" src={logo} fit="cover"
            layout={"bottom-right"}
            hasBadge={true}
            badgeVariant={"default"}
            badgeContent={type}
          />
        </div>
        <CardBody className="">
          <CardContent className="gap-5 mt-0.5 lg:mt-0 lg:gap-[32px]">
            {/* lg:gap-[22px] */}
            <div>
              <CardTitle level="h4" className=" w-fit  hover:!text-accent-400 transition-all mb-0">
                {title && <Link href={route} rel="noopener noreferrer"
                  target="_blank" className={`flex flex-row w-fit gap-2 ${title.length > 18 ? "items-start" : "items-center"}`}>{title} <ExternalLinkIcon className="mt-1 flex-shrink-0" width={24} height={24} /> </Link>
                }
              </CardTitle>
              {description &&
                <div className="flex flex-col gap-1 ">
                  <CardDescription className={isExpanded ? "line-clamp-none text-gray-200" : "line-clamp-4 text-gray-200"}>{description}
                  </CardDescription>
                  {isDescriptionLongEnough(description) && <a className="cursor-pointer font-bold underline underline-offset-2" onClick={toggleDescription} > {isExpanded ? t(`results.card.toggleLess`) : t(`results.card.toggleMore`)}</a>}
                </div>}
            </div>
          </CardContent>
        </CardBody>
      </CustomCard>
    );



    // TEAM - ok
    const teamCard = (
      <CustomCard
        // className={
        //   cn(CardVariants({direction, className }))
        // }
        className="!p-0 sm:!p-2 w-[285px] bg- transparent border-none shadow-none 300/60 h-86  items-start"
      >
        {img && (

          <div className="relative h-[100px] w-[130px]">
            <div className="absolute h-[100px] w-[100px]  rounded-full bg-green-700 opacity-30"></div>
            <img src={img || "placeholder.jpg"}
              className={"absolute h-[100px] w-[100px] rounded-full object-cover saturate-0  mix-blend-lighten"}
            >
            </img>
          </div>
        )}
        {(name || description || email) && (
          <CardContent className="flex justify-center items-start mb-auto">
            <div className="flex flex-row">
              <CardTitle level="title-sm" className={"tracking-wide text-inherit text-center"}>
                <b>{name} </b>
              </CardTitle>
              {/* {position && (<Badge> {position}</Badge>)} */}
            </div>
            {role && <CardDescription type="short-p" className="text-sm  mt-1  text-gray-300/90">{role}</CardDescription>}
            {email && (
              <Badge size="sm" variant="secondary"
                className={"font-semibold break-words text-wrap mt-1 text-gray-300 bg-background-300"}>
                <MailOutlinedIcon className=" text-gray-300 mr-1" sx={{ fontSize: 16 }} />
                {email}
              </Badge>
            )}
            <Divider></Divider>
            <div className="pb-3 gap-2">
        
        
                     <CardDescription>
              <Text type="small" className={isExpanded ? "line-clamp-none text-white" : "line-clamp-3 text-white"}>
             {currentLang === "es"
                           ? description_es
                         : description_en}
                </Text>
                 </CardDescription>
                
               
              <a className="cursor-pointer font-semibold hover:text-accent-300  text-accent-100 underline underline-offset-2 mt-2 text-sm " onClick={toggleDescription}>
                {isExpanded ? t(`results.card.toggleLess`) : t(`results.card.toggleMore`)}
              </a> 
            </div>

          </CardContent>
        )}

      </CustomCard>
    );

    const toolCard = (
      <CustomCard className={cn(CardVariants({ direction, className })) + "border border-white/40 flex flex-col justify-stretch h-full"}>
        {img && (
          <div className="flex justify-start w-full">
            <img
              // src={/* process.env.PUBLIC_URL */ +img || "placeholder.jpg"}
              src={img}
              alt={img || "placeholder.jpg"}
              className={"h-12"}

            />
          </div>
        )}
        <div className="flex flex-col justify-between h-full">
          <div>
            <Heading level="h5">{title}</Heading>
            <CardDescription>
              <Text type="small">{description}
                </Text>
              </CardDescription>
          </div>

          <div className="flex justify-end mt-4">
            <Button asChild variant="secondary" size="sm" radius="rounded_md">
              <Link rel="noopener noreferrer" target="_blank" href={route}>
                {t("tools.toolCards.button")}
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </CustomCard>
    );


    const escaperoomCard = (
      <div className="bg-background-300 border-white/20 border rounded-md flex flex-col justify-stretch ">
        {img && (
          <img
            src={img}
            alt={img}
            className={"w-full contrast-75 rounded-t-md opacity-75"}
          />
        )}
        <div className="px-4 pt-2 pb-4 flex flex-col h-full justify-between">
          <div>
            <Heading level="h5">{title}</Heading>
       
              <CardDescription>
            <Text type="small">{currentLang === "es"
                           ? description_es
                         : description_en}</Text>
              </CardDescription>
             
          </div>
          <div className="flex justify-end mt-4">
            <Button asChild variant="secondary" size="sm" radius="rounded_md">
              <Link rel="noopener noreferrer" target="_blank" href={route}>
                {t("challenges.escaperoom.escaperoomCards.button")}
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );


    // Usar el prop cardType para determinar qué tipo de tarjeta renderizar
    switch (cardType) {
      default:
        return resultCard;
      case "result":
        return resultCard;
      case "team":
        return teamCard;
      case "tool":
        return toolCard;
      case "escaperoom":
        return escaperoomCard;
    }
  }
);

Card.displayName = "Card";

export { Card, CardVariants };
