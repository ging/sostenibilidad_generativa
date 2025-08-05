"use client";

import React from "react";
import clsx from "clsx";

/* 
  ------------------------------------------------------------------
  Componente para los titulos y etiquetas <h> -> jerarquías de texto // para esto se usa el Heading, este para bloques de texto
  ------------------------------------------------------------------
*/

const Text = ({ type = "p", children, className }) => {
  // Determinar el componente HTML según el nivel
  let Component;
  switch (type) {
    case "p":
      Component = "p";
      break;
    case "lg-p":
      Component = "p";
      break;
       case "full-p":
      Component = "p";
      break;
    case "small":
      Component = "p";
      break;
    case "xs":
      Component = "p";
      break;
    case "source":
      Component = "p";
      break;
    case "short-p":
      Component = "p";
      break;
    default:
      Component = "p"; // Por defecto, usar h1 si no se especifica nivel válido
      break;
  }

  // clsx, aplica clases según el valor del atributo level de manera dinámica
  const classes = clsx([
    "font-body font-normal tracking-wide",
    {/*"text-balance"*/ },
    {
      "text-24 text-20 2xl:text-24 4xl:text-32 max-w-[60ch] xl:max-w-[63ch] 2xl:max-w-[65ch] text-pretty": type === "lg-p",
      "text-20 2xl:text-24": type === "full-p",
      "text-20 sm:text-base 2xl:text-20 max-w-[75ch] xl:max-w-[83ch] 2xl:max-w-[90ch] text-pretty mb-2": type === "p",
      "text-base sm:text-sm 2xl:text-base": type === "small",
      "text-sm sm:text-xs 2xl:text-sm": type === "xs",
      "text-base sm:text-sm 2xl:text-base italic": type === "source",
      "text-20 sm:text-base 2xl:text-20 max-w-[66ch] xl:max-w-[71ch] 2xl:max-w-[83ch]": type === "short-p",
    },
    className
  ])

  return <Component className={classes}>{children}</Component>;
};

export default Text;
