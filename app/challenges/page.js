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
            <Text type="full-p" className="pb-2">
              <span dangerouslySetInnerHTML={{__html: t("challenges.escaperoom.description1")}} />
            </Text>
            <Text type="full-p" className="pb-2">
              <span dangerouslySetInnerHTML={{__html: t("challenges.escaperoom.description2")}} />
            </Text>
            <Text type="full-p" className="pb-2">
              <span dangerouslySetInnerHTML={{__html: t("challenges.escaperoom.description3")}} />
            </Text>
            <Text type="full-p" className="pb-2">
              <span dangerouslySetInnerHTML={{__html: t("challenges.escaperoom.description4")}} />
            </Text>
            <Text type="full-p" className="pb-2 font-semibold">
              <span dangerouslySetInnerHTML={{__html: t("challenges.escaperoom.description5")}} />
            </Text>
            <Text type="full-p" className="pb-2 font-semibold">
              <span dangerouslySetInnerHTML={{__html: t("challenges.escaperoom.description6")}} />
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
                    { key, title_es, title_en, description_es, description_en, route, img },
                    index
                  ) => (
                    <Card
                      key={index}
                      title={currentLang === "es" ? title_es : title_en}
                      cardType={"escaperoom"}
                      description_es={description_es}
                      description_en={description_en}
                      route={route}
                      img={img}
                    ></Card>
                  )
                )}
            
              </div>
              <div className="code-scapeRoom">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const code = e.target.elements.final_code.value;
                    const targetHash = "70604c074e2ab18aa953e8218c0ebe01cbdb4922dc66397092004e71ffe766c1";
                    async function hashCode(str) {
                      str = str.trim().toLowerCase();
                      const encoder = new TextEncoder();
                      const data = encoder.encode(str);
                      const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
                      const hashArray = Array.from(new Uint8Array(hashBuffer));
                      return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
                    }
                    const hashed = await hashCode(code);
                    console.log(hashed);
                    if (hashed === targetHash) {
                      alert("¡Código correcto! Enhorabuena te has pasado la Escape Room");
                    } else {
                      alert("Código incorrecto, sigue intentándolo...");
                    }
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="password"
                    name="final_code"
                    placeholder="Código"
                    className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Enviar
                  </button>
                </form>
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
