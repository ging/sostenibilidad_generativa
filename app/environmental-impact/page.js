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
    <div className={"projects page_" + currentLang}>
      {/* INTRO */}
      <div className="parallax__layer standard_margin">
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
      <div className="flex flex-col gap-6 mb-12">
        {/* SECCION 1 */}
        <div className="standard_margin !my-0 py-4 px-8 rounded-md bg-green-800 flex gap-4">
          <div className="w-3/5">
            <Heading level="h4" className="text-left">
              {t("environmentalImpact.firstSection.title")}
            </Heading>
            <Text className="text-left">
              {t("environmentalImpact.firstSection.body")}
            </Text>
          </div>
          <div className="w-2/5 px-4 py-2 rounded-md flex flex-col highlight-a ">
            <span className="">{t("environmentalImpact.fact")} </span>

            <Heading level="highlightTitle" className="text-left ">
              {t("environmentalImpact.firstSection.highlight.title")}
            </Heading>
            <div className="flex flex-col justify-between h-full ">
              <Text type="small" className="text-left ">
                {t("environmentalImpact.firstSection.highlight.body")}
              </Text>

              <Text type="source" className="text-left ">
                <b> {t("environmentalImpact.source")}</b>
                {t("environmentalImpact.firstSection.highlight.source")}
              </Text>
            </div>
          </div>
        </div>
        {/* SECCION 2 */}
        <div className="standard_margin !my-0 py-4 px-8 rounded-md  bg-green-800 flex  flex-row-reverse  gap-6">
          <div className="w-3/5">
            <Heading level="h4" className="text-left">
              {t("environmentalImpact.firstSection.title")}
            </Heading>
            <Text className="text-left">
              {t("environmentalImpact.firstSection.body")}
            </Text>
          </div>
          <div className="w-2/5 bg-black px-4 py-2 rounded-md flex flex-col">
            <div className="text-white">{t("environmentalImpact.fact")} </div>

            <Heading level="highlightTitle" className="text-left ">
              {t("environmentalImpact.firstSection.highlight.title")}
            </Heading>
            <div className="flex flex-col justify-between h-full">
              <Text type="small" className="text-left text-white">
                {t("environmentalImpact.firstSection.highlight.body")}
              </Text>
              <Text type="source" className="text-left text-white">
                <b> {t("environmentalImpact.source")}</b>
                {t("environmentalImpact.firstSection.highlight.source")}
              </Text>
            </div>
          </div>
        </div>
        {/* SECCION 3 */}
        <div className="standard_margin !my-0 py-4 px-8 rounded-md flex flex-row bg-green-800 gap-4">
          <div className="w-3/5">
            <Heading level="h4" className="text-left">
              {t("environmentalImpact.firstSection.title")}
            </Heading>
            <Text className="text-left">
              {t("environmentalImpact.firstSection.body")}
            </Text>
          </div>
          <div className="w-2/5 bg-black px-4 py-2 rounded-md flex flex-col ">
            <div className="text-white">{t("environmentalImpact.fact")} </div>

            <Heading level="highlightTitle" className="text-left ">
              {t("environmentalImpact.firstSection.highlight.title")}
            </Heading>
            <div className="flex flex-col justify-between h-full">
              <Text type="small" className="text-left text-white">
                {t("environmentalImpact.firstSection.highlight.body")}
              </Text>
              <Text type="source" className="text-left text-white">
                <b> {t("environmentalImpact.source")}</b>
                {t("environmentalImpact.firstSection.highlight.source")}
              </Text>
            </div>
          </div>
        </div>
        {/* SECCION 4 */}
        <div className="standard_margin !my-0 py-4 px-8 rounded-md bg-green-800 flex  flex-row-reverse  gap-6">
          <div className="w-3/5">
            <Heading level="h4" className="text-left">
              {t("environmentalImpact.firstSection.title")}
            </Heading>
            <Text className="text-left">
              {t("environmentalImpact.firstSection.body")}
            </Text>
          </div>
          <div className="w-2/5 bg-black px-4 py-2 rounded-md flex flex-col">
            <div className="text-white">{t("environmentalImpact.fact")} </div>

            <Heading level="highlightTitle" className="text-left ">
              {t("environmentalImpact.firstSection.highlight.title")}
            </Heading>
            <div className="flex flex-col justify-between h-full">
              <Text type="small" className="text-left text-white">
                {t("environmentalImpact.firstSection.highlight.body")}
              </Text>

              <Text type="source" className="text-left text-white">
                <b> {t("environmentalImpact.source")}</b>
                {t("environmentalImpact.firstSection.highlight.source")}
              </Text>
            </div>
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
