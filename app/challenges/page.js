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


export default function Challenges(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"tools page_" + currentLang}>
      {/* <Header route="/tools" /> */}
      <div className="standard_margin ">
        <Heading level="h3">{t("escaperooms.title")}</Heading>
        <Text type="p" className="pb-8 xs:p-6 md:p-0">{t("escaperooms.description1")}</Text>
        <Text type="p" className="pb-8 xs:p-6 md:p-0">{t("escaperooms.description2")}</Text>
        <Text type="p" className="pb-8 xs:p-6 md:p-0">{t("escaperooms.description3")}</Text>
        <Text type="p" className="pb-8 xs:p-6 md:p-0">{t("escaperooms.description4")}</Text>
        <Text type="p" className="pb-8 xs:p-6 md:p-0">{t("escaperooms.description5")}</Text>
   
      </div>
      <main>
        <section className="standard_margin">
          <div className="grid sm:gap-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 ">
              {escaperooms.map( 
                ({ key, title, description_es, description_en, route,
                  img}) => {
                  return (
                    <Card
                      key={key}
                      title={title}
                      currentLang={currentLang}
                      cardType={"escaperoom"}
                      className={CardVariants({variant: "escaperoom"})}
                      description={currentLang === "es" ? description_es : description_en}
                      route={route}
                      img={img}
                      
                    
                    ></Card>
                 
                  );
                }
              )}
            </div>
        </section>
      </main>
    </div>
  );
}


