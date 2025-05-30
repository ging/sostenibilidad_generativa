"use client";

import Header from "@/components/core/Header";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";
import image from "next/image";
import { useState, useEffect } from "react";
import { mytools } from "@/constants/tools";
import { useTranslation } from "react-i18next";
import FaceIcon from "@mui/icons-material/Face";
import { Card, CardVariants } from "@/components/core/Cards";
// import  ToolCard from "@/components/core/Cards/ToolCard";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";


export default function Tools(props) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"tools page_" + currentLang}>
      {/* <Header route="/tools" /> */}
      <div className="standard_margin ">
        <Heading level="h2">{t("tools.title")}</Heading>
        <Text type="p" className="pb-8 xs:p-6 md:p-0">{t("tools.description")}</Text>
      </div>
      <main>
        <section className="standard_margin">
          <div className="grid sm:gap-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 ">
              {mytools.map( 
                ({ key, title, description_es, description_en, route}) => {
                  return (
                    <Card
                      key={key}
                      title={title}
                      currentLang={currentLang}
                      cardType={"tool"}
                      className={CardVariants({variant: "tool"})}
                      description={currentLang === "es" ? description_es : description_en}
                      route={route}
                  
                    >
                 
                    </Card>
                 
                  );
                }
              )}
            </div>
        </section>
      </main>
    </div>
  );
}

const CreateLink = (props) => {
  return props.route.match(/^http/) ? (
    <a target="_blank" href={props.route} rel="noopener noreferrer">
      {props.children}
    </a>
  ) : (
    <Link to={props.route}>{props.children}</Link>
  );
};

{
  /* <CreateLink route={github}>
  <span> Github </span>{" "}
</CreateLink> */
}
