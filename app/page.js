"use client";
import * as React from "react";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { Button, ButtonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
import { Divider, DividerVariants } from "@/components/ui/divider";
import Text from "@/components/ui/Text";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from "@/components/ui/image";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CategoryIcon from '@mui/icons-material/Category';
import HubIcon from '@mui/icons-material/Hub';
import team from "@/constants/placeholder-constants/team.json";
import { Card, CardVariants } from "@/components/core/Cards";

import {
  CustomCard,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/customCard";

//Banner
import {
  Banner,
  BannerTitle,
  BannerDescription,
  BannerButton,
  BannerContent,
  BannerImg,
} from "@/components/core/Banner";

const iconCardClasses = clsx(
  "!h-20 fill-primary"
);

// UI
export default function Page() {
  //const [projects, setProjects] = useState(myprojectCards);
  const [members, setMembers] = useState(team || []); // Inicializa el estado con los datos de 'team'
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
 
  const renderMembers = (members) => {
      return members.map(
        (
          {
            name,
            description,
            position,
            img,
            github,
            email,
            center,
            roleTranslationKey,
          },
          key
        ) => {
          const translatedRole = t(`${roleTranslationKey}`);
          const translatedPosition = t(position);
          return (
            <Card
              key={key}
              cardType={"team"}
              className={CardVariants({
                variant: "team",
              })}
              img={img}
              name={name}
              position={position}
              role={translatedRole}
              center={center}
              email={email}
            />
          );
        }
      );
    };
  

  return (
    <main>
      <Banner>
        <BannerContent className={"w-full"}>
          <BannerTitle className={"text-white"}>{t("front.title1")} <br></br>
        <span className="font-chaney-wide">{t("front.title2")} </span>  </BannerTitle>
          <BannerDescription className="h-full text-balance flex flex-col gap-2">
            {t("front.description")}
      
          </BannerDescription>
          <Divider />
          {/* <Button
            href="#"
            className={ButtonVariants({
              variant: "default",
              size: "lg",
              radius: "rounded_sm",
            })}
          >
            {t("front.action-button")} <ArrowForwardIcon className=" h-4 w-4" />
          </Button> */}
        </BannerContent>

      </Banner> 


      <section className="standard_padding">
        <Heading level="h3">{t("front.section1Title")}</Heading>
        <Text type="p" > {t("front.section1Description")}</Text>
        <Divider size="lg" />
        <Heading level="h3" className="mb-8">
          {t("front.summaryWeb.sectionTitle")}
        </Heading>
        {/* Cards con iconos */}
        <div className="h-fit flex flex-col sm:grid md:grid-cols-3 gap-6 mb-16">
          <div>
           <RocketLaunchIcon className="text-40 text-primary-500 mb-2" />
            <CardContent>
              <Heading level="h5" className="text-primary-500">
                {t("front.summaryWeb.environmentalImpact.title")}
              </Heading>
              <CardDescription>
                {t("front.summaryWeb.environmentalImpact.body")}
              </CardDescription>
            </CardContent>
          </div>

          <div>
          <CategoryIcon className="text-40 text-primary-500 mb-2" />
          <Heading level="h5" className="text-primary-500">
                {t("front.summaryWeb.challenges.title")}
              </Heading>
              <CardDescription>
              {t("front.summaryWeb.challenges.body")}
              </CardDescription>
          </div>

         <div>
         <HubIcon className="text-40 text-primary-500 mb-2" />
         <Heading level="h5" className="text-primary-500">
                {t("front.summaryWeb.results.title")}
              </Heading>
              <CardDescription>
              {t("front.summaryWeb.results.body")}
              </CardDescription>
          </div>
        </div>
      </section>
   
        <Heading level="h2" className="mx-auto mb-8 sm:mx-0 text-center">
          {t("team.title")}
        </Heading>
        <section className="flex flex-wrap justify-center xs:gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-12">
          {Array.isArray(members) && members.length > 0 ? (
            renderMembers(members)
          ) : (
            <p>No members found.</p>
          )}
        </section>
  
    </main>
  );
}

const CreateLink = (props) => {
  return props.route.match("http") ? (
    <a target="_blank" href={props.route} rel="noopener noreferrer">
      {props.children}
    </a>
  ) : (
    <Link href={props.route}>{props.children}</Link>
  );
};
