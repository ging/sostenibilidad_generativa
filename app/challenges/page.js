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
import { Suspense } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from '@mui/icons-material/Check';


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
  const [success, setSuccess] = useState(null);
  const [openOverlay, setOpenOverlay] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (openOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openOverlay]);

  return (
    <div className={"standard_margin page_" + currentLang}>
      {console.log(openOverlay + " overlay")}
      {console.log(success + " success")}
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
          {openOverlay ? (
            <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-black/40 z-50 ">
              <div className="bg-gray-800/90 border border-gray-400 rounded-md z-50 w-11/12 h-fit sm:w-fit md:h-fit fixed flex align-center justify-center pb-8 pt-4 px-4 md:px-16">
                <div className="right-4 top-3 absolute ">
                  <CloseIcon
                    sx={{ fontSize: 24 }}
                    onClick={() => setOpenOverlay(false)}
                    className="text-gray-200 hover:cursor-pointer"
                  />
                </div>
                {/* mensaje según acierto o fallo */}
                {success ? (
                  <div className="flex flex-col justify-center items-center">
                    <DotLottieReact
                      className="h-64 w-64 mt-[-38px]"
                      src="https://lottie.host/3e6f98d6-ff09-49a4-a2ad-f3679e39730f/VgeSYl2LIy.lottie"
                      loop
                      autoplay
                    />
                    <div className="mt-[-28px] flex justify-center flex-col items-center">
                      <Heading className="text-center" level="h3"> ¡VICTORIA! </Heading>
                      <p className="text-center">¡Enhorabuena! Has superado el escaperoom</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    <DotLottieReact
                      className="h-32 aspect-3/1"
                      src="https://lottie.host/55d534e2-2d45-4d9c-8a2f-e5fb95d2ac51/b3M65rFRNu.lottie"
                      loop
                      autoplay
                    />
                    <div className="flex justify-center flex-col items-center">
                      <Heading className="text-center" level="h3"> Código incorrecto </Heading>
                      <p className="text-center">Prueba con otro código diferente.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            ""
          )}
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
            <section className="z-10">
              <div className="h-4"></div>
              <Heading level="h4">{t("challenges.escaperoom.rooms")}</Heading>
              <Text>
                {" "}
                Cuando hayas completado las 4 salas, podrás introducir el código
                de apertura de la escaperoom.{" "}
              </Text>
              <div className="code-scapeRoom mt-4 mb-8">
                <form
                  className="form_password w-full sm:w-48 flex flex-col sm:flex-row gap-4 sm:gap-2"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const code = e.target.elements.final_code.value;
                    const targetHash =
                      "70604c074e2ab18aa953e8218c0ebe01cbdb4922dc66397092004e71ffe766c1";
                    async function hashCode(str) {
                      str = str.trim().toLowerCase();
                      const encoder = new TextEncoder();
                      const data = encoder.encode(str);
                      const hashBuffer = await window.crypto.subtle.digest(
                        "SHA-256",
                        data
                      );
                      const hashArray = Array.from(new Uint8Array(hashBuffer));
                      return hashArray
                        .map((b) => b.toString(16).padStart(2, "0"))
                        .join("");
                    }
                    const hashed = await hashCode(code);
                    console.log(hashed);
                    setOpenOverlay(true);
                    if (hashed === targetHash) {
                      // alert("¡Código correcto! Enhorabuena te has pasado la Escape Room");
                      setSuccess(true);
                    } else {
                      setSuccess(false);
                    }
                  }}
                >
                  <input
                    type="password"
                    name="final_code"
                    placeholder="Código"
                    className="input_password"
                    disabled={success}
                    autocomplete="new-password"
                  />
                  <button
                    type="submit"
                    className={`min-w-20 h-fit min-w-fit inline-flex gap-2 items-center 
                      justify-center font-medium whitespace-nowrap rounded-md transition-colors 
                      focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                      disabled:pointer-events-none uppercase tracking-widest 
                      px-4 py-2 text-20 sm:text-base 2xl:text-20 
                      hover:text-black shadow-sm hover:bg-accent-400 text-wrap sm:text-nowrap ${success ? "bg-background-300 text-accent-200 opacity-100" : "text-background-300  bg-accent-200"}` }
                  disabled={success}
                  >
                    {success ?  <div className="flex justify-center items-center"> 
                      <DotLottieReact
      src="https://lottie.host/45c9e54a-fcbc-4a49-ab3d-a0e975a8fc86/lUI3B0EvVF.lottie"
      loop
      autoplay
    className="absolute w-72 ratio-1/4 opacity-75"
    />
  
                      <CheckIcon className="hidden sm:inline sm:mr-2 "/> 
                      ¡Escaperoom superado!  
 
                      </div> 
                      : 
                      "Enviar"
                      }
                  </button>
                </form>
              </div>
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
