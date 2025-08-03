"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { projects } from "@/constants/results.js";
import { useTranslation } from "react-i18next";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import PolylineIcon from "@mui/icons-material/Polyline";
import Heading from "@/components/ui/Heading";
import { Button, ButtonVariants } from "@/components/ui/button";
import {
  CustomCard,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/customCard";
import Text from "@/components/ui/Text";

export default function enviromentalImpact() {
  // const [projects, setProjects] = useState(myprojectCards);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div
      lang={currentLang}
      className={"environmental-impact page_" + currentLang}
    >
      {/* INTRO */}
      <div className="parallax__layer standard_margin lg:!mb-4">
        <div className="flex flex-col">
          <Heading level="h3" className="text-left">
            {t("environmentalImpact.Intro.sectionTitle")}
          </Heading>
          <div className="flex flex-col md:flex-row gap-4 lg:gap-12 items-start">
            <Text className="basis-3/4">
              {t("environmentalImpact.Intro.sectionBody")}
            </Text>
          </div>
        </div>
      </div>
      {/* TARJETAS DATOS */}
      <div className="flex flex-col gap-2 mb-12">
        {/* SECCION 1 */}
        <div className="standard_margin  !my-0 pb-4 rounded-md flex gap-4">
          <div className="w-full lg:w-4/5">
            <Heading level="h4" className="text-left">
              {t("environmentalImpact.firstSection.title")}
            </Heading>
            <div className=" md:float-right mb-4 md:mb-2 md:mx-6 md:my-2 w-full xs:w-4/5 sm:w-3/5 md:w-2/5 px-4 py-2 rounded-md flex flex-col highlight-green ">
              <span className="">{t("environmentalImpact.fact")} </span>
              <Heading level="highlightTitle" className="text-left ">
                {t("environmentalImpact.firstSection.highlight.title")}
              </Heading>
              <div className="flex flex-col justify-between h-full ">
                <Text type="small" className="text-left ">
                  {t("environmentalImpact.firstSection.highlight.body")}
                </Text>
                <Text type="source" className="mt-4 text-left ">
                  <b> {t("environmentalImpact.source")}</b>
                  {t("environmentalImpact.firstSection.highlight.source")}
                </Text>
              </div>
            </div>
            <Text className="text-left">
              {t("environmentalImpact.firstSection.body")}
            </Text>
          </div>
        </div>

        {/* SECCION 2. */}
        <div className="standard_margin !my-0 pb-4 rounded-md flex gap-4">
          <div className="w-full lg:w-4/5">
            <Heading level="h4" className="text-left">
              {t("environmentalImpact.secondSection.title")}
            </Heading>
            <div className=" md:float-left mb-4 md:mb-2 md:mr-6 md:my-2 w-full xs:w-4/5 sm:w-3/5 md:w-2/5 px-4 py-2 rounded-md flex flex-col highlight-outline ">
              <span className="">{t("environmentalImpact.fact")} </span>
              <Heading level="highlightTitle" className="text-left ">
                {t("environmentalImpact.secondSection.highlight.title")}
              </Heading>
              <div className="flex flex-col justify-between h-full ">
                <Text type="small" className="text-left ">
                  {t("environmentalImpact.secondSection.highlight.body")}
                </Text>

                <Text type="source" className="mt-4 text-left ">
                  <b> {t("environmentalImpact.source")}</b>
                  {t("environmentalImpact.secondSection.highlight.source")}
                </Text>
              </div>
            </div>

            <Text className="text-left">
              {t("environmentalImpact.secondSection.body")}
            </Text>
          </div>
        </div>

 {/* SECCION 3. */}
        <div className="standard_margin !my-0 pb-4 rounded-md flex gap-4">
          <div className="w-full lg:w-4/5">
            <Heading level="h4" className="text-left">
              {t("environmentalImpact.thirdSection.title")}
            </Heading>
            <div className=" md:float-right mb-4 md:mb-2 md:mx-6 md:my-2 w-full xs:w-4/5 sm:w-3/5 md:w-2/5 px-4 py-2 rounded-md flex flex-col highlight-blue ">
              <span className="">{t("environmentalImpact.fact")} </span>
              <Heading level="highlightTitle" className="text-left ">
                {t("environmentalImpact.thirdSection.highlight.title")}
              </Heading>
              <div className="flex flex-col justify-between h-full ">
                <Text type="small" className="text-left ">
                  {t("environmentalImpact.thirdSection.highlight.body")}
                </Text>
                <Text type="source" className="mt-4 text-left ">
                  <b> {t("environmentalImpact.source")}</b>
                  {t("environmentalImpact.thirdSection.highlight.source")}
                </Text>
              </div>
            </div>
            <Text className="text-left">
              {t("environmentalImpact.thirdSection.body")}
            </Text>
          </div>
        </div>

         {/* SECCION 4. */}
        <div className="standard_margin !my-0 pb-4 rounded-md flex gap-4">
          <div className="w-full lg:w-4/5">
            <Heading level="h4" className="text-left">
              {t("environmentalImpact.forthSection.title")}
            </Heading>
            <div className=" md:float-left mb-4 md:mb-2 md:mr-6 md:my-2 w-full xs:w-4/5 sm:w-3/5 md:w-2/5 px-4 py-2 rounded-md flex flex-col highlight-neonGreen ">
              <span className="">{t("environmentalImpact.fact")} </span>
              <Heading level="highlightTitle" className="text-left ">
                {t("environmentalImpact.forthSection.highlight.title")}
              </Heading>
              <div className="flex flex-col justify-between h-full ">
                <Text type="small" className="text-left ">
                  {t("environmentalImpact.forthSection.highlight.body")}
                </Text>

                <Text type="source" className="mt-4 text-left ">
                  <b> {t("environmentalImpact.source")}</b>
                  {t("environmentalImpact.forthSection.highlight.source")}
                </Text>
              </div>
            </div>

            <Text className="text-left">
              {t("environmentalImpact.forthSection.body")}
            </Text>
          </div>
        </div>
      
      </div>
    </div>
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
