"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { projects } from "@/constants/results.js";
import { useTranslation } from "react-i18next";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import PolylineIcon from "@mui/icons-material/Polyline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Heading from "@/components/ui/Heading";
import Image from "@/components/ui/image";
import clsx from "clsx";
import { envs } from "@/constants/envs";
const isProd = envs.isProd;
const isCotec = envs.isCotec;

import { Button, ButtonVariants } from "@/components/ui/button";
import {
  CustomCard,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/customCard";
import Text from "@/components/ui/Text";
import { OrderedList, UnorderedList, ListItem } from "@/components/ui/list";
import CircularChart from "@/components/ui/CircularChart";
import EnvironmentalFactorsSVG from "@/components/ui/EnvironmentalFactorsSVG";
import EnergyConsumptionChart from "@/components/ui/EnergyConsumptionChart";
const iconCardClasses = clsx("!h-20 fill-primary");


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
            {<Text type="small" className="text-left">
              <i className="italic " dangerouslySetInnerHTML={{ __html: t("environmentalImpact.Intro.sectionBody") }} />
            </Text>}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-12">
        {/* SECCION 1 */}
        <div className="standard_margin  !my-0 pb-4 rounded-md flex gap-4">
          <div className="w-full lg:w-full">
            <Heading level="h4" className="text-left font-bold" id="impactoMedioambiente">
              {t("environmentalImpact.firstSection.title")}
            </Heading>
            {/* Card */}
            <div className=" md:float-right mb-4 md:mb-2 md:mx-6 md:my-2 w-full xs:w-4/5 sm:w-3/5 md:w-2/5 px-4 py-2 rounded-md flex flex-col highlight-green ">
              <Heading level="highlightTitle" className="text-left ">
                {t("environmentalImpact.firstSection.highlight.title")}
              </Heading>
              <div className="flex flex-col justify-between h-full ">
                <Text type="p" className="text-left ">
                  {t("environmentalImpact.firstSection.highlight.body")}
                </Text>
                <Text type="source" className="mt-4 text-left ">
                  <b> {t("environmentalImpact.source")}</b>
                  <span className="leading-8" dangerouslySetInnerHTML={{__html: t("environmentalImpact.firstSection.highlight.source")}} />
                </Text>
              </div>
            </div>
            <Text type="full-p" className="text-left">
              {t("environmentalImpact.firstSection.body")}
            </Text>
          </div>
        </div>

        {/* SECCION 2. */}
        <div className="standard_margin !my-0 pb-4 rounded-md flex gap-4">
          <div className="w-full lg:w-full">
            <Heading level="h4" className="text-left">
              {t("environmentalImpact.secondSection.title")}
            </Heading>
            <Text type="full-p" className="text-left">
              {t("environmentalImpact.secondSection.body")}
            </Text>
            <OrderedList>
                <ListItem textType="full-p" dangerouslySetInnerHTML={{__html: t("environmentalImpact.secondSection.li1")}} />
                <div className=" md:float-left mb-4 md:mb-2 md:mr-6 md:my-2 w-full xs:w-4/5 sm:w-3/5 md:w-2/5 px-4 py-2 rounded-md flex flex-col highlight-neonGreen ">
                  <Heading level="highlightTitle" className="text-left ">
                    {t("environmentalImpact.secondSection.highlight3.title")}
                  </Heading>
                  <div className="flex flex-col justify-between h-full ">
                    <Text type="p" className="text-left ">
                      <span dangerouslySetInnerHTML={{__html: t("environmentalImpact.secondSection.highlight3.body")}} />
                    </Text>

                    <Text type="source" className="mt-4 text-left ">
                      <b> {t("environmentalImpact.source")}</b>
                      <span dangerouslySetInnerHTML={{__html: t("environmentalImpact.secondSection.highlight3.source")}} />
                    </Text>
                  </div>
                </div>
                <ListItem textType="full-p" dangerouslySetInnerHTML={{__html: t("environmentalImpact.secondSection.li2")}} />
            </OrderedList>
            <Text type="full-p" className="text-left">
              {t("environmentalImpact.secondSection.body2")}
            </Text>
            
            {/* Gráfico circular interactivo */}
            <div className="flex justify-center my-8">
              <CircularChart 
                data={
                  [{question: t("environmentalImpact.secondSection.circularChartData.question1"), questionLong: t("environmentalImpact.secondSection.circularChartData.questionLong1"),  content: t("environmentalImpact.secondSection.circularChartData.content1")},
                    {question: t("environmentalImpact.secondSection.circularChartData.question2"), questionLong: t("environmentalImpact.secondSection.circularChartData.questionLong2"),content: t("environmentalImpact.secondSection.circularChartData.content2"), image: (isCotec || !isProd ? '/' : '') + 'assets/img/sections/datacenter.webp', copyright: t("environmentalImpact.secondSection.circularChartData.copyright2")}, 
                    {question: t("environmentalImpact.secondSection.circularChartData.question3"), questionLong: t("environmentalImpact.secondSection.circularChartData.questionLong3"), content: t("environmentalImpact.secondSection.circularChartData.content3"), image: (isCotec || !isProd ? '/' : '') + 'assets/img/sections/gpu.webp', copyright: t("environmentalImpact.secondSection.circularChartData.copyright3")},
                    {question: t("environmentalImpact.secondSection.circularChartData.question4"), questionLong: t("environmentalImpact.secondSection.circularChartData.questionLong4"), content: t("environmentalImpact.secondSection.circularChartData.content4")},
                  ]
                } 
                size={500}
                className="mx-auto"
              />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Card */}
              <div className="flex-1 min-w-[300px] max-w-[400px] px-4 py-2 rounded-md flex flex-col highlight-outline">
                <Heading level="highlightTitle" className="text-left ">
                  {t("environmentalImpact.secondSection.highlight1.title")}
                </Heading>
                <div className="flex flex-col justify-between h-full ">
                  <Text type="p" className="text-left ">
                    {t("environmentalImpact.secondSection.highlight1.body")}
                  </Text>
                </div>
                <Text type="source" className="mt-4 text-left">
                  <b> {t("environmentalImpact.source")}</b>
                  <span dangerouslySetInnerHTML={{__html: t("environmentalImpact.secondSection.highlight1.source")}} />
                </Text>
              </div>
              {/* Card */}
              <div className="flex-1 min-w-[300px] max-w-[400px] px-4 py-2 rounded-md flex flex-col highlight-green">
                <Heading level="highlightTitle" className="text-left ">
                  {t("environmentalImpact.secondSection.highlight4.title")}
                </Heading>
                <div className="flex flex-col justify-between h-full ">
                  <Text type="p" className="text-left ">
                    {t("environmentalImpact.secondSection.highlight4.body")}
                  </Text>

                  <Text type="source" className="mt-4 text-left ">
                    <b> {t("environmentalImpact.source")}</b>
                    <span dangerouslySetInnerHTML={{__html: t("environmentalImpact.secondSection.highlight4.source")}} />
                  </Text>
                </div>
              </div>
              {/* Card */}
              <div className="flex-1 min-w-[300px] max-w-[400px] px-4 py-2 rounded-md flex flex-col highlight-blue">
                <Heading level="highlightTitle" className="text-left ">
                  {t("environmentalImpact.secondSection.highlight2.title")}
                </Heading>
                <div className="flex flex-col justify-between h-full ">
                  <Text type="p" className="text-left ">
                    {t("environmentalImpact.secondSection.highlight2.body")}
                  </Text>
                  <Text type="source" className="mt-4 text-left ">
                    <b> {t("environmentalImpact.source")}</b>
                    <span dangerouslySetInnerHTML={{__html: t("environmentalImpact.secondSection.highlight2.source")}} />
                  </Text>
                </div>
              </div>
            </div> 
          </div>
        </div>

 {/* SECCION 3. */}
        <div className="standard_margin !my-0 pb-4 rounded-md flex gap-4">
          <div className="w-full lg:w-full">
            <Heading level="h4" className="text-left" id="como-se-mide">
              {t("environmentalImpact.thirdSection.title")}
            </Heading>
            <div className=" md:float-right mb-4 md:mb-2 md:mx-6 md:my-2 w-full xs:w-4/5 sm:w-3/5 md:w-2/5 px-4 py-2 rounded-md flex flex-col highlight-blue ">
              <Heading level="highlightTitle" className="text-left ">
                {t("environmentalImpact.thirdSection.highlight.title")}
              </Heading>
              <div className="flex flex-col justify-between h-full ">
                <Text type="p" className="text-left ">
                  {t("environmentalImpact.thirdSection.highlight.body")}
                </Text>
                <Text type="source" className="mt-4 text-left ">
                  <b> {t("environmentalImpact.source")}</b>
                  <span dangerouslySetInnerHTML={{__html: t("environmentalImpact.thirdSection.highlight.source")}} />
                </Text>
              </div>
            </div>
            <Text type="full-p" className="text-left">
              <span dangerouslySetInnerHTML={{ __html: t("environmentalImpact.thirdSection.body") }} />
            </Text>
            
            {/* Environmental Impact Factors SVG - Interactive diagram */}
            <div className="my-0">
              <EnvironmentalFactorsSVG />
            </div>
          </div>

        </div>

         {/* SECCION 4. */}
        <div className="standard_margin !my-0 pb-4 rounded-md flex gap-4">
          <div className="w-full lg:w-full">
            <Heading level="h4" className="text-left" id="impactoIA">
              {t("environmentalImpact.fourthSection.title")}
            </Heading>
            <div className=" md:float-left mb-4 md:mb-2 md:mr-6 md:my-2 w-full xs:w-4/5 sm:w-3/5 md:w-2/5 px-4 py-2 rounded-md flex flex-col highlight-outline ">
              <Heading level="highlightTitle" className="text-left ">
                {t("environmentalImpact.fourthSection.highlight.title")}
              </Heading>
              <div className="flex flex-col justify-between h-full ">
                <Text type="p" className="text-left ">
                  {t("environmentalImpact.fourthSection.highlight.body")}
                </Text>

                <Text type="source" className="mt-4 text-left ">
                  <b> {t("environmentalImpact.source")}</b>
                  <span dangerouslySetInnerHTML={{__html: t("environmentalImpact.fourthSection.highlight.source")}} />
                </Text>
              </div>
            </div>

            <Text type="full-p" className="text-left">
              <span dangerouslySetInnerHTML={{ __html: t("environmentalImpact.fourthSection.body") }} />
            </Text>
            <div className=" md:float-right mb-4 md:mb-2 md:mx-6 md:my-2 w-full xs:w-4/5 sm:w-3/5 md:w-2/5 px-4 py-2 rounded-md flex flex-col highlight-green ">
              <Heading level="highlightTitle" className="text-left ">
                {t("environmentalImpact.fourthSection.highlight2.title")}
              </Heading>
              <div className="flex flex-col justify-between h-full ">
                <Text type="p" className="text-left ">
                  {t("environmentalImpact.fourthSection.highlight2.body")}
                </Text>
              </div>
            </div>
            <Text type="full-p" className="text-left">
              {t("environmentalImpact.fourthSection.body2")}
            </Text>
          </div>
        </div>
          {/* Energy Consumption Chart */}
          <div className="w-full lg:w-full">
            <EnergyConsumptionChart />
          </div>

         {/* SECCION 5. */}
        <div className="standard_margin !my-0 pb-4 rounded-md flex gap-4">
          <div className="w-full lg:w-full">
            <Heading level="h4" className="text-left" id="presente-futuro">
              {t("environmentalImpact.fifthSection.title")}
            </Heading>
            <div className=" md:float-right mb-4 md:mb-2 md:ml-6 md:my-2 w-full xs:w-4/5 sm:w-3/5 md:w-2/5 px-4 py-2 rounded-md flex flex-col highlight-neonGreen ">
              <Heading level="highlightTitle" className="text-left ">
                {t("environmentalImpact.fifthSection.highlight.title")}
              </Heading>
              <div className="flex flex-col justify-between h-full ">
                <Text type="p" className="text-left ">
                  {t("environmentalImpact.fifthSection.highlight.body")}
                </Text>
                <Text type="source" className="mt-4 text-left ">
                  <b> {t("environmentalImpact.source")}</b>
                  <span dangerouslySetInnerHTML={{ __html: t("environmentalImpact.fifthSection.highlight.source") }} />
                </Text>
              </div>
            </div>
            <Text type="full-p" className="text-left">
              {t("environmentalImpact.fifthSection.body")}
            </Text>
          
            <UnorderedList>
                <ListItem textType="full-p" dangerouslySetInnerHTML={{__html: t("environmentalImpact.fifthSection.li1")}} />

                <div className="flex items-center justify-center h-96" style={{ maxWidth: '500px', width: '90%', height: 'auto', margin: '5px auto 0' }}>
                  <Image
                    src={(isCotec || !isProd ? '/' : '') + 'assets/img/sections/conversation.png'}
                    className="rounded-lg shadow-lg"
                    layout="center"
                    copyright={t("environmentalImpact.fifthSection.imagecopy") || ""}
                  />
                </div>
                <ListItem textType="full-p" dangerouslySetInnerHTML={{__html: t("environmentalImpact.fifthSection.li2")}} />
                <div className=" md:float-left mb-4 md:mb-2 md:mr-6 md:my-2 w-full xs:w-4/5 sm:w-3/5 md:w-2/5 px-4 py-2 rounded-md flex flex-col highlight-blue ">
                  <Heading level="highlightTitle" className="text-left ">
                    {t("environmentalImpact.fifthSection.highlight2.title")}
                  </Heading>
                  <div className="flex flex-col justify-between h-full ">
                    <Text type="p" className="text-left ">
                      <span dangerouslySetInnerHTML={{__html: t("environmentalImpact.fifthSection.highlight2.body")}} />
                    </Text>

                    <Text type="source" className="mt-4 text-left ">
                      <b> {t("environmentalImpact.source")}</b>
                      <span dangerouslySetInnerHTML={{__html: t("environmentalImpact.fifthSection.highlight2.source")}} />
                    </Text>
                  </div>
                </div>
                <ListItem textType="full-p" dangerouslySetInnerHTML={{__html: t("environmentalImpact.fifthSection.li3")}} />
            </UnorderedList>
          </div>
        </div>


         {/* SECCION 6. */}
        <div className="standard_margin !my-0 pb-4 rounded-md flex gap-4">
          <div className="w-full lg:w-full">
            <Heading level="h4" className="text-left" id="guia-buenas-practicas">
              {t("environmentalImpact.sixthSection.title")}
            </Heading>

            <Text type="full-p" className="text-left">
              <span dangerouslySetInnerHTML={{__html: t("environmentalImpact.sixthSection.body")}} />
            </Text>

            <OrderedList>
                <ListItem textType="full-p" dangerouslySetInnerHTML={{__html: t("environmentalImpact.sixthSection.li1")}} />
                <div className=" md:float-right mb-4 md:mb-2 md:mx-6 md:my-2 w-full xs:w-4/5 sm:w-3/5 md:w-2/5 px-4 py-2 rounded-md flex flex-col highlight-green ">
                  <Heading level="highlightTitle" className="text-left ">
                    {t("environmentalImpact.sixthSection.highlight.title")}
                  </Heading>
                  <div className="flex flex-col justify-between h-full ">
                    <Text type="p" className="text-left ">
                      <span dangerouslySetInnerHTML={{__html: t("environmentalImpact.sixthSection.highlight.body")}} />
                    </Text>

                    <Text type="source" className="mt-4 text-left ">
                      <b> {t("environmentalImpact.source")}</b>
                      <span dangerouslySetInnerHTML={{__html: t("environmentalImpact.sixthSection.highlight.source")}} />
                    </Text>
                  </div>
                </div>
                <ListItem textType="full-p" dangerouslySetInnerHTML={{__html: t("environmentalImpact.sixthSection.li2")}} />
                <ListItem textType="full-p" dangerouslySetInnerHTML={{__html: t("environmentalImpact.sixthSection.li4")}} />
                <div className=" md:float-left mb-4 md:mb-2 md:mr-6 md:my-2 w-full xs:w-4/5 sm:w-3/5 md:w-2/5 px-4 py-2 rounded-md flex flex-col highlight-neonGreen ">
                  <Heading level="highlightTitle" className="text-left ">
                    {t("environmentalImpact.sixthSection.highlight2.title")}
                  </Heading>
                  <div className="flex flex-col justify-between h-full ">
                    <Text type="p" className="text-left ">
                      {t("environmentalImpact.sixthSection.highlight2.body")}
                    </Text>

                    <Text type="source" className="mt-4 text-left ">
                      <b> {t("environmentalImpact.source")}</b>
                      <span dangerouslySetInnerHTML={{__html: t("environmentalImpact.sixthSection.highlight2.source")}} />
                    </Text>
                  </div>
                </div>
                <ListItem textType="full-p" dangerouslySetInnerHTML={{__html: t("environmentalImpact.sixthSection.li3")}} />
                <ListItem textType="full-p" dangerouslySetInnerHTML={{__html: t("environmentalImpact.sixthSection.li5")}} />
                <ListItem textType="full-p" dangerouslySetInnerHTML={{__html: t("environmentalImpact.sixthSection.li6")}} />
                <ListItem textType="full-p" dangerouslySetInnerHTML={{__html: t("environmentalImpact.sixthSection.li7")}} />
                <ListItem textType="full-p" dangerouslySetInnerHTML={{__html: t("environmentalImpact.sixthSection.li8")}} />
                <ListItem textType="full-p" dangerouslySetInnerHTML={{__html: t("environmentalImpact.sixthSection.li9")}} />
            </OrderedList>

            <Text type="full-p" className="text-left">
              <span dangerouslySetInnerHTML={{__html: t("environmentalImpact.sixthSection.body2")}} />
            </Text>
            <div className="flex items-center justify-center h-96" style={{ maxWidth: '700px', width: '90%', height: 'auto', margin: '5px auto 0' }}>
                <a target="_blank" href="challenges">
                  <Image
                    src={(isCotec || !isProd ? '/' : '') + 'assets/img/sections/challenges.png'}
                    className="rounded-lg shadow-lg"
                    layout="center"
                    copyright={t("environmentalImpact.sixthSection.imagecopy") || ""}
                  />
                  <Link href="/challenges" className={`${iconCardClasses} flex justify-center`}>
                      <Button variant="outline" size="sm" className="mt-4">
                        {t("front.summaryWeb.challenges.button2")}
                        <ArrowForwardIcon
                          sx={{ fontSize: 18 }}
                          className="h-4 w-4 "
                        />
                      </Button>
                  </Link>
                </a>
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
