"use client";

import Header from "@/components/core/Header";
import React from "react";
import Link from "next/link";
import image from "next/image";
import { useState, useEffect } from "react";
import { escaperooms } from "@/constants/escaperooms";
import { useTranslation } from "react-i18next";
import FaceIcon from "@mui/icons-material/Face";
import { Card, CardVariants } from "@/components/core/Cards";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Challenges(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"standard_margin page_" + currentLang}>
      <Tabs defaultValue="escaperoom" className="">
        <TabsList>
          <TabsTrigger value="escaperoom"> {t("challenges.escaperoom.title")}</TabsTrigger>
          <TabsTrigger value="tools"> {t("challenges.tools.title")} </TabsTrigger>
        </TabsList>
        
        <TabsContent value="tools">
          <div className="h-4"></div>
      <Heading level="h3">{t("challenges.tools.title")}</Heading>
              <Text type="p" className="pb-8 xs:p-6 md:p-0">
              {t("challenges.tools.description1")}
            </Text>
          </TabsContent>

        {/* <Header route="/tools" /> */}
        <TabsContent value="escaperoom">
          <div className="h-4"></div>
          <div className=" ">
            <Heading level="h3">{t("challenges.escaperoom.title")}</Heading>
            <Text type="p" className="pb-8 xs:p-6 md:p-0">
              {t("challenges.escaperoom.description1")}
            </Text>
            <Text type="p" className="pb-8 xs:p-6 md:p-0">
              {t("challenges.escaperoom.description2")}
            </Text>
            <Text type="p" className="pb-8 xs:p-6 md:p-0">
              {t("challenges.escaperoom.description3")}
            </Text>
            <Text type="p" className="pb-8 xs:p-6 md:p-0">
              {t("challenges.escaperoom.description4")}
            </Text>
            <Text type="lg-p" className="pb-8 xs:p-6 md:px-0 md:py-2 font-semibold">
              {t("challenges.escaperoom.description5")}
            </Text>
          </div>
          <div className="h-4 border-b border-white/40"></div>
          <main>
            <section className="">
               <div className="h-4"></div>
              <Heading level="h4">{t("challenges.escaperoom.rooms")}</Heading>
              <div className="grid sm:gap-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 ">
                {escaperooms.map(
                  ({
                    key,
                    title,
                    description_es,
                    description_en,
                    route,
                    img,
                  }) => {
                    return (
                      <Card
                        key={key}
                        title={title}
                        currentLang={currentLang}
                        cardType={"escaperoom"}
                        className={CardVariants({ variant: "escaperoom" })}
                        description={
                          currentLang === "es" ? description_es : description_en
                        }
                        route={route}
                        img={img}
                      ></Card>
                    );
                  }
                )}
              </div>
            </section>
          </main>
        </TabsContent>
      </Tabs>
    </div>
  );
}
