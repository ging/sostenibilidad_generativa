"use client";

import React from "react";
import { useState, useEffect } from "react";
import { escaperooms } from "@/constants/escaperooms";
import { useTranslation } from "react-i18next";
import { Card, CardVariants } from "@/components/core/Cards";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tools } from "@/constants/tools";
import { Suspense } from 'react';

export default function Challenges() {
  return (
    <Suspense>
      <ChallengesPage />
    </Suspense>
  );
}

function ChallengesPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"standard_margin page_" + currentLang}>
      <Tabs defaultValue="escaperoom" className="">
        <TabsList>
          <TabsTrigger value="escaperoom">
            {" "}
            {t("challenges.escaperoom.title")}
          </TabsTrigger>
          <TabsTrigger value="tools">
            {" "}
            {t("challenges.tools.title")}{" "}
          </TabsTrigger>
        </TabsList>

        {/* Sección escaperoom */}
        <TabsContent value="escaperoom">
          <div className="h-4"></div>
          <div className=" ">
            <Heading level="h3">{t("challenges.escaperoom.title")}</Heading>
            <Text type="p" className="pb-2">
              {t("challenges.escaperoom.description1")}
            </Text>
            <Text type="p" className="pb-2">
              {t("challenges.escaperoom.description2")}
            </Text>
            <Text type="p" className="pb-2">
              {t("challenges.escaperoom.description3")}
            </Text>
            <Text type="p" className="pb-2">
              {t("challenges.escaperoom.description4")}
            </Text>
            <Text type="lg-p" className="pb-2 font-semibold">
              {t("challenges.escaperoom.description5")}
            </Text>
          </div>
          <div className="h-4 border-b border-white/40"></div>
          <main>
            <section className="">
              <div className="h-4"></div>
              <Heading level="h4">{t("challenges.escaperoom.rooms")}</Heading>
              <div className="grid sm:gap-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 ">
                {escaperooms.map(
                  (
                    { key, title, description_es, description_en, route, img },
                    index
                  ) => (
                    <Card
                      key={index}
                      title={title}
                      cardType={"escaperoom"}
                      description_es={description_es}
                      description_en={description_en}
                      route={route}
                      img={img}
                    ></Card>
                  )
                )}
            
              </div>
            </section>
          </main>
        </TabsContent>
        {/* Seccion herramientas */}

        <TabsContent value="tools">
          <div className="h-4"></div>
          <Heading level="h3">{t("challenges.tools.title")}</Heading>
          <Text type="p" className="pb-8 xs:p-6 md:p-0">
            {t("challenges.tools.description1")}
          </Text>
          <div className="h-4"></div>
          <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-3">
            {tools.map(
              ({
                key,
                title_es,
                title_en,
                description_es,
                description_en,
                route,
                img,
              }) => {
                return (
                  <Card
                    key={key}
                    title={currentLang === "es" ? title_es : title_en}
                    cardType={"tool"}
                    className={CardVariants({ variant: "tool" })}
                    description={
                      currentLang === "es" ? description_es : description_en
                    }
                    route={route}
                    img={img}
                  />
                );
              }
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
