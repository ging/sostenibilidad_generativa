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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CategoryIcon from "@mui/icons-material/Category";
import HubIcon from "@mui/icons-material/Hub";
import { myteam }  from "@/constants/team";
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

const iconCardClasses = clsx("!h-20 fill-primary");

// UI
export default function Page() {
  //const [projects, setProjects] = useState(myprojectCards);
  const [members, setMembers] = useState(myteam || []); // Inicializa el estado con los datos de 'team'
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const renderMembers = (members) => {
    return members.map(
      (
        {
          name,
          description_es,
          description_en,
          position,
          img,
          github,
          email,
          center,
          role
 
        },
        key
      ) => {
   const translatedRole = t("team.professorCards.roles." + role);
        return (
          <Card
            key={key}
            cardType={"team"}
            className={CardVariants({
              variant: "team",
            })}
                 description_en={description_en}
            description_es={description_es}
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
          <BannerTitle className={"text-white"}>
            {t("front.title1")} <br></br>
            <span className="font-chaney-wide">{t("front.title2")} </span>{" "}
          </BannerTitle>
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

      <div className="">
        <section className="section-props standard_padding">
          <Heading level="h3">{t("front.section1Title")}</Heading>
          <Text type="lg-p"> {t("front.section1Description")}</Text>
          <Divider size="lg" />
        </section>
        {/* Cards con iconos */}
        <section className="standard_padding section-props bg-green-800">
          <Heading level="h3" className="mb-8 !text-accent-200">
            {t("front.summaryWeb.sectionTitle")}
          </Heading>
          <div className="h-fit flex flex-col sm:grid md:grid-cols-3 gap-6 mb-16">
            <div>
              {/* <RocketLaunchIcon className="text-40 text-primary-500 mb-2" /> */}

              <Heading level="h5" className="text-primary-500">
                {t("front.summaryWeb.environmentalImpact.title")}
              </Heading>
              <CardDescription>
                {t("front.summaryWeb.environmentalImpact.body")}
              </CardDescription>
              <Link
                href="/environmental-impact"
                className={iconCardClasses}
              >
                <Button variant="outline" size="sm"  className="mt-4">
                  {t("front.summaryWeb.environmentalImpact.button")}
                  <ArrowForwardIcon sx={{fontSize: 18}} className="h-4 w-4 " />
                </Button>
              </Link>
            </div>

            <div>
              {/* <CategoryIcon className="text-40 text-primary-500 mb-2" /> */}
              <Heading level="h5" className="text-primary-500">
                {t("front.summaryWeb.challenges.title")}
              </Heading>
              <CardDescription>
                {t("front.summaryWeb.challenges.body")}
              </CardDescription>
              <Link
                href="/challenges"
                className={iconCardClasses}
              >
                <Button variant="outline" size="sm" className="mt-4">
                  {t("front.summaryWeb.challenges.button")}
                  <ArrowForwardIcon sx={{fontSize: 18}} className="h-4 w-4 " />
                </Button>
              </Link>
            </div>

            <div>
              {/* <HubIcon className="text-40 text-primary-500 mb-2" /> */}
              <Heading level="h5" className="text-primary-500">
                {t("front.summaryWeb.results.title")}
              </Heading>
              <CardDescription>
                {t("front.summaryWeb.results.body")}
              </CardDescription>
              <Link
                href="/results"
                className={iconCardClasses}
              >
                <Button variant="outline" size="sm"  className="mt-4">
                  {t("front.summaryWeb.results.button")}
                  <ArrowForwardIcon sx={{fontSize: 18}} className="h-2 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* <section className="standard_padding section-props">
        <Heading level="h3" className="mx-auto mb-8 sm:mx-0 text-center">
          {t("team.title")}
        </Heading>
        <div className="flex flex-wrap justify-start xs:gap-x-3 md:gap-x-4 gap-y-3 md:gap-y-4">
          {Array.isArray(members) && members.length > 0 ? (
            renderMembers(members)
          ) : (
            <p>No members found.</p>
          )}
        </div>
      </section> */}
    </main>
  );
}
